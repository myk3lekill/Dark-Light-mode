//DOM
//Query Selector: The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors
//Query Selector vs Get Element : querySelector is a more powerful tool when selecting elements since it allows for more complex selections; it could easily end up becoming the standard way of performing selections on elements, since it is now supported by all major browsers.
const toggleSwitch = document.querySelector('input[type=checkbox]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Dark Mode Function
function darkMode() {
    //manipulate css style of nav and textbox ids
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    //manipulate toggleIcon childrens element: text content and class
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon')
    //manipulate the images src to change them when dark mode is enabled
    image1.src = 'img/undraw_proud_coder_dark.svg';
    image2.src = 'img/undraw_feeling_proud_dark.svg';
    image3.src = 'img/undraw_conceptual_idea_dark.svg';
}

//Light Mode Function
function lightMode() {
   //manipulate css style of nav and textbox ids
   nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
   textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
   //manipulate toggleIcon childrens element: text content and class
   toggleIcon.children[0].textContent = 'Light Mode';
   toggleIcon.children[1].classList.remove('fa-moon');
   toggleIcon.children[1].classList.add('fa-sun')
   //manipulate the images src to change them when dark mode is enabled
   image1.src = 'img/undraw_proud_coder_light.svg';
   image2.src = 'img/undraw_feeling_proud_light.svg';
   image3.src = 'img/undraw_conceptual_idea_light.svg';
}

//Switch Theme Dynamically
function swithcTheme(event) {
    //If checked value is true set the data theme 'dark' to implement css property
    if (event.target.checked) {
        //Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode()
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        lightMode()
    }
}

//Event Listener
toggleSwitch.addEventListener('change', swithcTheme);
