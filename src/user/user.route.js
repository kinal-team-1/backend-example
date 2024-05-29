import { Router } from "express";
import { getAllUsers, createUser, deleteUserById } from "./user.controller.js";
import { body, query, param } from "express-validator"; // the 3 most important methods from express-validator
import { validateChecks } from "../middleware/validate-checks.js";
import { retrieveLocale } from "../middleware/retrieve-locale.js";
import User, { ACTIVE } from "./user.model.js";
import { UserAlreadyExist } from "./user.error.js";
import { message } from "../utils/message.js";
// import dbConnection from "../db/db-connection.js";
const router = Router();

router
  .route("/")
  .get(
    [
      retrieveLocale,
      query("limit")
        .optional()
        .isInt()
        .withMessage(message((LL) => LL.INVALID_OPTIONAL_LIMIT())) // If last check fails, this message will be shown
        .toInt(), // // converts the value to an integer
      query("page")
        .optional()
        .isInt()
        .withMessage(message((LL) => LL.INVALID_OPTIONAL_PAGE())) // If last check fails, this message will be shown
        .toInt(), // Converts the value to an integer
      validateChecks,
    ],
    getAllUsers,
  )
  .post(
    [
      retrieveLocale,
      body("email")
        .isEmail()
        .withMessage(message((LL) => LL.INVALID_USER_EMAIL())) // If last check fails, this message will be shown
        .custom((email) => {
          // Check if the email already exists in the database
          const user = User.findOne({ email, tp_status: ACTIVE });
          if (!user) {
            throw new UserAlreadyExist("Email already exists");
          }
        }),
      body("password")
        .isStrongPassword({
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
        .withMessage(message((LL) => LL.INVALID_USER_PASSWORD())),
      body("name")
        .isString()
        .isLength({ min: 3, max: 255 })
        .withMessage(message((LL) => LL.INVALID_USER_NAME())),
      validateChecks,
    ],
    createUser,
  );

router
  .route("/:id")
  .put([
    retrieveLocale,
    body("email")
      .optional()
      .isEmail()
      .withMessage(message((LL) => LL.INVALID_OPTIONAL_USER_EMAIL())), // If last check fails, this message will be shown
    body("password")
      .optional()
      .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage(message((LL) => LL.INVALID_OPTIONAL_USER_PASSWORD())),
    body("name")
      .optional()
      .isString()
      .isLength({ min: 3, max: 255 })
      .withMessage(message((LL) => LL.INVALID_OPTIONAL_USER_NAME())),
    validateChecks,
  ])
  .delete(
    [
      retrieveLocale,
      param("id")
        .isMongoId()
        .withMessage(message((LL) => LL.INVALID_MONGO_ID())),
      validateChecks,
    ],
    deleteUserById,
  );

export default router;
