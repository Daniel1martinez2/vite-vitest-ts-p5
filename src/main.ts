import './style.css';
import p5 from 'p5';
import Ball from './ball';

const sketch = (p:p5) => {
  const myBall = new Ball(34, p);
  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
    // eslint-disable-next-line no-console
    console.log(myBall);
    p.createCanvas(500, 500);
  };
  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
    p.background(0);

    p.fill(255, 255, 0);
    p.ellipse(200, 200, 50, 50);
    myBall.show(p);

  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
