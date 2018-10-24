// Add a script tag to the bottom of the HTML body.

const scriptElem = document.createElement("script");
document.querySelector("body").appendChild(scriptElem);

// scriptElem.innerHTML = //"document.querySelector('body').appendChild(scriptElem);";

// (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".

document.querySelector("body").style.fontFamily = "Arial, sans-serif";

// (In the JavaScript) Replace each of the spans (nickname, favorites, hometown) with your own information.

document.querySelector("span#nickname").innerHTML = "Mick";
document.querySelector("span#favorites").innerHTML = "Tacos, Steak, Sushi";
document.querySelector("span#hometown").innerHTML = "Orlando, FL";

// Iterate through each li and change the class to "list-item".

let listItems = document.querySelectorAll("li");

for (elem of listItems) {
    elem.className = "list-item";
}

// (In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.

const styleElem = document.createElement("style");
styleElem.innerText = ".list-item{color: red;}";
document.querySelector("head").appendChild(styleElem); 

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

let photoOfMe = document.createElement("img");
photoOfMe.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/345/499/0f6.jpg";
photoOfMe.alt = "Chuck Norris";

const ulElem = document.querySelector("ul");
const bodyElem = document.querySelector("body");

bodyElem.insertBefore(photoOfMe, ulElem);
