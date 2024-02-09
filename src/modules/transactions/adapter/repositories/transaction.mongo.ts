import { createTransactionDTO } from "../../domain/entities/transaction.entity";
import transactionModel from "../../../../models/transaction.schema";
import { ITransactionRepository } from "../../domain/repository/transaction.repository";

export class TransactionMongoRepository implements ITransactionRepository {
    async post(transaction: createTransactionDTO) {
        const reponse = await transactionModel
            .create(transaction);

        return reponse;
    }

    /**
     * GET
     */

    async getOne({filters, projection, sort}: {filters: any, projection?: any, sort?: any}){
        const response = await transactionModel.findOne(filters, projection).sort(sort).exec();

        return response;
    }
}

export default new TransactionMongoRepository();