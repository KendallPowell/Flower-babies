import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { HeroSchema } from "../models/Hero.js";
import { UserSchema } from "../models/User.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Hero = mongoose.model('Hero', HeroSchema);
  User = mongoose.model('User', UserSchema)
}

export const dbContext = new DbContext()
