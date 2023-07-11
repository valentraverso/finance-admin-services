import { accountsUseCase } from "../../app/usecases/accounts.usecase";

export class accountsController {
    constructor(private useCase: accountsUseCase) { }

    async post(account) {
        const call = this.useCase.post();
    }

}