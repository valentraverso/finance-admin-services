import { createTransactionDTO } from "../../../domain/entities/transaction.entity";
import transactionModel from "./transaction.schema";

export class transactionMongoRepository {
    async post(transaction: createTransactionDTO) {
        const call = await transactionModel
            .create(transaction);

            console.log(call)

        return call;
    }
}

export default new transactionMongoRepository();