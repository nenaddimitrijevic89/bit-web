var newXHR = new XMLHttpRequest();

newXHR.open("GET", "http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx");
newXHR.send();

newXHR.onload = function () {
    var xmlDoc = newXHR.responseXML;
    var country = xmlDoc.querySelector("geoplugin_countryName").textContent;
    var title = document.createElement("h1");
    title.textContent = country;
    var body = document.querySelector("body");
    body.appendChild(title);
}

var locationXHR = new XMLHttpRequest();

locationXHR.open("GET", "http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx");
locationXHR.send();

var button = document.querySelector("button");

button.onclick = function () {
    var xmlDoc = locationXHR.responseXML;
    var input = document.querySelector("input");
    var location = xmlDoc.querySelector("geoplugin_request").textContent;
    input.value = location + "";
}
