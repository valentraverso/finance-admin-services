import { NextFunction, Request, Response } from "express";
import { accountsUseCase } from "../../app/usecases/accounts.usecase";
import { createAccountDTO } from "../../domain/entities/accounts.entity";

export class accountsController {
    constructor(private useCase: accountsUseCase) { }

    async post(req: Request, res: Response, next: NextFunction) {
        const account = req.body as createAccountDTO;

        try {
            const response = await this.useCase.post(account);

            res.status(200).send({
                status: true,
                msg: "Account successfull created",
                data: response
            });
        } catch (err) {
            res.status(500).send({
                status: false,
                msg: "There was an error."
            })
        }

        next();
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        console.log(req.params.id);
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await this.useCase.getAll();

            res.status(200).send({
                status: true,
                msg: "Success finding accounts.",
                data: response
            })
        } catch (err: any) {
            res.status(500).send({
                status: false,
                msg: "There was an error."
            })
        }

        next();
    }
}