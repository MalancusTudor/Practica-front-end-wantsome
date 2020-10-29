// Exercise 1

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url).then(response => {
    return response.json();
}).then(data => {
    return data.filter(item => item.id > 5);
}).then(data => {
    data.map(item => console.log(item.name, item.address.city));
});

// Exercise 2

const url2 = 'https://www.googleapis.com/books/v1/volumes?q=horror';

fetch(url2).then(response => {
    return response.json();
}).then(data => {
    data.items.filter(item => item.volumeInfo.pageCount > 230).map(item => console.log(item));
    return data.items.filter(item => item.volumeInfo.pageCount > 230)
}).then(data => {
    data.filter(item => item.volumeInfo.authors.length > 1).map(item => console.log(item));
});

// Exercise Cookie

document.cookie = 'Nume = Tudor; expires = Thu, 14 May 2020 21:00:00 UTC';
document.cookie = 'Profesie = Programator; expires = Thu, 14 May 2020 21:00:00 UTC';
document.cookie = 'Varsta = 22; expires = Thu, 14 May 2020 21:00:00 UTC';
document.cookie = 'Cookie4 = Value1; expires = Thu, 14 May 2020 21:00:00 UTC';
document.cookie = 'Cookie5 = Value2; expires = Thu, 14 May 2020 21:00:00 UTC';
const myCookie = document.cookie;

console.log(myCookie);