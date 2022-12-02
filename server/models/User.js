import { Schema } from "mongoose";

export const UserSchema = new Schema({
  userName: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  heroId: { type: Schema.Types.ObjectId, required: true, ref: 'Hero' }
}, { timestamps: true, toJSON: { virtuals: true } })