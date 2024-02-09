import { createTransactionDTO, transactionEntity } from "../entities/transaction.entity";

export interface ITransactionRepository {
    /**
     * POST
     */
    post(transaction: createTransactionDTO): Promise<any>;

    /**
     * GET
     */
    getOne({filters, projection, sort}: {filters: any, projection?: any, sort?: any}): Promise<any>;
}