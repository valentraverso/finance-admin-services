import accountModel from "../../../../models/accounts.schema";
import { createAccountDTO } from "../../domain/entities/accounts.entity";
import IAccountsRepository from "../../domain/repositories/accounts.repository";

export class AccountsMongoDB implements IAccountsRepository {
    /**
     * POST
     */
    async post(account: createAccountDTO) {
        const response = await accountModel.create(account);

        return response;
    }

    /**
     * GET
     */

    async getAll({ filters, projection }: { filters: any, projection: any }) {
        const response = await accountModel.find(filters, projection).exec();

        return response;
    }

    async getOne({ filters, projection }: { filters: any, projection: any }){
        const response = await accountModel.findOne(filters, projection).exec();

        return response;
    }

    /**
     * UPDATE
     */
    async updateOne({ filters, data }: { filters: any, data: any }) {
        const response = await accountModel.findOneAndUpdate(filters, data).exec();

        return response;
    }
}

export default new AccountsMongoDB();