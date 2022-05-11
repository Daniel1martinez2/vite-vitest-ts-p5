import p5 from 'p5';

export default class Ball {
  public posX: number;

  public p: p5;

  constructor(posX: number, p:p5) {
    this.posX = posX;
    this.p = p;
  }

  draw(): void {
    this.p.fill(255, 255, 0);
    this.p.ellipse(this.posX, 200, 50, 50);
  }
}
