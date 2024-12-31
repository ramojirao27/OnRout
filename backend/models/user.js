const { Schema, model } = require("mongoose");

const UserRole = {
  SENDER: "sender",
  TRAVELER: "traveler",
};

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), required: true },
    verified: { type: Boolean, default: false },
    address: [{ type: Schema.Types.ObjectId, ref: "Address" }],
    rating: { type: Number, default: 0 },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

module.exports = model("User", UserSchema);
