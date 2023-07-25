import { createTransactionDTO } from "../../domain/entities/transaction.entity";
import { transactionRepository as transactionRepositoryDomain } from "../../domain/repository/transaction.repository";
import accountsRepo from "./mongo/transaction.repository";

export class transactionRepository implements transactionRepositoryDomain {
    async post(transaction: createTransactionDTO) {
        return await accountsRepo.post(transaction);
    }

}

export default new transactionRepository();