"use strict";
const open = document.querySelector("#open");
const container = document.querySelector(".container");
const modal = document.querySelector(".modal");
const close = document.querySelector("#close");

open.addEventListener("click", function () {
  modal.classList.add("show");
});
close.addEventListener("click", function () {
  modal.classList.remove("show");
});
