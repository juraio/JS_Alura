let cor;
let posicaovertical;
let posicaohorizontal;

function setup() {
  createCanvas(400, 400);
  background("rgb(192,151,151)");
  cor = color(random(0, 225), random(0, 225), random(0, 225));
  posicaohorizontal = 200;
  posicaovertical = 200;
}

function draw() {
  fill(cor);
  circle(posicaohorizontal, posicaovertical, 50);

  if (mouseX < posicaohorizontal) {
    posicaohorizontal = posicaohorizontal - 1;
  }
    if (mouseX > posicaohorizontal){
      posicaohorizontal = posicaohorizontal + 1;
    }
  if (mouseY < posicaovertical){
    posicaovertical -- ;
  }
  if (mouseY > posicaovertical){
    posicaovertical ++;

  }
  if (mouseIsPressed)
    cor = color(random(0, 225), random(0, 225), random(0, 225), random(0, 100));
    
}
