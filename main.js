"use strict";
let select = document.querySelector("#select");
let bread = document.querySelector(".bread");
let size = document.querySelector(".size");
let on = document.querySelector(".on");
let add = document.querySelector(".add");
let pizzaSize = document.querySelector(".pizza-size");
let wrapperItem = document.querySelector(".wrapper-item");
let check = document.querySelector(".checkbox");
let item = document.querySelector("#item");
let upper = document.querySelector("#upper");
let meat = document.querySelector(".meat");
let userName = document.querySelector(".#userName");
let userNumber = document.querySelector("#userNumber");
let userEmail = document.querySelector("#userEmail");
let name1 = document.querySelector("#name");
let number = document.querySelector("#number");
let email = document.querySelector("#email");

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("name").innerHTML = x;
}

select.addEventListener("change", (e) => {
  bread.textContent = `${e.target.value}`;
});

pizzaSize.addEventListener("click", (e) => {
  let box = e.target.className;
  if (box == "wrapper-item bg-white") {
    size.innerHTML = `${e.target.textContent}`;
  }
});

let arr = [];
let newArr = [];
check.addEventListener("click", (e) => {
  let inputValue = e.target;
  if (inputValue.name !== undefined) {
    let li = document.createElement("li");
    if (inputValue.checked == true) {
      console.log(inputValue.value);
      li.textContent = ` $5 ${inputValue.value}`;
      upper.appendChild(li);
    } else if (inputValue.checked == false) {
      upper.innerHTML = "";
    }
  }
});

on.addEventListener("click", (e) => {
  let plus = e.target;
  let div = document.createElement("div");
  if (plus !== undefined) {
    if (plus.checked == true) {
      add.textContent = `$3 ${plus.value}`;
    } else if (plus.checked == false) {
      add.textContent = "";
    }
  }
});

// modal //

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

modal.style.display = "none";
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// modal //
