const COLORS = [
  { r: 0, g: 0, b: 2 },
  { r: 3, g: 41, b: 123 },
  // { r: 54, g: 121, b: 181 },
  // { r: 54, g: 121, b: 181 },
  // { r: 241, g: 251, b: 253 },
];

const PI2 = Math.PI * 2;

class GlowParticle {
  x: number;
  y: number;
  radius: number;
  rgb: any;
  vx: number;
  vy: number;
  sinValue: number;
  constructor(
    x: number,
    y: number,
    radius: number,
    rgb: { r: number; g: number; b: number },
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rgb = rgb;

    this.vx = Math.random() * 4;
    this.vy = Math.random() * 4;

    this.sinValue = Math.random();
  }

  animate(
    ctx: CanvasRenderingContext2D,
    stageWidth: number,
    stageHeight: number,
  ) {
    this.sinValue += 0.01;
    this.radius += Math.sin(this.sinValue);

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x += 10;
    } else if (this.x > stageWidth / 2.5) {
      this.vx *= -1;
      this.x -= 10;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > stageHeight / 2.5) {
      this.vy *= -1;
      this.y -= 10;
    }
    if (!ctx) return;
    ctx.beginPath();
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.01,
      this.x,
      this.y,
      this.radius,
    );
    g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0.8)`);
    g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`);
    ctx.fillStyle = g;
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    ctx.fill();
  }
}

class Gradient {
  //   canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  pixelRatio: number;
  totalParticles: number;
  particles: any[];
  maxRadius: number;
  minRadius: number;
  stageWidth: number;
  stageHeight: number;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;

    this.pixelRatio = window.devicePixelRatio;

    this.totalParticles = 2;
    this.particles = [];
    this.maxRadius = 1300;
    this.minRadius = 500;
    this.stageWidth = width;
    this.stageHeight = height;

    this.resize();
    this.animate();
  }

  resize() {
    this.ctx.globalCompositeOperation = 'saturation';
    this.createParticles();
  }

  createParticles() {
    let curColor = 0;
    this.particles = [];

    for (let i = 0; i < this.totalParticles; i++) {
      const item = new GlowParticle(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHeight,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
        COLORS[curColor],
      );

      if (++curColor >= COLORS.length) {
        curColor = 0;
      }
      this.particles[i] = item;
    }
  }

  animate() {
    this.ctx?.clearRect(0, 0, this.stageWidth, this.stageHeight);
    for (let i = 0; i < this.totalParticles; i++) {
      const item = this.particles[i];
      item.animate(this.ctx, this.stageWidth, this.stageHeight);
    }
    requestAnimationFrame(this.animate.bind(this));
  }
}

export default Gradient;
