const COLORS = [{ r: 3, g: 41, b: 123 }];

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
    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 10;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y -= 10;
    }
    if (!ctx) return;
    ctx.beginPath();
    const g = ctx.createRadialGradient(
      this.x,
      this.y + 300,
      this.radius * 0.01,
      this.x,
      this.y + 300,
      this.radius,
    );
    g.addColorStop(
      0.3,
      `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0.4)`,
    );
    g.addColorStop(0.5, `rgba(${3}, ${41}, ${123}, 0.4)`);
    g.addColorStop(0.7, `rgba(${54}, ${121}, ${181}, 1)`);
    g.addColorStop(1, `rgba(${245}, ${251}, ${253}, 0)`);
    ctx.fillStyle = g;
    ctx.arc(this.x, this.y + 300, this.radius, 0, PI2, false);
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
  pathName: string;

  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    pathName: string,
  ) {
    this.ctx = ctx;
    this.pathName = pathName;

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.totalParticles = 15;
    this.particles = [];
    this.maxRadius = pathName.substring(0, 7) === '/[lng]' ? 4000 : 3000;
    this.minRadius = pathName.substring(0, 7) === '/[lng]' ? 2700 : 2400;
    this.stageWidth = width;
    this.stageHeight = height;

    this.resize();
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
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
    window.requestAnimationFrame(this.animate.bind(this));
  }
}

export default Gradient;
