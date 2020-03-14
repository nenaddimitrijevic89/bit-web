let object = function(id) {
    let request = new XMLHttpRequest();
    request.open("GET", `http://api.tvmaze.com/shows/${id}`);
    request.send();

    request.onload = function() {
        let data = JSON.parse(request.responseText);
        return data;
    };
};

let arr = [];
for (let j = 0; j < data.length; j++) {
    arr.push(data[j].rating.average + "-" + data[j].id);
}
console.log(arr);