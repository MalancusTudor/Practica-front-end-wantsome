// const header = document.querySelector('header');
// const section = document.querySelector('section');
// let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// let xhttp = new XMLHttpRequest();
// xhttp.open('GET', requestURL);
// xhttp.responseType = 'json';
// xhttp.send();

// xhttp.onload = () => {
//     const superHeroes = xhttp.response;
//     populateHeader(superHeroes);
//     showHeroes(superHeroes); 
// }

// const populateHeader = (jsonObj) => {
//     const h1 = document.createElement('h1');
//     h1.textContent = jsonObj['squadName'];
//     header.appendChild(h1);
  
//     const paragraph = document.createElement('p');
//     paragraph.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
//     header.appendChild(paragraph);
// }

// const showHeroes = (jsonObj) => {
//     const heroes = jsonObj['members'];
        
//     for (let i = 0; i < heroes.length; i++) {
//         const article = document.createElement('article');
//         const h2 = document.createElement('h2');
//         const paragraph1 = document.createElement('p');
//         const paragraph2 = document.createElement('p');
//         const paragraph3 = document.createElement('p');
//         const list = document.createElement('ul');
    
//         h2.textContent = heroes[i].name;
//         paragraph1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
//         paragraph2.textContent = 'Age: ' + heroes[i].age;
//         paragraph3.textContent = 'Superpowers:';
            
//         const superPowers = heroes[i].powers;
//         for (let j = 0; j < superPowers.length; j++) {
//             const listItem = document.createElement('li');
//             listItem.textContent = superPowers[j];
//             list.appendChild(listItem);
//         }
    
//         article.appendChild(h2);
//         article.appendChild(paragraph1);
//         article.appendChild(paragraph2);
//         article.appendChild(paragraph3);
//         article.appendChild(list);
    
//         section.appendChild(article);
//     }
// }

const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';
let xhttp = new XMLHttpRequest();
xhttp.open('GET', requestURL);
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = () => {
    const colors = xhttp.response;
    populateBody(colors);
}

const populateBody = (colors) => {
    const colorNames = Object.keys(colors);
    const colorCodes = Object.values(colors);
    const list = document.createElement('ul');
    for(let i = 0; i < colorNames.length; ++i) {
        let listItem = document.createElement('li');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');

        div1.style.display = 'inline-block';
        div1.style.border = 'solid';
        div1.style.borderColor = colorCodes[i];
        div1.style.backgroundColor = colorCodes[i];
        div1.style.width = '10px';
        div1.style.height = '10px';

        div2.style.display = 'inline-block';
        div2.textContent = colorNames [i];
        listItem.appendChild(div1);
        listItem.appendChild(div2);
        console.log(listItem);
        list.appendChild(listItem);
    }
    document.querySelector('body').appendChild(list);
}