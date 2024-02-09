import IAccountsRepository from "../../domain/repositories/accounts.repository";
import IAccountsService from "../../domain/services/domain.services";

export default class AccountsService implements IAccountsService {
    private repository: IAccountsRepository;

    constructor(repository: IAccountsRepository) {
        this.repository = repository;
    }

    async findById({ id, projection }: { id: string, projection: any }) {
        const findById = await this.repository.getOne({ filters: { _id: id }, projection });
        
        return findById;
    }

    /**
     * UPDATE
     */

    async updateOne({ filters, data }: { filters: any; data: any; }): Promise<any> {
        const update = this.repository.updateOne({ filters, data });

        return update;
    }
}