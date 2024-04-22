import { ITransactionEntity } from "../entities/transaction.entity";

export default interface ITransactionUseCase {
    create(data: ITransactionEntity): Promise<ITransactionEntity>;

    getSpendsByMonth({idChart}: {idChart?: string}): Promise<ITransactionEntity[] | ITransactionEntity | null>
}