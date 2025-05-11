// let title = document.getElementsByTagName("h1");
// let tes = document.getElementById("tes");
// let classTes = document.getElementsByClassName("classTes");
// let nameTes = document.getElementsByName("username");

// title[0].style.backgroundColor = "red";
// tes.style.color = "blue";

// for (let i = 0; i < classTes.length; i++) {
//   classTes[i].style.color = "black";
// }

// nameTes[0].style.backgroundColor = "aqua";


let title = document.querySelector("h1");
let tes = document.querySelector("# tes");
let classTes = document.querySelectorAll("classTes");
let nameTes = document.querySelectorAll("username");

title[0].style.backgroundColor = "red";
tes.style.color = "blue";

for (let i = 0; i < classTes.length; i++) {
  classTes[i].style.color = "black";
}

nameTes[0].style.backgroundColor = "aqua";