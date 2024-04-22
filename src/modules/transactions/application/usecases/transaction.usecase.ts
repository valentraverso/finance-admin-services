import { ITransactionEntity } from "../../domain/entities/transaction.entity";
import accountsMaker from "../../../accounts/adapter/express/accounts.maker";
import transactionMaker from "../../adapter/express/transaction.maker";
import ITransactionUseCase from "../../domain/usecases/usecase.domain";
import chartMaker from "../../../charts/adapter/express/chart.maker";
import customError from "../../../../shared/services/error/customError";

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

    async getSpendsByMonth({idChart}: {idChart?: string}): Promise<ITransactionEntity[] | ITransactionEntity | null> {
        // If id Chart is not null
        if(idChart || idChart !== undefined){
            // Find chart by id
            const getChartById = await chartMaker.getById({id: idChart});

            // If chart doesn't exist
            if(!getChartById || getChartById == undefined){
                customError("We couldn't find chart.", 400);
                return null;
            }

            const getSpends = await transactionMaker.getSpendsByMonth({target: getChartById.target});

            return getSpends;
        }

        // If id chart is null
        const getSpends = await transactionMaker.getSpendsByMonth({});

        return getSpends;
    }

}