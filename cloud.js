class sky{
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.height = w/n - space/n;
    this.width = this.height;
    this.color = "#1c1c1c";
    // this.color = 255;
    this.level=0;
    this.wall = [1,1,1,1];
  }
  show() {
    noStroke();
    fill(this.color);
    rect(this.x,this.y,this.width,this.height,10);
  }
}