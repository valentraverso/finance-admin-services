import { ITransactionEntity } from "../entities/transaction.entity";

export default interface ITransactionUseCase {
    create(data: ITransactionEntity): Promise<ITransactionEntity>;

    getSpendsByMonth(): Promise<ITransactionEntity[] | ITransactionEntity | null>
}