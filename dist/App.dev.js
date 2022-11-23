"use strict";

var numberOne = document.getElementById('numberOne', '');
var numberTwo = document.getElementById('numberTwo');
var numberTree = document.getElementById('numberTree');
var numberFour = document.getElementById('numberFour');
var numberFive = document.getElementById('numberFive');
var submit = document.getElementById('submit');
var $select = document.querySelector("#number1");
var enlace = document.getElementById('enlace');
number1.textContent = "You selected 1 out of 5";
numberOne.onclick = number1;
numberTwo.onclick = number2;
numberTree.onclick = number3;
numberFour.onclick = number4;
numberFive.onclick = number5;
submit.onclick = send;

function number1() {
  console.log("precionaste el numero 1");
}

function number2() {
  console.log("Precionaste el numero 2");
}

function number3() {
  console.log("Precionaste el numero 3");
}

function number4() {
  console.log("Precionaste el numero 4");
}

function number5() {
  console.log("Precionaste el numero 5");
}

function send() {
  console.log("Resultado Enviado");
}