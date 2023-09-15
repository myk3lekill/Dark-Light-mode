//Query Selector: The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors
//Query Selector vs Get Element : querySelector is a more powerful tool when selecting elements since it allows for more complex selections; it could easily end up becoming the standard way of performing selections on elements, since it is now supported by all major browsers.
const toggleSwitch = document.querySelector('input[type=checkbox]');

//Switch Theme Dynamically
function swithcTheme(event) {
    //If checked value is true set the data theme 'dark' to implement css property
    if (event.target.checked) {
        //Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
}

//Event Listener
toggleSwitch.addEventListener('change', swithcTheme);
