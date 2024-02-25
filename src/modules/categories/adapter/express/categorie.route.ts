import { Router } from "express";
import CategorieController from "./categorie.controller";

const categorieRouter = Router();

const categorieController = new CategorieController();

categorieRouter.get("/all", categorieController.getAll);

export default categorieRouter;