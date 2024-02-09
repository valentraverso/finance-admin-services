import TransactionService from "../../application/services/transaction.services";
import { ITransactionRepository } from "../../domain/repository/transaction.repository";
import ITransactionService from "../../domain/services/transaction.services";
import { TransactionMongoRepository } from "../repositories/transaction.mongo";

class TransactionMaker {
    private repository: ITransactionRepository;

    constructor() {
        this.repository = new TransactionMongoRepository();
    }

    service(): ITransactionService {
        return new TransactionService(this.repository);
    }
}

export default new TransactionMaker().service();