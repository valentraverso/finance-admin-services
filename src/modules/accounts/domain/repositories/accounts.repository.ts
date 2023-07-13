import { createAccountDTO } from "../entities/accounts.entity";

export interface accountsRepository {
    post: (account: createAccountDTO) => Promise<any>;
}