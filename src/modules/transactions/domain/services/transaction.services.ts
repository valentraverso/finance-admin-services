import { ITransactionEntity } from "../entities/transaction.entity";

export default interface ITransactionService{
    /**
     * POST
     */
    post(data: any): Promise<any>;

    /**
     * GET
     */
    getLastTransaction({idAccount}: {idAccount: string}): Promise<ITransactionEntity>;
    getAllTransactions({filters, projection, sort}: {filters: any, projection?: any, sort?: any}): Promise<ITransactionEntity[] | null>;
    getSpendsByMonth({ target }: { target?: string[] }):Promise<ITransactionEntity[] | ITransactionEntity | null>;
}