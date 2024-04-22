import { ITransactionEntity, createTransactionDTO } from "../entities/transaction.entity";

export interface ITransactionRepository {
    /**
     * POST
     */
    post(transaction: createTransactionDTO): Promise<any>;

    /**
     * GET
     */
    getOne({ filters, projection, sort }: { filters: any, projection?: any, sort?: any }): Promise<any>;
    getAll({ filters, projection, sort }: { filters: any, projection?: any, sort?: any }): Promise<any>;
    getSpendsByMonth({ target }: { target?: string[] }): Promise<ITransactionEntity[] | ITransactionEntity | null>;
}