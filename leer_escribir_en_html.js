

const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const estrofa1 = document.querySelector('.estrofa1')
const estrofa2 = document.querySelector('#estrofa2')

const input = document.querySelector('input')

const p = document.querySelector('.prueba');

// const img = document.createElement('img')
// img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg')
// p.append(img)

let frutas = ['platos', 'bolso', 'perro', 'silla', 'tv', 'botella', 'manzanas', 'uvas', 'bananos', 'piñas', 'peras', 'melocotones'];

frutas.push('Vasos')

const ul = document.createElement('ul')
//let li = document.createElement('li')
p.append(ul)

// for(let i = 0; i < frutas.length; i++) {
//     node = document.createElement('li');    
//     node.appendChild(document.createTextNode(frutas[i]));
//     document.querySelector('ul').appendChild(node);
// }

for (const item of frutas) {
    node = document.createElement('li');    
    node.appendChild(document.createTextNode(item));
    document.querySelector('ul').appendChild(node);
}

//lista.setAttribute('textContent', "Esta es una lista")
//

//ul.innerText="Esto es un parrafo insertado desde el script"

console.log(p)

h1.innerHTML = 'POEMAS <br> DE RUBÉN DARÍO'



