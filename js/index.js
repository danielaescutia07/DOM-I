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

//NavBar

const links = document.querySelectorAll("nav a");
links.forEach((link,i) => link.textContent = Object.values(siteContent.nav)[i]);
links.forEach((link,i) => link.style.color = "green");

//Added Links
const events = document.createElement("a");
events.textContent = "Events";
events.href = "#";
document.querySelector("nav").prepend(events);
events.style.color = "green";

const reviews = document.createElement("a");
reviews.textContent = "Reviews";
reviews.href = "#";
document.querySelector("nav").appendChild(reviews);
reviews.style.color = "green";

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Top Section

const h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

 const image = document.querySelector("#cta-img");
 image.setAttribute('src', siteContent["cta"]["img-src"]);


 //Main Content

 const features = document.querySelector(".text-content:nth-of-type(1) h4");
 features.textContent = siteContent["main-content"]["features-h4"];

 const featuresParagraph = document.querySelector(".text-content:nth-of-type(1) p");
 featuresParagraph.textContent = siteContent["main-content"]["features-content"];

 const about = document.querySelector(".text-content:nth-of-type(2) h4");
 about.textContent = siteContent["main-content"]["about-h4"];

 const aboutParagraph = document.querySelector(".text-content:nth-of-type(2) p");
 aboutParagraph.textContent = siteContent["main-content"]["about-content"];

 const middleImage = document.querySelector("#middle-img");
 middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

 const services = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
 services.textContent = siteContent["main-content"]["services-h4"];

 const servicesParagraph = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
 servicesParagraph.textContent = siteContent["main-content"]["services-content"];


 const product = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
 product.textContent = siteContent["main-content"]["product-h4"];

 const productParagraph = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
 productParagraph.textContent = siteContent["main-content"]["product-content"];

 const vision = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
 vision.textContent = siteContent["main-content"]["vision-h4"];

 const visionParagraph = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
 visionParagraph.textContent = siteContent["main-content"]["vision-content"];


//Contact Section

const contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

const address = document.querySelector(".contact p:nth-of-type(1)");
address.textContent = siteContent["contact"]["address"];

const phone = document.querySelector(".contact p:nth-of-type(2)");
phone.textContent = siteContent["contact"]["phone"];

const email = document.querySelector(".contact p:nth-of-type(3)");
email.textContent = siteContent["contact"]["email"];


//Footer

const footer =document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];