import { createAccountDTO } from "../../domain/entities/accounts.entity";
import IAccountsRepository from "../../domain/repositories/accounts.repository";

export class accountsUseCase {
    constructor(private repository: IAccountsRepository) { }

    /*
    * POST
    */
    async post(account: createAccountDTO) {
        return await this.repository.post(account);
    }

    /**
     * GET
     */

    async getAll() {
        const getAll = await this.repository.getAll({ projection: { entity: 1, IBAN: 1, name: 1, currency: 1 } });

        return getAll;
    }

    /**
     * UPDATE
     */

    async updateOne({ filters, data }: { filters: any, data: any }) {
        const update = await this.repository.updateOne({ filters, data });

        return update;
    };

}