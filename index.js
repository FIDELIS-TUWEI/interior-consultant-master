// Header Container
const header = document.createElement('header');
document.body.append(header);

// Nav bar
const navBar = document.createElement('nav');
navBar.setAttribute('class', 'nav__bar');
header.appendChild(navBar);

// Logo - Name
const logo = document.createElement('a');
logo.setAttribute('class', 'nav__brand');
logo.innerHTML = `THIS INTERIOR`;
navBar.appendChild(logo);

// Nav menu - ul
const navMenu = document.createElement('ul');
navMenu.setAttribute('class', 'nav__menu');
navBar.appendChild(navMenu);

// List item - li1
const listItem1 = document.createElement('li');
listItem1.setAttribute('class', 'nav__item');
navMenu.appendChild(listItem1);

// Nav - link - a
const link1 = document.createElement('a');
link1.setAttribute('class', 'nav__link');
link1.innerHTML = `Home`
listItem1.appendChild(link1);

// List item -li2
const listItem2 = document.createElement('li');
listItem2.setAttribute('class', 'nav__item');
navMenu.appendChild(listItem2);

// Nav - link - a 2
const link2 = document.createElement('a');
link2.setAttribute('class', 'nav__link');
link2.innerHTML = `Collection`;
listItem2.appendChild(link2);

// List item li3
const listItem3 = document.createElement('li');
listItem3.setAttribute('class', 'nav__item');
navMenu.appendChild(listItem3);

// Nav - link a3
const link3 = document.createElement('a');
link3.setAttribute('class', 'nav__link');
link3.innerHTML = `About`;
listItem3.appendChild(link3);

// List item li4
const listItem4 = document.createElement('li');
listItem4.setAttribute('class', 'nav__item');
navMenu.appendChild(listItem4);

// Nav - link a4
const link4 = document.createElement('a');
link4.setAttribute('class', 'nav__link');
link4.innerHTML = `Contact`;
listItem4.appendChild(link4);

// Hamburger menu
const hamburgerDiv = document.createElement('div');
hamburgerDiv.setAttribute('class', 'hamburger__menu');
navBar.appendChild(hamburgerDiv);

// Hamburger bars - span *3
const span1 = document.createElement('span');
span1.setAttribute('class', 'bars');
hamburgerDiv.appendChild(span1);

const span2 = document.createElement('span');
span2.setAttribute('class', 'bars');
hamburgerDiv.appendChild(span2);

const span3 = document.createElement('span');
span3.setAttribute('class', 'bars');
hamburgerDiv.appendChild(span3);

// Main Container