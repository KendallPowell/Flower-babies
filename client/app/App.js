import { AuthController } from './Controllers/AuthController.js';
import { HerosController } from "./Controllers/HerosController.js";
import { ValuesController } from './Controllers/ValuesController.js';

class App {
  authController = new AuthController();
  valuesController = new ValuesController();

  herosController = new HerosController();
}

// @ts-ignore
window.app = new App()
