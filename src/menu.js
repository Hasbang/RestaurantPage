function createMenuPage() {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');


    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';

    const menuList = document.createElement('ul');

    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Spagheti caborana';
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Spagheti caborana';

    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Spagheti caborana';


    menuList.appendChild(menuItem1)
    menuList.appendChild(menuItem2)
    menuList.appendChild(menuItem3)
    menuPage.appendChild(headline)
    menuPage.appendChild(menuList);


    return menuPage;

}

export default createMenuPage;