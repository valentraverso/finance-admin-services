import { accountsRepository } from "../../domain/repositories/accounts.repository";

export class accountsUseCase {
    constructor(private repository: accountsRepository) { }

    async post() { }
}