class cell{
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.width = w/n - space/n;
    this.height = h/n - space/n;
    this.color = 255;
    this.level=0;
    this.wall = [1,1,1,1];
  }
  show() {
    noStroke();
    fill(this.color);
    rect(this.x+gapx,this.y+gapy,this.width,this.height,10);
  }
}