var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");

body.style.background = "linear-gradient(to right, " + hexToRgbA(color1.value) + 
	", " + hexToRgbA(color2.value) + ")";

css.textContent = body.style.background + ";";

function setGradient (){
	body.style.background = "linear-gradient(to right, " + color1.value + 
	", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomNumber(max) {
	return Math.floor(Math.random() * max) + 1;
}

function generateRandomRGB() {
	var red1 = randomNumber(255);
	var green1 = randomNumber(255);
	var blue1 = randomNumber(255);

	var red2 = randomNumber(255);
	var green2 = randomNumber(255);
	var blue2 = randomNumber(255);
	return "linear-gradient(to right, rgb(" + red1 +
	", " + green1 + ", " + blue1 + "), rgb(" + red2 +
	", " + green2 + ", " + blue2 + "))";
}

function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+')';
    }
    throw new Error('Bad Hex');
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function(){
	body.style.background = generateRandomRGB();
	css.textContent = body.style.background + ";";
})

