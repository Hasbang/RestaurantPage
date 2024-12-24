import pageImage from "./images/image.jpeg";

function createHomePage(){
    const homePage = document.createElement('div');
    homePage.classList.add('homepage');

    const image = document.createElement('img');
    image.src = pageImage;
    image.alt = 'Retaurant Image';
    image.classList.add('restaurant-image');


    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Wonderful Restaurant';

    const description = document.createElement('p')
    description.textContent= 'Expierience an Exquisite blend of flavours and a welcomming Atmosphere';


    homePage.appendChild(image);
    homePage.appendChild(headline);
    homePage.appendChild(description);

    return homePage;
}

export default createHomePage;
