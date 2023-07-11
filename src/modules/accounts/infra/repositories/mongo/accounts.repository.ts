import { createAccountDTO } from "../../../domain/entities/accounts.entity";
import accountModel from "./accounts.schema";

export class accountsMongoRepository {
    async post(account: createAccountDTO) {
        const call = accountModel.create(account);

        return call;
    }
}

export default new accountsMongoRepository();