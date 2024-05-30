import User from "./user.model.js";
import { StatusCodes } from "http-status-codes";
import { getTranslationFunctions } from "../utils/get-translations-locale.js";

export const getAllUsers = async (req, res) => {
  const LL = getTranslationFunctions(req.locale);
  try {
    // ULTRA NECESSARY TO USE DEFAULT VALUES
    // TO AVOID CRASHES ON THE SERVER
    // page = 0, limit = 0
    const { limit = 0, page = 0 } = req.query;
    const [total, users] = await Promise.all([
      User.countDocuments(),
      User.find()
        .limit(limit)
        .skip(limit * page),
    ]);

    res.status(StatusCodes.OK).json({
      message: LL.USER_RETRIEVED_SUCCESSFULLY(),
      data: users,
      total,
    });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: LL.INTERNAL_SERVER_ERROR(),
      error,
    });
  }
};

export const createUser = async (req, res) => {
  const LL = getTranslationFunctions(req.locale);
  try {
    const { email, password, name } = req.body;

    // IS NOT NECCESARY TO PASS THE `tp_status` FIELD
    // BECAUSE IT IS ACTIVE BY DEFAULT
    const user = new User({ email, password, name });

    await user.save();
    res.status(StatusCodes.CREATED).json({
      message: LL.USER_CREATED(),
      data: user,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: LL.INTERNAL_SERVER_ERROR(),
      error,
    });
  }
};

export const deleteUserById = async (req, res) => {
  const LL = getTranslationFunctions(req.locale);
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id, { new: true });
    res.status(StatusCodes.OK).json({
      message: LL.USER_DELETED(),
      data: user,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: LL.INTERNAL_SERVER_ERROR(),
      error,
    });
  }
};
