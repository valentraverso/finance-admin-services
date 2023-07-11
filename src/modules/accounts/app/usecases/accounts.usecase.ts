import { createAccountDTO } from "../../domain/entities/accounts.entity";
import { accountsRepository } from "../../domain/repositories/accounts.repository";

export class accountsUseCase {
    constructor(private repository: accountsRepository) { }

    /*
    * Post account
    * 
    */
    async post(account: createAccountDTO) {

        return await this.repository.post(account);
    }
}