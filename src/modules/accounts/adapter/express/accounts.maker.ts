import AccountsService from "../../app/services/accounts.services";
import IAccountsRepository from "../../domain/repositories/accounts.repository";
import IAccountsService from "../../domain/services/domain.services";
import { AccountsMongoDB } from "../repositories/accounts.repository";

class AccountMaker {
    private accountsRepository: IAccountsRepository;

    constructor() {
        this.accountsRepository = new AccountsMongoDB();
    }

    service(): IAccountsService {
        return new AccountsService(this.accountsRepository);
    }
}

export default new AccountMaker().service();