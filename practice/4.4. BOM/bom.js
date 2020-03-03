/****   using JS on webpage  ****/

// function trigger() {
//     console.log("Nenad Dimitrijevic");
// }
// trigger();

/****   BOM (Window object)  ****/

//window.navigator

// function info() {
//     console.log(window.navigator.platform);
//     console.log(window.navigator.appVersion);
//     console.log(window.navigator.appName);
// }

// function isOnline(input) {
//     if (input) {
//         console.log("Online");
//     } else {
//         console.log("Offline");
//     }
// }
// info();
// isOnline(window.navigator.onLine);

//window.screen

// function widthHeigth() {
//     console.log("current width: " + window.screen.availWidth);
//     console.log("current height: " + window.screen.availHeight);
//     console.log("max width: " + window.screen.width);
//     console.log("max height: " + window.screen.height);
// }
// widthHeigth();

//window.location

// function printInfo() {
//     console.log(window.location.href);
//     console.log(window.location.host);
//     console.log(window.location.protocol);
//     console.log(window.location.search);
// }

// function reloading() {
//     window.location.reload();
// }

// function goTo(input) {
//     window.location.href = "https://github.com/";
// }

//window.localStorage

// function setInfo(a, b) {
//     window.localStorage.setItem(a, b);
// }

// function getInfo(a) {
//     var data = window.localStorage.getItem(a);
//     if (data) {
//         console.log(data);
//     } else {
//         console.log("There is no data!");
//     }
// }

// function removeInfo(a) {
//     window.localStorage.removeItem(a);
// }

//window.sessionStorage

// function setSessInfo(a, b) {
//     window.sessionStorage.setItem(a, b);
// }

// function getSessInfo(a) {
//     var data = window.sessionStorage.getItem(a);
//     if (data) {
//         console.log(data);
//     } else {
//         console.log("We do not know that");
//     }
// }

// function removeSessInfo(a) {
//     window.sessionStorage.removeItem(a);
// }

//window.history

// window.history.forward();

// window.history.back();

/*********   Window Methods   ********/

// function greetings() {
//     alert("Welcome here!");
//     var answer = prompt("What is your name?");
//     var answer2 = confirm("We will submit this answer now! " + answer);
//     if (answer2) {
//         alert("Success!");
//     }
// }
// greetings();

/********   Global JavaScript Objects (homework)  ******/

//Math

// function randomNumbers() {
//     var arr = [];
//     for (var i = 0; i < 10; i++) {
//         arr.push(Math.random() * 10);
//         //console.log(arr[i]);
//     }
//     return arr;
// }
// var arrayRandom = randomNumbers();

// function roundNumbers(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].toFixed(2));
//         //console.log(newArr[i]);
//     }
//     return newArr;
// }
// var arrayRound = roundNumbers(arrayRandom);

// function floorNumbers(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArr.push(Math.floor(arr[i]));
//         //console.log(newArr[i]);
//     }
//     return newArr;
// }
// var arrayFloor = floorNumbers(arrayRound);

// function maxNumber(arr) {
//     console.log(arr);
//     console.log(Math.max.apply(null, arr));
// }
// maxNumber(arrayFloor);

//Date

// function printWholeDate() {
//     var a = new Date();
//     console.log(a);
//     var b = a.getHours() + ":" + a.getMinutes();
//     console.log(b);
//     var c = a.getDate() + "." + (a.getMonth() + 1) + "." + a.getFullYear() + ".";
//     console.log(c);
// }
// printWholeDate();