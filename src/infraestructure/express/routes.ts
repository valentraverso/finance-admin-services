import { Express, Router } from "express";
import accountRouter from "../../modules/accounts/adapter/express/accounts.route";
import transactionRouter from "../../modules/transactions/adapter/express/transaction.route";
import categorieRouter from "../../modules/categories/adapter/express/categorie.route";
import chartRouter from "../../modules/charts/adapter/express/chart.router";


export const configureRoutes = (app: Express) => {
  const router: Router = Router();
  app.use("/api/v1", router);
  router.use("/accounts", accountRouter);
  router.use("/transactions", transactionRouter);
  router.use("/categories", categorieRouter);
  router.use("/chart", chartRouter);
};
