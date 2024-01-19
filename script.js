let current1 = document.getElementById("current1");
let current2 = document.getElementById("current2");
let rolldice = document.getElementById("roll-dice");
let hold = document.getElementById("hold");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let dice = document.getElementById("dice");
let left = document.getElementById("left");
let right = document.getElementById("right");
let pop = document.getElementById("pop-up");
let playerno = document.getElementById("playerno");
let container = document.getElementById("container");
let close=document.getElementById('close')
let btn=document.getElementById('btn')

right.style.pointerEvents = "none";
right.style.opacity = "0.5";
let no;
rolldice.onclick = function () {
  dice.classList.add("shake");
  no = getrndom();
  setno(no);
  if (no == "1") {
    toogle();
  }
  if (right.style.pointerEvents === "none") {
    current1.innerHTML = parseInt(current1.innerHTML) + parseInt(no);
  } else {
    current2.innerHTML = parseInt(current2.innerHTML) + parseInt(no);
  }
};
hold.onclick = function () {
  if (right.style.pointerEvents === "") {
    score2.innerHTML =
    parseInt(score2.innerHTML) + parseInt(current2.innerHTML);
    right.style.pointerEvents = "none";
    left.style.pointerEvents = "";
    right.style.opacity = "0.5";
    left.style.opacity = "1";
    if (parseInt(score2.innerHTML) >= 50) {
      container.style.display = "none";
      pop.style.transform = "translateY(1px)";
    }
  } else {
    score1.innerHTML =parseInt(score1.innerHTML) + parseInt(current1.innerHTML);
    right.style.pointerEvents = "";
    left.style.pointerEvents = "none";
    right.style.opacity = "1";
    left.style.opacity = "0.5";
    if (parseInt(score1.innerHTML) >= 50) {
      container.style.display = "none";
      playerno.innerHTML = "1";
      pop.style.transform = "translateY(1px)";
    }
  }
};
function getrndom() {
  return Math.floor(Math.random() * 6) + 1;
}
function setno(no) {
  let words = ["", "one", "two", "three", "four", "five", "six"];
  str = words[no];
  dice.classList.remove(dice.classList[1]);
  var classes = Array.from(dice.classList);
  classes.splice(1, 0, `fa-dice-${str}`);
  dice.className = classes.join(" ");
  setTimeout(function () {
    dice.classList.remove("shake");
  }, 500);
}
function toogle() {
  if (right.style.pointerEvents === "") {
    current2.innerHTML = "0";
    right.style.pointerEvents = "none";
    left.style.pointerEvents = "";
    right.style.opacity = "0.5";
    left.style.opacity = "1";
  } else {
    current1.innerHTML = "0";
    right.style.pointerEvents = "";
    left.style.pointerEvents = "none";
    right.style.opacity = "1";
    left.style.opacity = "0.5";
  }
}
btn.onclick=function(){
  restart();
}
close.onclick=function(){
  restart();
}
function restart(){
  pop.style.transform='translateY(-750px)';
  container.style.display='flex';
  current1.innerHTML='0'
  current2.innerHTML='0'
  score1.innerHTML='0'
  score2.innerHTML='0'
}