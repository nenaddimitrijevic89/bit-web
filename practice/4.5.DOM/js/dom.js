/*****   Selecting One/Multiple Elements    *****/

// function changeBackground() {
//     var a = document.getElementById("second-ul");
//     a.className = "background";
// }
// changeBackground();

// function selectLiElements() {
//     var a = document.querySelectorAll("li");
//     for (var i = 0; i < a.length; i++) {
//         if (i % 2 === 0) {
//             a[i].className = "blue-bg";
//         } else {
//             a[i].className = "green-bg";
//         }
//     }
// }
// selectLiElements();

// function thirdList() {
//     var a = document.querySelectorAll(".third-li");
//     for (var i = 0; i < a.length; i++) {
//         a[i].className = "textAndColor";
//     }
// }
// thirdList();

/*****    Traversing   *****/

// function changeElement() {
//     var a = document.querySelector(".active");
//     a.className = "";
//     a.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className =
//         "active";
// }
//changeElement();

/*****    Access/Update Text Node    ******/

// function takeElement() {
//     var a = document.querySelector("#sixth-ul");
//     alert(a.firstElementChild.textContent);
// }
// takeElement();

// function changeText(input) {
//     var a = document.querySelector("#sixth-ul");
//     a.lastElementChild.textContent = input;
// }
// changeText("Film");

/*******  InnerHTML  *******/

// function createDropdown(arr, elem) {
//     var div = document.querySelector(elem);
//     var select = document.createElement("select");
//     for (var i = 0; i < arr.length; i++) {
//         var option = document.createElement("option");
//         option.textContent = arr[i];
//         select.appendChild(option);
//     }
//     div.appendChild(select);
// }
// createDropdown(["Yugo", "Audi", "Mercedes"], "#first-div");
// createDropdown(["Ananas", "Banane", "Jabuke"], "#second-div");

/*******  Removing Elements  ******/

// function removeEl(el) {
//     var child = document.querySelector(el);
//     var parent = child.parentElement;
//     parent.removeChild(child);
// }


/******    Attributes   *******/

// var createForm = function (type, label, req) {
//     var form = document.querySelector("form");

//     var inputEl = document.createElement("input");
//     var labelEl = document.createElement("label");
//     var text = document.createTextNode(label);

//     inputEl.setAttribute("type", type);
//     labelEl.appendChild(text);
//     if (req) {
//         inputEl.setAttribute("required", "required");
//     }
//     form.appendChild(labelEl)
//     form.appendChild(inputEl);
// }

// createForm("text", "name", true);
// createForm("password", "password");
// createForm("submit", "submit")




// var a = ["nature1.jpg", "nature2.jpg", "nature3.jpg"];
// var div = document.querySelector("#third-div");

// function addImages(arr, el) {
//     for (var i = 0; i < arr.length; i++) {
//         var img = document.createElement("img");
//         img.setAttribute("src", './images/' + arr[i]);
//         el.appendChild(img);
//     }
//     document.querySelector("div img").classList.add("active");
// }

// function slide() {
//     var active = document.querySelector('.active');
//     active.classList.remove("active");

//     if (active.nextElementSibling) {
//         active.nextElementSibling.classList.add("active");
//     } else {
//         document.querySelector("div img").classList.add("active");
//     }
// }

// addImages(a, div);
// setInterval(slide, 1000);