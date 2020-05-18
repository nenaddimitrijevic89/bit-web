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
        //timer
        // localStorage.setItem("updateTimer", new Date())
        // const date = localStorage.getItem("updateTimer");
        // console.log(date)
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