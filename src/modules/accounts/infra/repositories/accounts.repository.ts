import { createAccountDTO } from "../../domain/entities/accounts.entity";
import { accountsRepository as accountsRepositoryDomain } from "../../domain/repositories/accounts.repository";
import accountsRepo from "./mongo/accounts.repository";

export class accountsRepository implements accountsRepositoryDomain {
    async post(account: createAccountDTO) {
        return await accountsRepo.post(account);
    }

}

export default new accountsRepository();