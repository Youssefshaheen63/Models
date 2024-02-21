"use strict";
const showmodel = document.querySelectorAll(".show-model");
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector(".closebtn");
const openmodel = function () {
	model.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closemodel = function () {
	model.classList.add("hidden");
	overlay.classList.add("hidden");
};

for (let i = 0; i < showmodel.length; i++)
	showmodel[i].addEventListener("click", openmodel);

closebtn.addEventListener("click", closemodel);
overlay.addEventListener("click", closemodel);

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && !model.classList.contains("hidden")) closemodel();
});
