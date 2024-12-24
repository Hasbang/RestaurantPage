function createcontactPage(){
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact');

    const headline = document.createElement('h1');
    headline.textContent =' Contact Us';


    const contactInfo = document.createElement('p');
    contactInfo.textContent = ' phone: 123-456-7890\nEmail: info@restaurant.com\nAddress: 123 Food street, Flavour Town, FT 12345';


    contactPage.appendChild(headline);
    contactPage.appendChild(contactInfo);

    return contactPage;

}
export default createcontactPage;