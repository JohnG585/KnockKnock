document.getElementById("button2").classList.add("hide");
document.getElementById("button3").classList.add("hide");
document.getElementById("button4").classList.add("hide");
document.getElementById("button5").classList.add("hide");
document.getElementById("button6").classList.add("hide");
document.getElementById("button7").classList.add("hide");
document.getElementById("button8").classList.add("hide");

var btn1 = document.getElementById("button1")
var btn2 = document.getElementById("button2")
var btn3 = document.getElementById("button3")
var btn4 = document.getElementById("button4")
var btn5 = document.getElementById("button5")
var btn6 = document.getElementById("button6")
var btn7 = document.getElementById("button7")
var btn8 = document.getElementById("button8")

btn1.addEventListener("click", function() {
  document.getElementById("joke-part2").classList.add("show");
  btn2.classList.add("show");
});
btn2.addEventListener("click", function () {
  document.getElementById("joke-part3").classList.add("show");
  btn3.classList.add("show");
});
btn3.addEventListener("click", function () {
  document.getElementById("joke-part4").classList.add("show");
  btn4.classList.add("show");
});
btn4.addEventListener("click", function () {
  document.getElementById("joke-part5").classList.add("show");
  btn5.classList.add("show");
});
btn5.addEventListener("click", function () {
  document.getElementById("joke-part6").classList.add("show");
  btn6.classList.add("show");
});
btn6.addEventListener("click", function () {
  document.getElementById("joke-part7").classList.add("show");
  btn7.classList.add("show");
});
btn7.addEventListener("click", function () {
  document.getElementById("joke-part8").classList.add("show");
  btn8.classList.add("show");
});
btn8.addEventListener("click", function () {
  document.getElementById("joke-part9").classList.add("show");
});
