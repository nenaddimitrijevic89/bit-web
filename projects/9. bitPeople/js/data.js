export const fetchData = (onSuccess) => {
    const markDate = new Date();
    localStorage.setItem("markDate", markDate)
    const loader = document.querySelector("#loader");
    loader.style.display = "block";
    let $searchBar = document.querySelector("div.searchBar");
    $searchBar.style.display = "none";
    let $statisticDiv = document.querySelector(".stats");
    $statisticDiv.innerHTML = "";
    const $wrapper = document.querySelector(".wrapper");
    $wrapper.innerHTML = "";
    fetch(`https://randomuser.me/api/?results=15`)
        .then(response => response.json())
        .then(data => {
            onSuccess(data)
            localStorage.setItem("users", JSON.stringify(data))
        })
        .catch(err => console.log(err))
}