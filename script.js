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

//Image Mode: dark or light
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

//Clean Code using thernary operator condition ? :
function toggleDarkLightMode(isDark) {
    //manipulate css style of nav and textbox ids
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)'; 
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    //manipulate toggleIcon childrens element: text content and class
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    //manipulate the images src to change them when dark mode is enabled
    isDark ? imageMode('dark') : imageMode('light')    
}

//Switch Theme Dynamically
function switchTheme(event) {
    //If checked value is true set the data theme 'dark' to implement css property
    if (event.target.checked) {
        //Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
        document.documentElement.setAttribute('data-theme', 'dark');
        //Local Storage theme set
        localStorage.setItem('theme', 'dark')
        toggleDarkLightMode(true)
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        //Local Storage theme set
        localStorage.setItem('theme', 'light')
        toggleDarkLightMode(false)
    }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);//this will work when refresh page but first time is null
//implement theme based on local storage data saved (if local storage exist)
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    //check for dark theme local storage
    if (currentTheme === 'dark') {
        //change toggleSwithc checked boolean
        toggleSwitch.checked = true;
        imageMode('dark') //enable dark mode
    }
}
