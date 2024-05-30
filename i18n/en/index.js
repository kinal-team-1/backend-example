// @ts-check

/**
 * @typedef { import('../i18n-types.js').BaseTranslation } BaseTranslation
 */

/** @satisfies { BaseTranslation } */
const en = {
  HI: "Hi {name:string}! Please leave a star if you like this project: https://github.com/ivanhofer/typesafe-i18n",
  USER_NOT_FOUND: "User not found",
  USER_ALREADY_EXISTS: "User already exists",
  USER_CREATED: "User created successfully",
  ENDPOINT_NOT_FOUND: "Endpoint not found",
  DB_SYMBOL_REQUIRED: "Symbol is required",
  DB_NAME_REQUIRED: "The name is required",
  DB_KEY_REQUIRED: "The key is required",
  DB_TP_STATUS_REQUIRED: "The tp_status is required",
  DB_CREATED_AT_REQUIRED: "The created_at is required",
  DB_UPDATED_AT_REQUIRED: "The updated_at is required",
  DB_ACCOUNT_REQUIRED: "The account is required",
  DB_OWNER_REQUIRED: "User owner is required",
  DB_ALIAS_REQUIRED: "The alias is required",
  DB_CURRENCY_REQUIRED: "Currency is requires",
  DB_BALANCE_REQUIRED: "Balance is required",
  DB_EMAIL_REQUIRED: "The email is required",
  DB_USERNAME_REQUIRED: "The username is required",
  DB_PASSWORD_REQUIRED: "The password is required",
  DB_LASTNAME_REQUIRED: "The lastname is required",
  DB_ADDRESS_REQUIRED: "The address is required",
  DB_DPI_REQUIRED: "The DPI is required",
  DB_PHONE_NUMBER_REQUIRED: "The phone number is required",
  DB_JOB_NAME_REQUIRED: "The job name is required",
  DB_MONTHLY_INCOME_REQUIRED: "The monthly income is required",
  DB_QUANTITY_REQUIRED: "The quantity is required",
  DB_TYPE_REQUIRED: "The type is required",
  DB_DESCRIPTION_REQUIRED: "The description is required",
  DB_PRICE_REQUIRED: "The price is required",
  DB_STOCK_REQUIRED: "The stock is required",
  INVALID_USER_EMAIL: "Email is invalid",
  INVALID_USER_PASSWORD:
    "Password is invalid, must have at least 8 characters," +
    "1 lowercase, 1 uppercase, 1 number and 1 symbol",
  INVALID_USER_NAME: "Name is invalid, must have at least 3 characters",
  INVALID_OPTIONAL_USER_EMAIL: "If provided, email must be a valid email",
  INVALID_OPTIONAL_USER_PASSWORD:
    "If provided, password must have at least 8 characters," +
    "1 lowercase, 1 uppercase, 1 number and 1 symbol",
  INVALID_OPTIONAL_USER_NAME:
    "If provided, name must have at least 3 characters",
  INVALID_MONGO_ID: "Invalid mongo id",
  INVALID_OPTIONAL_PAGE: "If provided, page must be an integer",
  INVALID_OPTIONAL_LIMIT: "If provided, limit must be an integer",
  INTERNAL_SERVER_ERROR: "Internal server error",
};

export default en;
