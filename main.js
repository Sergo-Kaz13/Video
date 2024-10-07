"use strict";

const controlBtn = document.querySelector(".control-btn");
const toggle = document.querySelector(".toggle");
const video = document.querySelector(".video-container");

let play = true;

controlBtn.addEventListener("click", () => {
  toggle.classList.toggle("toggle-pause");

  play ? video.pause() : video.play();

  play = !play;
});
