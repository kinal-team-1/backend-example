import { Router } from "express";
import { getAllUsers } from "./user.controller.js";
import { getTranslationFunctions } from "../utils/get-translations-locale.js";
import { query } from "express-validator";
import { validateChecks } from "../middleware/validate-checks.js";
import { retrieveLocale } from "../middleware/retrieve-locale.js";
// import dbConnection from "../db/db-connection.js";
const router = Router();

router.get(
  "/",
  [
    retrieveLocale,
    query("limit")
      .optional()
      .isInt()
      .withMessage((value, { req }) => {
        const LL = getTranslationFunctions(req.locale);
        return LL.DB_ACCOUNT_REQUIRED();
      }) // If last check fails, this message will be shown
      .toInt(), // // converts the value to an integer
    query("page")
      .optional()
      .isInt()
      .withMessage((value, { req }) => {
        const LL = getTranslationFunctions(req.locale);
        return LL.DB_ACCOUNT_REQUIRED();
      }) // If last check fails, this message will be shown
      .toInt(), // Converts the value to an integer
    validateChecks,
  ],
  getAllUsers,
);

export default router;
