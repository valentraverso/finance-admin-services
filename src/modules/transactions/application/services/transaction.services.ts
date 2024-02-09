import { ITransactionRepository } from "../../domain/repository/transaction.repository";
import ITransactionService from "../../domain/services/transaction.services";

export default class TransactionService implements ITransactionService{
    private repository: ITransactionRepository;

    constructor(repository: ITransactionRepository){
        this.repository = repository;
    }

    async post(data: any): Promise<any> {
        const post = await this.repository.post(data);

        return post;
    }

    async getLastTransaction({ idAccount }: { idAccount: string; }): Promise<any> {
        const getLastTransaction = await this.repository.getOne({filters: {idAccount: idAccount}, sort: {createdAt: -1}});

        return getLastTransaction;
    }
}