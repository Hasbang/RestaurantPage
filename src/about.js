function createAboutPage(){
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('about');

    const headline = document.createElement('h1');
    headline.textContent = 'About Us';


    const aboutText = document.createElement('p')
    aboutText.textContent = 'founded in 2024, Our Restaurant has been a family-owned and operated establisment dedicated to providing exquisite culinary experiences.Our Mission is to serve delicious , affordable food that guest will want to return to week after week.Our team of chefs uses the freshest ingredients to create dishes that are both innovative and traditional, ensuring a dinning expierience that is unique and memorable.';


    aboutPage.appendChild(headline)
    aboutPage.appendChild(aboutText)

    return aboutPage;
}
export default createAboutPage;