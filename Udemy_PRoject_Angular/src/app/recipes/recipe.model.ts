import { Ingradients } from "../shared/ingradient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingradient: Ingradients[];

  constructor(name: string, description: string, imagePath: string, ingradient: Ingradients[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingradient = ingradient;
  }
}
