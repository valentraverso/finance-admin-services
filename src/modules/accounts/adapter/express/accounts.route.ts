import { Router } from "express";
import { accountsUseCase } from "../../app/usecases/accounts.usecase";
import { accountsController } from "./accounts.controller";
import accountsRepository from "../repositories/accounts.repository";

const accountRouter = Router();

const instanceUseCase: accountsUseCase = new accountsUseCase(accountsRepository);
const instanceController = new accountsController(instanceUseCase);

accountRouter.post("/post", instanceController.post.bind(instanceController));

// GET
accountRouter.get("/find/id/:id", instanceController.getById.bind(instanceController));
accountRouter.get("/find/all", instanceController.getAll.bind(instanceController));

export default accountRouter;