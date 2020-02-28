/****   window.navigator    ****/

// function nav() {
//     console.log(window.navigator.platform);
//     console.log(window.navigator.appVersion);
//     console.log(window.navigator.appName);
// }
// nav();

// function isOnline(int) {
//     if (int) {
//         console.log("Online");
//     } else {
//         console.log("Offline")
//     }
// }
// isOnline(window.navigator.onLine);

/****    window.screen   ****/

// function widthHeight() {
//     console.log(window.screen.availWidth);
//     console.log(window.screen.availHeight);
//     console.log(window.screen.height);

// }

// widthHeight();

/****    window.location   ****/

// function website() {
//     console.log(window.location.href);
//     console.log(window.location.hostname);
//     console.log(window.location.protocol);
//     console.log(window.location.search);
// }



// function rel() {
//     location.reload();
// }

// function changePage() {
//     location.href = "https://www.bgit.rs/";
// }

/****     window.history     ****/

// history.back();
// history.forward();

/****   local.storage   ****/

function storeData(a, b) {
    window.localStorage.setItem(a, b)
}

//storeData("age", "32");

function readData() {
    var age = localStorage.getItem("age");

    if (age) {
        console.log(age)
    } else {
        console.log("There is no data")
    }
}

readData();

function clearData(a) {
    window.localStorage.removeItem(a);
}

/****    window methods   ****/

// function greeting() {
//     alert("hello");
//     var answer = prompt("how old are you?");
//     if (answer) {
//         confirm("We will submit this answer " + answer)
//     }
//     console.log("Hirurgija");
// }
// greeting();
