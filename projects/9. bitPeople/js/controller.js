import { fetchData } from "./data.js"
import { renderListUsers, refresh, switcher, gridAndList, renderGridUsers } from "./ui.js";

export const init = () => {

    const users = JSON.parse(localStorage.getItem("user"));

    const render = getRenderFn();

    if (users) {
        render(users)
    } else {
        fetchData(render)
    }
    search()

    const gridListBtn = gridAndList();
    gridListBtn.addEventListener("click", switcher)
}

const refreshBtn = refresh();
refreshBtn.addEventListener("click", () => {

    fetchData(getRenderFn())

    setInterval(timer, 1000);

})

const search = () => {
    const $input = document.querySelector("input");
    $input.addEventListener("keyup", () => {
        const data = JSON.parse(localStorage.getItem("user"))

        const searchedUsers = data.results.filter(user => {
            return user.name.first.toLowerCase().includes($input.value.toLowerCase()) || user.name.last.toLowerCase().includes($input.value.toLowerCase())
        });

        const render = getRenderFn();

        render({...data, results: searchedUsers })
    })
}

const getRenderFn = () => {
    const gridView = localStorage.getItem("truth");
    const render = gridView === 'true' ? renderGridUsers : renderListUsers;
    return render;
}

let timer = () => {
    const d = localStorage.getItem("updateTimer")
    let time = new Date().getTime();
    let a = new Date(time - Number(d)).getTime() / 1000;
    let b = 0;
    if (a < 60) {
        console.log(a, time, Number(d))
        console.log("passed few seconds")
    }
    if (a > 60) {
        b = a / 60;
        console.log(`passed ${a/60}`)
    }
    if (b > 60) {
        console.log("passed an hour")
    }
}