import { createTransactionDTO } from "../../domain/entities/transaction.entity";
import { transactionRepository as transactionRepositoryDomain } from "../../domain/repository/transaction.repository";
import TransactiRepository from "./mongo/transaction.repository";

export class transactionRepository implements transactionRepositoryDomain {
    async post(transaction: createTransactionDTO) {        
        return await TransactiRepository.post(transaction);
    }

}

export default new transactionRepository();