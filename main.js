let horizontalBar = document.getElementById("horizontal_underline");
let horizontalMeuns = document.querySelectorAll("nav:first-child a");

let verticalBar = document.getElementById("vertical_u");
let veriicalMenus = document.querySelectorAll("nav:nth-child(2) a");
//console.log("hello world");

function horizontalIndicator(e) {
  //console.log(e.offsetLeft + ", " + e.offsetWidth +", " + e.offsetTop + ",  " + e.offsetHeight + ", hello world");
  horizontalBar.style.left = e.offsetLeft + "px";
  horizontalBar.style.width = e.offsetWidth + "px";
  horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}

horizontalMeuns.forEach((menu) =>
  menu.addEventListener("click", (e) => horizontalIndicator(e.currentTarget))
);

function varticalIndicator(e) {
    //console.log(e.offsetLeft + ", " + e.offsetWidth +", " + e.offsetTop + ",  " + e.offsetHeight + ", hello world");
    verticalBar.style.left = e.offsetLeft + "px";
    verticalBar.style.width = e.offsetWidth + "px";
    verticalBar.style.top = e.offsetTop + e.offsetHeight + "px";
  }
  
  veriicalMenus.forEach((menu) =>
    menu.addEventListener("click", (e) => varticalIndicator(e.currentTarget))
  );

//horizontalMeuns.forEach())
