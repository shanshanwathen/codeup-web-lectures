//i. locating in the DOM

// TODO: Find an element by the id of "hat-search". Store the result into a variable. Use a console log to check what is in your variable.

var hatSearchElement = document.getElementById("hat-search");
console.log(hatSearchElement);

// TODO: Find all of our elements we made flex containers in Bootstrap! Locate the .d-flex class, store all of your results into a variable, and then console.log them.

var flexboxElements = document.getElementsByClassName("d-flex");
console.log(flexboxElements);

// TODO: Finish my FOR loop to go through that variable containing our d-flex'ed items and console.log each individual one within the loop!

for (var i = 0; i < flexboxElements.length; i++){
    console.log("What is i: " + i);
    console.log(flexboxElements[i]);
}

// TODO: Find all of our div elements and store them into a variable~! Console.log the variable to see the results within!

var divElements = document.getElementsByTagName("div");
console.log(divElements);

// TODO: Now that we have a variable with all of the elements, can you tell me how many divs are in the HTML using that variable and a little Javascript? Hint: the variable looks and behaves a lot like an array, doesn't it? That helped us in our for loop's condition!

console.log(divElements.length);

// TODO BONUS (a): Write a function called locateDivs. When locateDivs is called, it should return a collection of the div elements found.

function locateDivs() {
    return divElements;
}

// TODO BONUS (b): Write a function called locateElements. locateElements should take in one parameter, the element to be searched for, and then return a collection of those elements. If no elements by that name were found, return false.

function locateElements (elementToSearch) {
    return document.getElementsByTagName(elementToSearch);
}

console.log(locateElements("div"));
console.log(locateElements("li"));

// ii. a step further: accessing / looking into what we've located deeper

// innerHTML/innerText

// TODO: Howell's doesn't sound like the name you'd give your hat shop - let's change the innerText of that in our navigation bar to your own name.

var navElements = document.getElementsByClassName("navbar-brand");
navElements[0].innerHTML = "Su's <i class=\"bi-shop mx-1\"></i>"

// TODO: There's only one ordered list on the page - can you get into that ordered list and use innerHTML to change the list items within that ordered list to what you think the top sellers were?

var orderedListItems = document.getElementsByTagName("ol");
orderedListItems[0].innerHTML = "<li>Coonskin cap</li><li>Chullo hats</li><li>Catwheel hats</li><li>Capirote hats</li>"

// TODO (BONUS): I have two "special-offer" classes used in my table - grab those classes by name, store them into a variable, and then use a loop to replace the innerHTML. The new table data should have strings that let our customers know that "New discounts are coming soon!"

var specialOfferItems = document.getElementsByClassName("special-offer");

for (i = 0; i < specialOfferItems.length; i++) {
    specialOfferItems[i].innerHTML = "New discounts are coming soon!";
}

// attributes

// TODO: Bringing in Bootstrap components, sometimes we can forget to change example or demo related text - one of my ids in the HTML is set to "navbarTogglerDemo02". I don't think we need that ID at all, can you remove that attribute for me? Start by storing it in a variable!

var navbarToggler = document.getElementById("navbarTogglerDemo02");
navbarToggler.removeAttribute("id");

// TODO: Uh oh - actually there was a BUTTON that referred to 'navbarTogglerDemo02' that is right above it in our HTML structure! Let's add an ID back to the variable you used above that makes more sense (perhaps "navbar-collapser"?)

navbarToggler.setAttribute("id", "navbar-collapser");

// TODO: Now, get into that button element that makes reference to our old "navbarTogglerDemo02" ids and change those attributes to match. Refactor complete!

var btnNavbarToggler = document.getElementsByClassName("navbar-toggler");
btnNavbarToggler[0].setAttribute("aria-controls", "navbar-collapser");

// style

// TODO: I've embedded a style sheet that adjusts color for the body, a class called "main-content", and an ID of "top-header". Target the three of these elements and set your own colors as you'd like to each of the three I've mentioned.
var bodyElement = document.getElementsByTagName("body")[0];
var mainContentElement = document.getElementsByClassName("main-content")[0];
var topHeaderElement = document.getElementById("top-header");

bodyElement.style["background-color"] = "#D6798F";
mainContentElement.style.color = "#574B4E";
mainContentElement.style["background-color"] = "#DDC0C7";
topHeaderElement.style.color = "#DDC0C7";
topHeaderElement.style["background-color"] ="#57313A";

// TODO (BONUS): That default bootstrap font is nice, but we've been adding our own fonts to thing for a couple of weeks now! Add a font-family of some kind that you'd like it to adjust to.

bodyElement.style.fontFamily = "Open Sans";
topHeaderElement.style.fontFamily = "Merriweather";

var h4Elements = locateElements("h4");

for (i = 0; i < h4Elements.length; i++) {
    h4Elements[i].style.fontFamily = "Roboto";
}

