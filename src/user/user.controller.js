import User from "./user.model.js";
import { StatusCodes } from "http-status-codes";
import { getTranslationFunctions } from "../utils/get-translations-locale.js";

export const getAllUsers = async (req, res) => {
  const LL = getTranslationFunctions(req.locale);
  try {
    const { limit, page } = req.query;
    const [total, users] = await Promise.all([
      User.countDocuments(),
      User.find()
        .limit(limit)
        .skip(limit * page),
    ]);

    res.status(StatusCodes.OK).json({
      message: LL.DB_ACCOUNT_REQUIRED(),
      data: users,
      total,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: LL.INTERNAL_SERVER_ERROR(),
      error,
    });
  }
};
