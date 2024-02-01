import { createTransactionDTO, transactionEntity } from "../entities/transaction.entity";

export interface transactionRepository {
    post: (transaction: createTransactionDTO) => Promise<any>;
}