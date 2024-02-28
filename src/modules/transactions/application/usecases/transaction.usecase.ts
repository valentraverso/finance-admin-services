import { ITransactionEntity } from "../../domain/entities/transaction.entity";
import ITransaction from "../../adapter/repositories/transaction.mongo";
import accountsMaker from "../../../accounts/adapter/express/accounts.maker";
import transactionMaker from "../../adapter/express/transaction.maker";

export class transactionUseCase {
    async create(data: ITransactionEntity) {
        // Object with data to upload
        const dataToUpload: Partial<ITransactionEntity> = {
            ...data
        }

        // Transaction ammount
        const amountWithSignum = data.type === 0 || data.type.toString() === "0" ? data.amount * -1 : data.amount * 1;

        // Add amount to data to upload
        dataToUpload.amount = amountWithSignum;

        // Find balance of account
        const findBalance = await accountsMaker.findById({ id: data.idAccount });

        // Change data adding balance
        data.balance = findBalance.balance;

        // If account doesn't have balance key
        if (!findBalance.hasOwnProperty("balance") || findBalance?.balance == undefined || !findBalance?.balance) {
            // Find last transaction with idAccount
            const findLastTransaction = await transactionMaker.getLastTransaction({ idAccount: data.idAccount });

            if (!findLastTransaction || !findLastTransaction?.hasOwnProperty("balance") || findLastTransaction == undefined) {
                // Change data balance to 0
                data.balance = 0;
            } else {
                // Change data adding balance
                data.balance = findLastTransaction.balance;
            }
        }

        // Add balance to data to upload
        dataToUpload.balance = Math.floor((data.balance + (amountWithSignum)) * 100) / 100;

        // Update balance in account
        await accountsMaker.updateOne({ filters: { _id: data.idAccount }, data: { balance: dataToUpload.balance } });

        const postTransaction = await transactionMaker.post(dataToUpload);

        return postTransaction;
    }
}