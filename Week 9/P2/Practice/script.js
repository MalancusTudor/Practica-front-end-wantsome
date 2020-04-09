const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';

const spanName = document.querySelector('#name');
spanName.textContent = 'Tudor Malancus';

const spanDrink = document.querySelector('#fav-drink');
spanDrink.textContent = 'Bere';

const spanPlace = document.querySelector('#born-place');
spanPlace.textContent = 'Vaslui';

const list = document.querySelector('ul').childNodes;

for (i = 1; i < list.length; i += 2) {
    list[i].classList.add('listItem');
}

const head = document.querySelector('head');

const styleTag = document.createElement('style');
styleTag.textContent = '.listItem{ color: red }';

head.appendChild(styleTag);

const img = document.createElement('img');
img.setAttribute('src', 'https://images.unsplash.com/photo-1542044896530-05d85be9b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');

body.appendChild(img);