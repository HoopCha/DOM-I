const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let mainImg =document.querySelector("#cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"])

const servicesNav = document.querySelector('a:nth-Child(1)');
servicesNav.textContent = "Services";

const productNav = document.querySelector('a:nth-Child(2)');
productNav.textContent = "Product";

const visionNav = document.querySelector('a:nth-Child(3)');
visionNav.textContent = "Vision";

const featuresNav = document.querySelector('a:nth-Child(4)');
featuresNav.textContent = "Features";

const aboutNav = document.querySelector('a:nth-Child(5)');
aboutNav.textContent = "About";

const contactNav = document.querySelector('a:nth-Child(6)');
contactNav.textContent = "Contact";

const DOMtitle = document.querySelector('.cta-text h1');
DOMtitle.setAttribute('style', 'white-space: pre'); //I dont get this line
DOMtitle.textContent = "DOM\n IS \n AWESOME";


const DOMbutton = document.querySelector('.cta button');
DOMbutton.style.background = 'lightgrey';
DOMbutton.textContent = "Get Started";

const featTitle = document.querySelector('.text-content h4');
featTitle.textContent = "Features";

const featPar = document.querySelector('.text-content p');
featPar.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const aboutTitle = document.querySelector('.text-content:nth-child(2) h4');
aboutTitle.textContent = "About";

const aboutPar = document.querySelector('.text-content:nth-child(2) p');
aboutPar.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let codeImg =document.querySelector("#middle-img");
codeImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const servicesTitle = document.querySelector('.bottom-content h4');
servicesTitle.textContent = "Services";

const servicesPar = document.querySelector('.bottom-content p');
servicesPar.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const productTitle = document.querySelector('.bottom-content > .text-content:nth-child(2) h4');
productTitle.textContent = "Product";

const productPar = document.querySelector('.bottom-content > .text-content:nth-child(2) p');
productPar.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const visionTitle = document.querySelector('.bottom-content > .text-content:nth-child(3) h4');
visionTitle.textContent = "Vision";

const visonPar = document.querySelector('.bottom-content > .text-content:nth-child(3) p');
visonPar.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const contFoot = document.querySelector('.contact h4');
contFoot.textContent = "Contact";
const addFoot = document.querySelector('.contact p');
addFoot.setAttribute('style', 'white-space: pre');
addFoot.textContent = "123 Way 456 \n Street Somewhere USA";
const numFoot = document.querySelector('.contact p:nth-child(3)');
numFoot.textContent = "1 (888) 888-8888";
const emailFoot = document.querySelector('.contact p:nth-child(4)');
emailFoot.textContent = "sales@greatidea.io";

const copyFoot = document.querySelector('footer p');
copyFoot.textContent = "Copyright Great Idea! 2018";


const navBarAdds = document.querySelector("nav");

const newContent1 = document.createElement("a");
newContent1.href = "#";
newContent1.textContent = "Technology";

const newContent2 = document.createElement("a");
newContent2.href = "#";
newContent2.textContent = "Safety";

navBarAdds.appendChild(newContent1);
navBarAdds.prepend(newContent2);


const colorNav = document.querySelectorAll('a');
colorNav.forEach(element =>{
  element.style.color = 'green';
})

