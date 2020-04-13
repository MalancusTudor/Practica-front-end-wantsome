const books = [
    {title: 'The Power of Habit',
    author: 'Charles Duhigg',
    imageSource: 'https://thefictionalreader.files.wordpress.com/2015/11/the-power-of-habit.jpg?w=249&h=383',
    read: true
    },
    {title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    imageSource: 'https://cdn.shopify.com/s/files/1/0066/0842/0979/files/mindset-carol-dweck_medium.jpg?v=1580389360',
    read: false
}];

const body = document.querySelector('body');

const list = document.createElement('ul');

for(let i = 0; i < books.length; ++i) {
    const listElement = document.createElement('li');
    const paragraph = document.createElement('p');
    if(books[i].read === true) {
        paragraph.style.fontFamily = 'Arial, sans-serif';
        paragraph.style.textDecoration = 'underline';
        paragraph.style.fontWeight = 'bold';
    } else {
        paragraph.style.fontStyle = 'italic';
    }
    paragraph.innerHTML = `Titlul cartii: ${books[i].title}<br>Autorul cartii: ${books[i].author}`;
    listElement.appendChild(paragraph);
    const image = document.createElement('img');
    image.setAttribute('src', books[i].imageSource);
    listElement.appendChild(image);
    list.appendChild(listElement);
}

body.appendChild(list);