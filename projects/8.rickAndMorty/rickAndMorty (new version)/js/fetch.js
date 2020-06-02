// export const fetchData = (url, onSuccess) => {
//     $.ajax({
//         type: "GET",
//         url: url,
//         success: (data) => {
//             console.log(data);
//             onSuccess(data)
//         },
//         error: (error) => {
//             console.log(error);
//             alert(error.responseText);
//         }
//     })
// }

export const fetchData = (url, onSuccess) => {
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            onSuccess(data)
        })
        .catch((error) => {
            console.log(error)
        })
}