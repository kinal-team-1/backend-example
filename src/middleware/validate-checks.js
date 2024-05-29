import { validationResult } from "express-validator";

export const validateChecks = async (req, res, next) => {
  const result = validationResult(req);
  console.log({ errors: result.errors });
  if (!result.isEmpty()) {
    // eslint-disable-next-line @joao-cst/enforce-consistent-return-express
    return res.status(400).json({ errors: result.array() });
  }

  return next();
};
