import { fetchData } from "./data.js"
import { renderListUsers, refresh, switcher, gridAndList, renderGridUsers, notFound, getInput, getTimer } from "./ui.js";

export const init = () => {

    updateTimer();

    const users = JSON.parse(localStorage.getItem("users"));

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

///////////////////////////////////////////////////////

const refreshBtn = refresh();
refreshBtn.addEventListener("click", () => {

    fetchData(getRenderFn())
})

///////////////////////////////////////////////////////

const search = () => {
    const input = getInput();
    input.addEventListener("keyup", () => {
        const data = JSON.parse(localStorage.getItem("users"))

        const searchedUsers = data.results.filter(user => {
            return user.name.first.toLowerCase().includes(input.value.toLowerCase()) || user.name.last.toLowerCase().includes(input.value.toLowerCase())
        });

        const render = getRenderFn();

        render({...data, results: searchedUsers })

        if (searchedUsers.length === 0) {
            notFound();
        }
    })
}

///////////////////////////////////////////////////////

const getRenderFn = () => {
    const gridView = localStorage.getItem("grid");
    const render = gridView === 'true' ? renderGridUsers : renderListUsers;
    return render;
}

//////////////////////////////////////////////////////
let hours = 0;
const updateTimer = () => {
    const markDate = new Date(localStorage.getItem("markDate"));
    const markMinutes = markDate.getMinutes();
    const markSeconds = markDate.getSeconds();

    let currDate = new Date();
    let currMinutes = currDate.getMinutes();
    let currSeconds = currDate.getSeconds();
    let minutes = currMinutes - markMinutes;
    if (minutes < 0) { minutes += 60; }
    let seconds = currSeconds - markSeconds;
    if (seconds < 0) { seconds += 60; }


    if (minutes === 59 && seconds === 59) {
        hours++;
    }

    let timeElapsed = "";

    if (hours === 0 && minutes === 0) {
        timeElapsed = `Last update: ${seconds} sec ago`;
    }
    if (hours === 0 && minutes > 0) {
        timeElapsed = `Last update: ${minutes} min ago`;
        console.log(hours, minutes, seconds)
    }
    if (hours > 0) {
        timeElapsed = `Last update: ${hours} h ago`;
    }
    if (hours > 24 && hours < 48) {
        timeElapsed = "Last update: a day ago";
    }
    if (hours > 48 && hours < 168) {
        timeElapsed = "Last update: few days ago"
    }
    const timer = getTimer();
    timer.innerHTML = timeElapsed;
    setTimeout(() => { updateTimer() }, 5000);
}