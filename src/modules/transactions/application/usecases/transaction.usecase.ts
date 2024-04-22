import { ITransactionEntity } from "../../domain/entities/transaction.entity";
import accountsMaker from "../../../accounts/adapter/express/accounts.maker";
import transactionMaker from "../../adapter/express/transaction.maker";
import ITransactionUseCase from "../../domain/usecases/usecase.domain";

export class transactionUseCase implements ITransactionUseCase {
    async create(data: ITransactionEntity) {
        // Object with data to upload
        const dataToUpload: Partial<ITransactionEntity> = {
            ...data
        }

        // Transaction ammount
        const amountWithSignum = data.type === 0 || data.type.toString() === "0" ? data.amount * -1 : data.amount * 1;

        // Add amount to data to upload
        dataToUpload.amount = amountWithSignum;

        // Find last transaction with idAccount
        const findLastTransaction = await transactionMaker.getLastTransaction({ idAccount: data.idAccount });

        if (!findLastTransaction.balance || !findLastTransaction ) {
            // Change data balance to 0
            data.balance = 0;
        } else {
            // Change data adding balance
            data.balance = findLastTransaction.balance;
        }

        // Add balance to data to upload
        dataToUpload.balance = Math.floor((data.balance + (amountWithSignum)) * 100) / 100;

        // Update balance in account
        await accountsMaker.updateOne({ filters: { _id: data.idAccount }, data: { balance: dataToUpload.balance } });

        const postTransaction = await transactionMaker.post(dataToUpload);

        return postTransaction;
    }

    async getSpendsByMonth(): Promise<ITransactionEntity[] | ITransactionEntity | null> {
        const getSpends = await transactionMaker.getSpendsByMonth();

        return getSpends;
    }

}