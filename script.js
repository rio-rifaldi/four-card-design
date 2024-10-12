import "./style.css";

let root = document.querySelector("html");
let body = document.querySelector("body");
let header_h1 = body.querySelector(".container .header h1");
let header_h2 = body.querySelector(".container .header .typing");
let card = body.querySelectorAll(".container .card-wrapping .card");

let checkbox = body.querySelector(".toogle input");
let sun = body.querySelector(".toogle .sun");
let moon = body.querySelector(".toogle .moon");

let cardHeader = body.querySelectorAll(".container .card-wrapping .card .head");

checkbox.addEventListener("click", (args) => {
	if (checkbox.checked) {
		sun.style.visibility = "hidden";
		moon.style.visibility = "visible";
		moon.children[0].style.fill = "#ffffff";
		body.style.backgroundColor = "#21213d";
		header_h2.style.setProperty("--bg-typing", "#21213d");
		header_h2.style.setProperty("--bg-cursor", "#ffffff");
		header_h1.style.color = "white";
		header_h2.style.color = "white";
		cardHeader.forEach((e) => {
			e.style.color = "#ffffff";
		});
		card.forEach((e) => {
			e.style.backgroundColor = "#1a1a37";
		});
		root.style.colorScheme = "dark";
	} else {
		cardHeader.forEach((e) => {
			e.style.color = "#000";
		});
		header_h2.style.setProperty("--bg-typing", "#ffffff");
		header_h2.style.setProperty("--bg-cursor", "#000000");
		header_h1.style.color = "black";
		header_h2.style.color = "black";
		body.style.backgroundColor = "#ffffff";
		sun.style.visibility = "visible";
		moon.style.visibility = "hidden";
		card.forEach((e) => {
			e.style.backgroundColor = "#ffffff";
		});
		root.style.colorScheme = "light";
	}
});



