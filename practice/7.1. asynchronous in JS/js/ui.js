export const getButton = () => document.querySelector("button")
export const renderJoke = (data) => {
    const $jokeDiv = document.querySelector(".joke");
    $jokeDiv.innerHTML = '';
    const $text = document.createElement("h3");
    $text.textContent = data.value;
    $jokeDiv.appendChild($text)
}