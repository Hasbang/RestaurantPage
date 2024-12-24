import "./styles.css";


import createHomePage from "./pageLoad";
import createMenuPage from "./menu";
import createContactPage from "./contact";
import createAboutPage from "./about";


function loadPage(pageFunction){
    const content = document.querySelector('#content');
    content.innerHTML = '';

    content.appendChild(pageFunction());
}

console.log ('webpack is running smoothly!')
createHomePage();


document.querySelector("#home").addEventListener('click', ()=> loadPage(createHomePage));
document.querySelector("#menu").addEventListener('click', ()=> loadPage(createMenuPage));
document.querySelector("#about").addEventListener('click', ()=> loadPage(createAboutPage));
document.querySelector("#contact").addEventListener('click', ()=> loadPage(createContactPage));

