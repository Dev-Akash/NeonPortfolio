const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const box1 = document.getElementById("box_1");
const box2 = document.getElementById("box_2");
const box3 = document.getElementById("box_3");
const box4 = document.getElementById("box_4");
const container = document.getElementById("container");
const container1 = document.getElementById("container1");
const verticalP_left = document.getElementById("ver_panel");
const verticalP_right = document.getElementById("ver_panel2");
const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");
const item_text1 = document.getElementById("item_text1");
const item_text2 = document.getElementById("item_text2");
const button_prev = document.getElementById("button_prev");
const button_next = document.getElementById("button_next");
const card = document.getElementsByClassName("card");
const skill_heading = document.getElementById("skill_heading");
const skill_text = document.getElementById("skill_text");
const skill_cards_container = document.getElementById("skill_cards_container");
const sci_fi_monitor = document.getElementById("sci_fi_monitor");
const about_me_text = document.getElementById("about_me_text");
const abt_me_img = document.getElementById("abt_me_img");

verticalP_left.style.visibility = "hidden";
verticalP_right.style.visibility = "hidden";
skill_cards_container.style.visibility = "hidden";
skill_text.style.visibility = "hidden";
skill_heading.style.visibility = "hidden";
button_next.style.visibility = "hidden";
button_prev.style.visibility = "hidden";
sci_fi_monitor.style.visibility = "hidden";
about_me_text.style.visibility = "hidden";
abt_me_img.style.animationPlayState = "paused";

let Keep_rotate;

text1.addEventListener('click', shiftLeft.bind(event, "About Me"));
text2.addEventListener('click', shiftLeft.bind(event, "Skill"));
text3.addEventListener('click', shiftRight.bind(event, "Projects"));
text4.addEventListener('click', shiftRight.bind(event, "Blogs"));
box1.addEventListener('click', shiftLeft.bind(event, "About Me"));
box2.addEventListener('click', shiftLeft.bind(event, "Skill"));
box3.addEventListener('click', shiftRight.bind(event, "Blogs"));
box4.addEventListener('click', shiftRight.bind(event, "Projects"));
button_next.addEventListener('click', rotateNext);
button_prev.addEventListener('click', rotatePrev);


function shiftLeft(text) {
	//move left
	verticalP_left.style.visibility = "hidden";
	verticalP_left.style.left = "-20%";
	container.style.left = "-20%";
	if (verticalP_right.style.visibility === "visible") {
		fetchData(text, 0);
	}
	else{
		setTimeout(function(){
			verticalP_right.style.visibility = "visible";
			verticalP_right.style.left = "80%";
			fetchData(text, 0);
		}, 1500);
	}
}

function shiftRight(text) {
	//move right
	container.style.left = "20%";
	verticalP_right.style.left = "99%";
	clearInterval(Keep_rotate);
	verticalP_right.style.visibility = "hidden";
	skill_cards_container.style.visibility = "hidden";
	skill_text.style.visibility = "hidden";
	skill_heading.style.visibility = "hidden";
	button_next.style.visibility = "hidden";
	button_prev.style.visibility = "hidden";
	sci_fi_monitor.style.visibility = "hidden";
	about_me_text.style.visibility = "hidden";
	abt_me_img.style.animation = "none";
	if (verticalP_left.style.visibility === "visible") {
		fetchData(text, 1);
	}
	else{
		setTimeout(function() {
			verticalP_left.style.visibility = "visible";
			verticalP_left.style.left = "30px";
			fetchData(text, 1);
		}, 1500);
	}
}

function fetchData(text, i){
	console.log(text, i);
	if (i == 1) {
		document.getElementsByClassName("head")[0].innerHTML = text;
		if (text === "Projects") {
			//console.log("Inside Projects");
			header1.innerHTML = "Cromatica";
			header2.innerHTML = "Bulkren";
		}
		else if (text === "Blogs") {
			//console.log("Inside Blogs");
			header1.innerHTML = "I am Iron Man!";
			header2.innerHTML = "Android Design";
		}
	}
	else{
		document.getElementsByClassName("head")[1].innerHTML = text;
		if (text === "Skill") {
			//console.log("Inside Skill");
			skill_cards_container.style.visibility = "visible";
			skill_text.style.visibility = "visible";
			skill_heading.style.visibility = "visible";
			button_next.style.visibility = "visible";
			button_prev.style.visibility = "visible";

			sci_fi_monitor.style.visibility = "hidden";
			about_me_text.style.visibility = "hidden";
			abt_me_img.style.animation = "none";
			Keep_rotate = setInterval(function() {rotateNext();}, 3000);
		}
		else if (text === "About Me") {
			//console.log("Inside About");
			sci_fi_monitor.style.visibility = "visible";
			about_me_text.style.visibility = "visible";
			abt_me_img.style.animation = "";	
			skill_cards_container.style.visibility = "hidden";
			skill_text.style.visibility = "hidden";
			skill_heading.style.visibility = "hidden";
			button_next.style.visibility = "hidden";
			button_prev.style.visibility = "hidden";
			clearInterval(Keep_rotate);
			Keep_rotate = Null;
		}
	}	
}
var count = 0;
skill_heading.innerHTML = `Skill ${count +1}`;

function rotateNext(){
	count++;
	console.log("Rotating next");
	var s1 = (count*45)+0; 
	var s2 = (count*45)+45; 
	var s3 = (count*45)+90; 
	var s4 = (count*45)+135; 
	var s5 = (count*45)+180;
	var s6 = (count*45)+225; 
	var s7 = (count*45)+270; 
	var s8 = (count*45)+315;  
	card[0].style.transform = `rotateY(${s1}deg) translateZ(200px)`;
	card[1].style.transform = `rotateY(${s2}deg) translateZ(200px)`;
	card[2].style.transform = `rotateY(${s3}deg) translateZ(200px)`;
	card[3].style.transform = `rotateY(${s4}deg) translateZ(200px)`;
	card[4].style.transform = `rotateY(${s5}deg) translateZ(200px)`;
	card[5].style.transform = `rotateY(${s6}deg) translateZ(200px)`;
	card[6].style.transform = `rotateY(${s7}deg) translateZ(200px)`;
	card[7].style.transform = `rotateY(${s8}deg) translateZ(200px)`;

	realCount= count + 1;
	var skillNum = realCount<=8?realCount:realCount%8;
	skill_heading.innerHTML = `Skill ${skillNum}`;
}

function rotatePrev(){
	count--;
	console.log("Rotating prev");
	var s1 = (count*45)+0; 
	var s2 = (count*45)+45; 
	var s3 = (count*45)+90; 
	var s4 = (count*45)+135; 
	var s5 = (count*45)+180;
	var s6 = (count*45)+225; 
	var s7 = (count*45)+270; 
	var s8 = (count*45)+315;  
	card[0].style.transform = `rotateY(${s1}deg) translateZ(200px)`;
	card[1].style.transform = `rotateY(${s2}deg) translateZ(200px)`;
	card[2].style.transform = `rotateY(${s3}deg) translateZ(200px)`;
	card[3].style.transform = `rotateY(${s4}deg) translateZ(200px)`;
	card[4].style.transform = `rotateY(${s5}deg) translateZ(200px)`;
	card[5].style.transform = `rotateY(${s6}deg) translateZ(200px)`;
	card[6].style.transform = `rotateY(${s7}deg) translateZ(200px)`;
	card[7].style.transform = `rotateY(${s8}deg) translateZ(200px)`;

	skill_heading.innerHTML = `Skill ${count}`;
}