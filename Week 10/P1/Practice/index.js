// Exercise 1

// const buttonEventHandler = () => {
//     alert('Ai apasat pe buton.');
// }

// const textInputEventHandler = () => {
//     alert('Textul din input a fost schimbat');
// }

// const paragraph = document.querySelector('p');

// const cameleonEventHandler = () => {
//     let colors = ['red', 'blue', 'green', 'yellow', 'brown'];
//     let index = Math.floor(Math.random() * 5);
//     paragraph.style.color = colors[index];
// }

// document.querySelector('input').addEventListener("keypress", cameleonEventHandler);

// Exercise 2

// const button = document.querySelector('#exButton');

// const postTheGossip = () => {
//     const name = document.querySelector('#name').value;
//     const adjective = document.querySelector('#adjective').value;
//     const randomWord = document.querySelector('#random-word').value;
//     const paragraph = document.createElement('p');
//     paragraph.textContent = `${name} este ${adjective} dupa ${randomWord}`;
//     document.querySelector('body').appendChild(paragraph);
// }

// button.addEventListener('click', postTheGossip);

// Exercise 3

const sqrBtn = document.querySelector('#sqr-btn');

const sqrNum = () => {
    const number = document.querySelector('#square').value;
    alert(number * number);
}

sqrBtn.addEventListener('click', sqrNum);

const halfBtn = document.querySelector('#half-btn');

const halfNum = () => {
    const number = document.querySelector('#half').value;
    alert(number / 2);
}

halfBtn.addEventListener('click', halfNum);

const percentBtn = document.querySelector('#prc-btn');

const percentNum = () => {
    const firtNumber = document.querySelector('#percent1').value;
    const secondNumber = document.querySelector('#percent2').value;
    alert(firtNumber * 100 / secondNumber + "%");
}

percentBtn.addEventListener('click', percentNum);

const areaBtn = document.querySelector('#area-btn');

const areaCircle = () => {
    const number = document.querySelector('#area').value;
    alert(Math.PI * number * number);
}

areaBtn.addEventListener('click', areaCircle);