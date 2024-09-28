function custom_fetch(apiUrl, callback) {
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error while fetching data');
        }
        return response.json();
    })
    .then(data => {
        callback(data);
    })
    .catch(error => {
        console.error(error);
    });
}

// z.B.
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const callbackFunction = (responseData) => {
    console.log(responseData);
};

custom_fetch(apiUrl, callbackFunction);

