let entHighlight;
let backHighlight;

class Key{
  constructor(x,letter,row,color){
    this.xspa = width*0.05;
    this.yspa = this.xspa;
    this.xoffs = width*0.275;
    this.yoffs = 6*yspacing+(height*0.15) + this.yspa/2;
    this.color = color;
    this.letter = letter;
    this.highlight = false;
    
    if (row == 2){
      this.yoffs+=this.xspa;
      this.xoffs+=this.xspa/2;
    } else if (row == 3){
      this.yoffs+=this.xspa*2;
      this.xoffs+=this.xspa+this.xspa/2;
    }
    this.pos = createVector(this.xoffs + (x*this.xspa),this.yoffs);
  }
  
  show(){
    push();
    textSize(width/30);
    fill(this.color);
    square(this.pos.x,this.pos.y,this.xspa-2);
    fill(0);
    text(this.letter,this.pos.x,this.pos.y);
    let x = mouseX;
    let y = mouseY;
    let xmin = this.pos.x - this.xspa/2;
    let xmax = this.pos.x + this.xspa/2;
    let ymin = this.pos.y - this.yspa/2;
    let ymax = this.pos.y + this.yspa/2;
    
    if (x > xmin && x < xmax && y > ymin && y < ymax && !(winner || level > 5)){
      this.highlight = true;
      fill(60,100);
      square(this.pos.x,this.pos.y,this.xspa-2);
    } else {
      this.highlight = false;
    }
    pop();
  }
}

function enterBackspace(){
  let x = mouseX;
  let y = mouseY;
  let yOff = allKeys[25].yoffs - (width*0.05/2);
  let xOff = width*0.275 - (width*0.05/2);
  let xSpac = width*0.05 * 1.5;
  let ySpac = width*0.05;
  push();
  fill(220,100);
  rectMode(CORNER);
  rect(xOff,yOff,xSpac-2,ySpac-2);
  textSize(width/40);
  textAlign(LEFT,BOTTOM);
  noStroke();
  fill(0);
  text(' Enter',xOff,yOff+width*0.05/1.25);
  let xmin = xOff;
  let xmax = xOff+xSpac;
  let ymin = yOff;
  let ymax = yOff + ySpac;
  if (x > xmin && x < xmax && y > ymin && y < ymax && !(winner || level > 5)){
    fill(60,100);
    rect(xOff,yOff,xSpac-2,ySpac-2);
    entHighlight=true;
  } else
    entHighlight=false;
  
  yOff = allKeys[25].yoffs - (width*0.05/2);
  xOff = allKeys[25].pos.x  + width*0.05/2;
  xSpac = width*0.05 * 1.5;
  ySpac = width*0.05;
  rectMode(CORNER);
  fill(220,100);
  rect(xOff+2,yOff+2,xSpac-4,ySpac-4);
  textSize(width/40);
  textAlign(LEFT,BOTTOM);
  noStroke();
  fill(0);
  text('  [<X]',xOff,yOff+width*0.05/1.25);
  xmin = xOff;
  xmax = xOff+xSpac;
  ymin = yOff;
  ymax = yOff + ySpac;
  if (x > xmin && x < xmax && y > ymin && y < ymax && !(winner || level > 5)){
    fill(60,100);
    rect(xOff,yOff,xSpac-2,ySpac-2);
    backHighlight=true;
  } else
    backHighlight=false;
  
  pop();
}