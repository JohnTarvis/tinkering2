const jcanvas = new jCanvas();
jcanvas.fillColor(colors.white);

// jcanvas.setPixel(200,500,0,0,0);

const pixel = colors.black;

for(let count = 0; count < 500; count++){
    pixel.x = 20 + count;
    pixel.y = 300;
    jcanvas.setPixel(pixel);
}

jcanvas.setPixels();