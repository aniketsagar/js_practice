// Prototypes are the machenism by which we inherit things in js
// <entity>.prototype is the actual object 
// _proto_ is the ref to the above object


// classes : 

//check the theory of how does this function work
function hex(r,g,b){
    return "#"+((1<<24) +(r<<16) + (g<<8) + b).toString(16).slice(1);
};

function rgb(r,g,b){
    return `rgb(${r},${g},${b})`;
};


console.log(hex(255,100,25));
function makeColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        return `rgb(${this.r},${this.g},${this.b})`;                   
    };
    color.hex = function(){
        return "#"+((1<<24) +(this.r<<16) + (this.g<<8) + this.b).toString(16).slice(1);
    };
    return color;
};


const firstColor = makeColor(35,255,150);

console.log(firstColor.hex());
console.log(firstColor.rgb());
// the above approach in make color makes a different copy of function 
// rgb hex in memory with the data 
//constructor functions == object construnctor 

// what is a constructor 
// how is it used 
// 


function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
};

Color.prototype.rgb = function(){
    return `rgb(${this.r},${this.g},${this.b})`; 
};

Color.prototype.hex = function(){
    return "#"+((1<<24) +(r<<16) + (g<<8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a=1.0){
    return `rgba(${this.r},${this.g},${this.b},${a})`; 
}


// Classes 
// This keyword groups data and methods togeather 
// this is just syntactic sugar
// Classes encapsulate the constructor and functions togeather
//Todo add opposite and full seturation methods
class MyColor{
    constructor(r,g,b,name=""){
        // this function exectute immedeatly when an 
        // object of class is created with new
        console.log("Hey from constructor");
        console.log(r,g,b);
        this.r=r;
        this.g=g;
        this.b=b;
        this.name = name
    };
    getColorName(){
        return this.name;
    };
    rgb(){
        return `rgb(${this.r},${this.g},${this.b})`
    };
    hex(){
        return "#"+((1<<24) +(r<<16) + (g<<8) + b).toString(16).slice(1);
    };
    rgba(a=1.0){
        return `rgba(${this.r},${this.g},${this.b},${a})`; 
    };
    rgbToHsl(r,g,b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    // Calculate hue
    // No difference
    if (delta === 0)
        h = 0;
    // Red is max
    else if (cmax === r)
        h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax === g)
        h = (b - r) / delta + 2;
    // Blue is max
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);
        
    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return "hsl(" + h + "," + s + "%," + l + "%)";
    };
};

const c1 = new MyColor(30,20,100,"c1");
const c2 = new MyColor(304,230,120);
console.log(c2);  
console.log(c1.getColorName());



class Animal{
    constructor(limbs, color, sound, diet, size){
        this.limbs = limbs;
        this.color = color;
        this.sound = sound;
        this.diet = diet;
        this.size = size;
    };
    eat(){
        
    }; 
};

class Dog extends Animal{

}


/**
 * The value of this inside a class
 * when inside a function 
 *  is the function defined using arrows : write console.log(this) on the first 
 *                                         valid line above the arrow function
 *                                         the printed value is the value of this
 *                                         inside the arrow function
 * 
 * Did we call "bind", "apply", or"call" on the function:
 * when we invoked it? :  If yes then "this" is equal to the first argument of 
 *                          "bind", "call" ,or "apply"
 * 
 * In all other cases  : "this" is equal to whatever is to the left of the "."
 *                      in  the method call
 */