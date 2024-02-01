import { createTransactionDTO } from "../domain/entities/transaction.entity";
import { transactionRepository } from "../infra/repositories/transaction.repository";

export class transactionUseCase {
    constructor(private repository: transactionRepository) { }

    async create(transaction: createTransactionDTO) {
        return this.repository.post(transaction);
    }
}