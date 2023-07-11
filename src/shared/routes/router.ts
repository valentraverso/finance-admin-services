import { Router } from "express";
import accountRouter from "../../modules/accounts/infra/routes/accounts.route";

const router = Router();

router.use("/accounts", accountRouter);

export default router;