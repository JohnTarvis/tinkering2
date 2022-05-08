///\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 //                                 JOHN'S LIBRARY                                     ||||}}}>
//////////////////////////////////////////////////////////////////////////////////////////////

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@,,(.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%.*@@@@@@@@@
// @@@@@@@,**/@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@./,,@@@@@@@@@
// @@@@@.%%,,#%/(.@@@@@@@@@@@@@@@@@@@@@**,,,,..*//(////**,,,...,,/@@@@@@@@@@@@@@@@@@@@@,/##(,*%(@@@@@@@
// @@@@##(##/&&/#(.*((((#//((###%%##//((#((#####(##%#%%(%%#(%(%%%((/&%%&&&#(####(%#(*((#//&&(%##//@@@@@
// @@@@/####(%%%#(./#%%%&&&&&&&&&&%%%###############%%%%%%%%%&&&&&&&&&&&&&&&&&%%%%#%/./#%%%((##(%@@@@@@
// @@@@@(/%#((###(./(%%&&&&&&&&&%%%%###############%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&&%#/./(##(((%%/.@@@@@@
// @@@@@.,%#(((#((/*(%%&&&&&%%%%%%#####%###########%%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&%%*./((#(((##,@@@@@@@
// @@@@@.*(#((##(//.(#%%%%%%%%%%############%%%%#%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&&&%%#*,/(###(##(,@@@@@@@
// @@@@@@*(##(###(*./#%%%%%%%#########%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&####*/(###((#(/.@@@@@@@
// @@@@@@.(#(((%%(/,,*/(############%%%%%%%%%%&&%&&&&&&%%%%%%%&&&&&&&&&&&%%%%%%%%##/./(%&#((##*@@@@@@@@
// @@@@@@.*((((%%#(,,(#%%%%##%%%%%%&&&&&&&&&&&&&%&%&%%%%%%&&&&&&&&&&&&&&&&%%%%%%%##(,((%%#((((,@@@@@@@@
// @@@@@@/*(/((#%##/,/%%%%%%&&&&&&&&&&&&&&&&&&&&&&%%%##%&&&&&&&&&&&&&&&&&&&&&&%%%%#/,##%##(/((.@@@@@@@@
// @@@@@@@**/((####/./#&&&&&&&&&&&&&@&&&&&&&&&&&&&&%##%&&&&&&&&&&&&&&&&&&&&&&&&%%#(**##%##(//,.@@@@@@@@
// @@@@@@@,,//#####(,/(%&&&&&&&&&&&&&&&&&&&&&&&&&&%%#%%&&&&&&&&&&&&&&&&&&&&&&&&%##(,/#####(//,@@@@@@@@@
// @@@@@@@.,/(######/**&&&&&&&&&&&@&&&&&&&&&&&&&&&##%%#&&&&&&&&&&&&&&&&&&&&&&&&&#(/,######((*,@@@@@@@@@
// @@@@@@@@,/(#%#####,*%&&&&&&&&&&&&&&&&&&&&&&&&&((#%%%%&&&&&&&&&&&&&&&&&&&&&&%%#///##%#%#((*.@@@@@@@@@
// @@@@@@@@,/(#%%&%%#,/#&&&&&&&&&&&&&&&&&&&&&&&&(((##%#%%&&&&&&&&&&&&&&#%%&&&%%%#,,#%%%%%##(,.@@@@@@@@@
// @@@@@@@@,#%%%&&.###.(######%%%%%%%%%%%((%##%(((((#%#%%#&%&&%&&%%%%%%%%%%%*%##(//###/&&%%%*@@@@@@@@@@
// @@@@@@@@.. .*/#/*,#.@@@@@*,,*,,,..,**/////(((((((//////(#(((**......,*/**@@@@@&. ,*#(*.*(#@@@@@@@@@@
// @@@@@@@@@@@@.,*,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,/*,@@@@@@@@@@@@@@
// @@@@@@@@@@@@@,/.@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&.@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


///\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///-functions

loadScript = (filename) => {
    const name = document.createElement('script');
    name.setAttribute('src',filename);
    document.head.appendChild(name);
    return name;
}

loadScripts = (filenames) => {
    const totalScripts = filenames.length;
    const loaded = loadScript(filenames[0]);
    loaded.onload = () => {
        console.log('-',`loaded script : (${filenames[0]})`);
        if(totalScripts > 1){
            loadScripts(filenames.slice(1));
        }
        console.log('--all scripts loaded--');
    }
}

loadStylesheet = (filename) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = filename;
    link.media = 'all';
    document.head.appendChild(link);
    console.log('-',`loaded stylesheet : (${filename})`);
    return link;
}

functionTimer = (f, i = 1000000) => {
    const d = new Date();
    const timeBefore = d.getTime();
    for(let count = 0; count < i; count++){
        f();
    }
    const d2 = new Date();
    const timeAfter = d2.getTime();
    const diff = timeAfter - timeBefore;

    console.log(`operation took ${diff} milliseconds to run ${i} times -- or ${diff / i} milliseconds to run once`)
    return diff;
}

///-save HTML (from SO)
function saveHTML() {
    var htmlContent = ["your-content-here"];
    var bl = new Blob(htmlContent, {type: "text/html"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(bl);
    a.download = "your-download-name-here.html";
    a.hidden = true;
    document.body.appendChild(a);
    a.innerHTML = "something random - nobody will see this, it doesn't matter what you put here";
    a.click();
  }
///\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///-constants

const keyCodes = {

    ///////////////////////////////////////////////////////////////////////////
    //-GAME KEYS
    ///////////////////////////////////////////////////////////////////////////
    backspace:  	8,          tab:        	9,          enter :	        13,         
    ctrl:           17,         alt:            18,         pauseBreak:     19,
    capsLock:       20,         _escape:        27,         pageUp:         33,
    space:          32,         pageDown:	    34,         end:            35,
    home:           36,         arrowLeft: 	    37,         arrowUp:    	38,
    arrowRight: 	39,         arrowDown:	    40,         printScreen: 	44,
    insert:         45,         delete:         46,         
    
    ///////////////////////////////////////////////////////////////////////////
    //-SHIFT
    ///////////////////////////////////////////////////////////////////////////
    shift:          16,
    
    ///////////////////////////////////////////////////////////////////////////
    //-NUMBERS
    ///////////////////////////////////////////////////////////////////////////
    _0:             48,         _1: 	        49,         _2:         	50,
    _3:             51,         _4: 	        52,         _5:         	53,
    _6:             54,         _7: 	        55,         _8:         	56,         
    _9:             57,
    
    ///////////////////////////////////////////////////////////////////////////
    //-LETTERS
    ///////////////////////////////////////////////////////////////////////////
    a: 	            65,         b:          	66,         c:          	67,
    d:          	68,         e:          	69,         f:          	70,
    g:          	71,         h:          	72,         i:          	73,
    j:              74,         k:          	75,         l:          	76,
    m:              77,         n:          	78,         o:          	79,
    p:              80,         q:          	81,         r:          	82,
    s:              83,         t:          	84,         u:          	85,
    v:              86,         w:	            87,         x:          	88,
    y:              89,         z:	            90,
    
    
    leftWindowKey: 	91,         rightWindowKey: 92,         selectKey: 	    93,
    
    ///////////////////////////////////////////////////////////////////////////
    //-NUMPAD
    ///////////////////////////////////////////////////////////////////////////
    numpad0:    	96,         numpad1:	    97,         numpad2:	    98,
    numpad3:    	99,         numpad4:	    100,        numpad5:	    101,
    numpad6:	    102,        numpad7:	    103,        numpad8:	    104,        
    numpad9:	    105,        
    multiply:	    106,        add: 	        107,        subtract: 	    109,        
    decimalPoint: 	110,        divide: 	    111,
    
    ///////////////////////////////////////////////////////////////////////////
    //-FKEYS
    ///////////////////////////////////////////////////////////////////////////
    f1: 	        112,        f2:	            113,        f3:             114,
    f4: 	        115,        f5:	            116,        f6:             117,
    f7: 	        118,        f8:	            119,        f9:             120,
    f10: 	        121,        f11:	        122,        f12:	        123,
    
    ///////////////////////////////////////////////////////////////////////////
    //-LOCKS
    ///////////////////////////////////////////////////////////////////////////
    numLock: 	    144,        scrollLock: 	145,        
    
    ///////////////////////////////////////////////////////////////////////////
    //-MEDIA
    ///////////////////////////////////////////////////////////////////////////
    myComputer_mk: 	182,        myCalculator_mk:183,
    
    ///////////////////////////////////////////////////////////////////////////
    //-PUNCTUATION
    ///////////////////////////////////////////////////////////////////////////
    semiColon:	    186,        equalSign: 	    187,        comma: 	        188,
    dash: 	        189,        period:	        190,        forwardSlash :	191,
    openBracket:	219,        backSlash:	    220,        closeBraket :	221,
    singleQuote :	222
};

///\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///-simple functions
const s = {
    wait: (f = ()=>{},ms = 500)=>{
        setTimeout(f,ms);
    },
    toString: (notString)=>{
        return `${notString}`;
    },
    randomInt: (max,min=0)=>{
        return Math.ceil(Math.random() * (max - min) + min);
    },
    clone(object){
        return JSON.parse(JSON.stringify(object));
    }
};

class Pixel{

    constructor(rgb = "#000000"){
        const rgba = rgb + 'ff';
        this.rgba = +`0x${rgba.slice(1)}`;

        this.x = 0;
        this.y = 0;
    }

    get rgb(){
        const hexString = this.rgba.toString(16);
        return `#${hexString.slice(2,-2)}`;
    }

    get a(){
        return this.rgba & 255;
    }
    get b(){
        return (this.rgba >> 8) & 255;
    }
    get g(){
        return (this.rgba >> 16) & 255;
    }
    get r(){
        return (this.rgba >> 24) & 255;
    }

    set a(a){
        this.rgba = this.rgba & 0xffffff00 | a;
    }
    set b(b){
        this.rgba = this.rgba & 0xffff00ff | b << 8;
    }
    set g(g){
        this.rgba = this.rgba & 0xff00ffff | g << 16;
    }
    set r(r){
        this.rgba = this.rgba & 0x00ffffff | r << 24;
    }
};

///\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///-colors
  
const colors = {
    red: new Pixel("#ff0000"),
    blue: new Pixel("#0000ff"),
    green: new Pixel("#00ff00"),
    white: new Pixel("#ffffff"),
    black: new Pixel("#000000"),     
    grey: new Pixel("#888888"),
    yellow: new Pixel("#ffff00"),   
    purple: new Pixel("#ff00ff"),    
    cyan: new Pixel("#00ffff"),
};

///\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///-classes
class jCanvas{
    constructor(w=1300,h=500, id='jCanvas' + s.randomInt(10000)){
        this.canvas = document.createElement("CANVAS"); 
        this.canvas.id = id;
        this.canvas.className = 'jCanvas';
        this.w = this.canvas.width = w;
        this.h = this.canvas.height = h;
        console.log('created jCanvas: ' + this.canvas.id);
        this.instantiate();
        this.getPixels();
    }
    getCanvasInDOM(){
        return document.getElementById(this.canvas.id);
    }
    toImage(type='image/png'){
        return this.canvas.toDataURL(type);
    }
    getImageData(x=0,y=0){
        return this.canvas.getContext('2d').getImageData(x,y,this.w,this.h);
    }
    putImageData(imageData,dx=0,dy=0){
        this.canvas.getContext('2d').putImageData(imageData,dx,dy);
    }
    getPixels(){
        const imageData = this.getImageData();
        this.imageData = imageData;
        this.pixels = imageData.data;
    }
    setPixels(){
        this.putImageData(this.imageData);
    }
    drawImage(img,destX=0,destY=0,sourceW=this.w,sourceH=this.h,scaleW=this.w,scaleH=this.h,sourceX=0,sourceY=0){
        this.ctx.drawImage(img,sourceX,sourceY,sourceW,sourceH,destX,destY,scaleW,scaleH);
    }
    instantiate(){
        document.body.appendChild(this.canvas);
    }
    fillColor(pixel = new Pixel()){
        for(let count = 0; count < this.pixels.length; count++){
            if(count % 4 === 0) this.pixels[count] = pixel.r;            
            if(count % 4 === 1) this.pixels[count] = pixel.g; 
            if(count % 4 === 2) this.pixels[count] = pixel.b;
            if(count % 4 === 3) this.pixels[count] = pixel.a;            
        }
        this.setPixels();
	}
    setPixel(pixel){
        const pixelLoc = 4 * (pixel.y * this.w + pixel.x);
        const pixelR = pixelLoc + 0;
        const pixelG = pixelLoc + 1;
        const pixelB = pixelLoc + 2;
        const pixelA = pixelLoc + 3;
        this.pixels[pixelR] = pixel.r;
        this.pixels[pixelG] = pixel.g;
        this.pixels[pixelB] = pixel.b;
        this.pixels[pixelA] = pixel.a;        
    }

};

function textToCanvas(canvas, text='--no text entered--', x=10,y=10,fillstyle='red',font='15px Arial'){
    const context = canvas.getContext('2d');
    context.fillStyle = fillstyle;
    context.font = font;
    context.fillText(text, x, y);
}



