
import fs from "fs";
import { createCanvas, loadImage, Canvas, NodeCanvasRenderingContext2D } from 'canvas';
import console from "console";
import { image } from '../config/image';



export class ContractGeneratorService {
  private canvas: Canvas;
  private ctx: NodeCanvasRenderingContext2D;
  private totalOutputs: number;
  private priorit: string[];

  constructor() {
    this.canvas = createCanvas(image.width, image.height);
    this.ctx = this.canvas.getContext("2d");
    this.totalOutputs = 0;
    this.priorit = ['punks','top','beard'];
 
}

 refreshDir() {
    if (fs.existsSync(image.dirOutputs)) {
      fs.rmdirSync(image.dirOutputs, { recursive: true });
    }
    fs.mkdirSync(image.dirOutputs);
    fs.mkdirSync(`${image.dirOutputs}/metadata`);
    fs.mkdirSync(`${image.dirOutputs}/punks`);
}

}

