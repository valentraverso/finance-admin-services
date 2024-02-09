import { createAccountDTO } from "../entities/accounts.entity";
interface IAccountsRepository {
    // POST
    post: (account: createAccountDTO) => Promise<any>;

    // GET
    getAll({ filters, projection }: { filters?: any, projection?: any }): Promise<any>;
    getOne({ filters, projection }: { filters: any, projection?: any }): Promise<any>;

    // UPDATE
    updateOne({ filters, data }: { filters: any, data: any }): Promise<any>;
}

export default IAccountsRepository;