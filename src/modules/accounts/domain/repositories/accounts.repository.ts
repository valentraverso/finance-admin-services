import { accountEntity } from "../entities/accounts.entity";

export interface accountsRepository {
    post: (account: Omit<accountEntity, "id">) => Promise<any>;
}