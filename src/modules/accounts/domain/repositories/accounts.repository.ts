import { accountEntity } from "../entities/accounts.entity";

export class accountsRepository {
    post: (account: Omit<accountEntity, "id">) => Promise<any>;
}

export default new accountsRepository();