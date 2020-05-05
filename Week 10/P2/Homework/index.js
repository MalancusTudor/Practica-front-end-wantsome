// Exercise 1

const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
let xhttp = new XMLHttpRequest();
xhttp.open('GET', url);
xhttp.responseType = 'json';
xhttp.send();

const onload = () => {
    let quote = xhttp.response;
    postQuote(quote);
    xhttp.open('GET', url);
    xhttp.responseType = 'json';
    xhttp.send();
}

const postQuote = (quote) => {
    const paragraph = document.querySelector('#quote');
    paragraph.textContent = quote;
}

const button = document.querySelector('#xhr');
button.addEventListener('click', onload);

// Exercise 2

const puppies ='https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true';

let xhttpPuppies = new XMLHttpRequest();
xhttpPuppies.open('GET', puppies);
xhttpPuppies.responseType = 'json';
xhttpPuppies.send();

const postImage = (puppies) => {
    const div = document.querySelector('.text');
    div.textContent = "";
    puppies.data.children.forEach(element => {
        let img = document.createElement('img');
        img.setAttribute('src', element.data.thumbnail);
        div.appendChild(img);
    });
}

const loadPuppies = () => {
    let puppies = xhttpPuppies.response;
    postImage(puppies);
    xhttpPuppies.open('GET', puppies);
    xhttpPuppies.responseType = 'json';
    xhttpPuppies.send();
}

const buttonPuppies = document.querySelector('.btn');
buttonPuppies.addEventListener('click', loadPuppies);