import { Schema } from "mongoose";

export const HeroSchema = new Schema({
  name: { type: String, required: true, minLength: 2, maxLength: 30 },
  universe: { type: Boolean, required: true, default: false },
  description: { type: String, required: true },
  homePlanet: { type: String },
  superpowers: { type: Boolean, required: true, default: false }

}, { timestamps: true, toJSON: { virtuals: true } })
