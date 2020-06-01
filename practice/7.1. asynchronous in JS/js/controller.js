import { getData } from "./data.js";
import { renderJoke, getButton } from "./ui.js";

const button = getButton();

// export const joke = () => {
//     const d = getData()
//     d.then((data) => {
//         renderJoke(data);
//     }, (error) => {
//         console.log(error);
//     });
// }

// joke();

const init = () => {
    getData(renderJoke)
}

button.addEventListener("click", init)