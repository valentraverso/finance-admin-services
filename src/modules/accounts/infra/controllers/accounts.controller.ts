import { NextFunction, Request, Response } from "express";
import { accountsUseCase } from "../../app/usecases/accounts.usecase";
import { createAccountDTO } from "../../domain/entities/accounts.entity";

export class accountsController {
    constructor(private useCase: accountsUseCase) { }

    async post(req: Request, res: Response, next: NextFunction) {
        const account = req.body as createAccountDTO;

        try {
            const call = this.useCase.post(account);

            res.status(200).send(call);
        } catch (err) {
            next(err);
        }

        next();
    }

}