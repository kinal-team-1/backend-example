import { Schema, model } from "mongoose";
import { L } from "../../i18n/i18n-node.js";

export const [ACTIVE, INACTIVE] = ["ACTIVE", "INACTIVE"];

const UserSchema = Schema({
  email: {
    type: String,
    required: [true, L.en.DB_EMAIL_REQUIRED()],
  },
  username: {
    type: String,
    required: [true, L.en.DB_USERNAME_REQUIRED],
  },
  password: {
    type: String,
    required: [true, L.en.DB_PASSWORD_REQUIRED],
  },
  tp_status: {
    type: String,
    enum: [ACTIVE, INACTIVE],
    required: true,
    default: ACTIVE,
  },
});

// This ensures that each 'email' is unique only among active currencies
UserSchema.index(
  { email: 1, tp_status: 1 },
  // this makes the index to take effect only on active currencies
  { unique: true, partialFilterExpression: { tp_status: ACTIVE } },
);

// This ensures that each 'username' is unique only among active currencies
UserSchema.index(
  { username: 1, tp_status: 1 },
  { unique: true, partialFilterExpression: { tp_status: ACTIVE } },
);

export default model("User", UserSchema);
