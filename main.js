import './style.css'
import './node_modules/bootstrap/dist/css/bootstrap.css'
import './node_modules/bootstrap/dist/js/bootstrap.js'
import { quotes } from './quotes.json'

let lista = [];
let osszesIdezet = [];
let theTomb = [];
let hosszLista = [];
let listaCopy = [];

document.addEventListener('DOMContentLoaded', () => {
  const osszesIdezetButton = document.getElementById("osszesIdezet");
  const osszesIdezetUL = document.getElementById("osszesIdezetUL");
  const theButton = document.getElementById("the");
  const theOL = document.getElementById("theOL");
  const hosszButton = document.getElementById("hossz");
  const hosszBekezdes = document.getElementById("hosszBekezdes");
  const szerzoInput = document.getElementById("szerzoInput");
  const darabSzamButton = document.getElementById("darabSzam");
  const darabSzamInput = document.getElementById("darabSzamInput");
  const szerzoSzorgalmi = document.getElementById("szerzoSzorgalmi");
  const darabSzamSzorgalmi = document.getElementById("darabSzamSzorgalmi");
  const szerzoSzorgalmi2 = document.getElementById("szerzoSzorgalmi2");
  const darabSzamSzorgalmi2 = document.getElementById("darabSzamSzorgalmi2");
  const darabSzamInput2 = document.getElementById("darabSzamInput2");
  const egyezesCheckbox = document.getElementById("egyezesCheckbox");

  osszesIdezetButton.addEventListener('click', function() {
    let szoveg = "";
    for (const item of osszesIdezet) {
      szoveg += `
        <li>${item.author} <q>${item.quote}</q></li>
      `
    }
    osszesIdezetUL.innerHTML = szoveg;
  })

  theButton.addEventListener('click', function() {
    let szoveg = "";
    for (var item of theTomb) {
      szoveg += `
       <li>${item}</li>
      `
    }
    theOL.innerHTML = szoveg;
  })

  hosszButton.addEventListener('click', function() {
    let szoveg = hosszLista.join(', ');
    hosszBekezdes.textContent = szoveg;
  })

  darabSzamButton.addEventListener('click', function() {
    const szerzo = szerzoInput.value;
    const darab = listaCopy.filter(item => item.author === szerzo).length;
    darabSzamInput.value = darab;
  })

  szerzoSzorgalmi.addEventListener('input', function() {
    const szerzo = szerzoSzorgalmi.value;
    const darab = listaCopy.filter(item => item.author.includes(szerzo)).length;
    darabSzamSzorgalmi.value = darab;
  })

  darabSzamSzorgalmi2.addEventListener('click', function() {
    if (egyezesCheckbox.checked == true) {
      const szerzo = szerzoSzorgalmi2.value;
      const darab = listaCopy.filter(item => item.author === szerzo).length;
      darabSzamInput2.value = darab;
    }
    else {
      const szerzo = szerzoSzorgalmi2.value;
      const darab = listaCopy.filter(item => item.author.includes(szerzo)).length;
      darabSzamInput2.value = darab;
    }
  })
})

quotes.forEach(item => lista.push(item));
listaCopy = Array.from(lista);
osszesIdezet = listaCopy.map(item => ({author: item.author, quote: item.quote})).sort((a,b) => (a.author > b.author) ? 1 : ((b.author > a.author) ? -1 : 0));
theTomb = listaCopy.map(item => item.quote.replace(" the ", "<strong> the </strong>").replace("The ", "<strong>The </strong>"));
hosszLista = listaCopy.map(item => item.quote.length);

