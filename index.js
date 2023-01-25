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
const container = document.createElement('main');
container.setAttribute('class', 'container');
document.body.append(container);

// Text container
const textdiv = document.createElement('div');
textdiv.setAttribute('class', 'text__content');
container.appendChild(textdiv);

// Header text -h1
const h1 = document.createElement('h1');
h1.setAttribute('class', 'text__title')
h1.innerHTML = `Modern Interior`;
textdiv.appendChild(h1);

// Text container paragraph
const paragraph = document.createElement('p');
paragraph.setAttribute('class', 'article');
paragraph.innerHTML = `A full-service residential & commercial interior design and staging company
offering professional organizing & eco-services.`
textdiv.appendChild(paragraph);

// Read more link
const readMore = document.createElement('a');
readMore.setAttribute('class', 'read__link');
readMore.innerHTML = `Read more `;
textdiv.appendChild(readMore);

// Arrow icon
const arrowIcon = document.createElement('i');
arrowIcon.setAttribute('class', 'fa-solid fa-arrow-right');
readMore.appendChild(arrowIcon);

// Image div
const imageDiv = document.createElement('div');
imageDiv.setAttribute('class', 'image__div');
container.appendChild(imageDiv);

// Image
const image = document.createElement('img');
image.setAttribute('class', 'image');
image.setAttribute('src', 'photo1.png');
imageDiv.appendChild(image);


// Author outer div
const outerContainer = document.createElement('div');
outerContainer.setAttribute('class', 'outer__container');
container.appendChild(outerContainer);

// Author inner Profile div
const innerDiv = document.createElement('div');
innerDiv.setAttribute('class', 'inner__container');
outerContainer.appendChild(innerDiv);

//Author profile div
const authorDiv = document.createElement('div');
authorDiv.setAttribute('class', 'author');
innerDiv.appendChild(authorDiv);

// Author profile Image
const authorImage = document.createElement('img');
authorImage.setAttribute('src', 'photo2.png');
authorDiv.appendChild(authorImage);

// Author Name
const usernameDiv = document.createElement('div');
usernameDiv.setAttribute('class', 'username');
authorDiv.appendChild(usernameDiv)

const authorName = document.createElement('h4');
authorName.setAttribute('id', 'name')
authorName.innerHTML = `Aliza Webber`;
usernameDiv.appendChild(authorName);

// Author Title
const authorTitle = document.createElement('h6');
authorTitle.setAttribute('id', 'title');
authorTitle.innerHTML = `Interior designer`;
usernameDiv.appendChild(authorTitle);

// Design data
const designData = document.createElement('h3');
designData.setAttribute('id', 'designer');
designData.innerHTML = `Designed in 2020 by Aliza Webber`;
innerDiv.appendChild(designData);