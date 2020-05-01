export const fetchData = (url, onSuccess) => {
    $.ajax({
        type: "GET",
        url: url,
        success: (data) => {
            console.log(data);
            onSuccess(data)
        },
        error: (error) => {
            console.log(error);
            alert(error.responseText);
        }
    })
}