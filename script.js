const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const toggleText = document.getElementById('toggle-text');
const textBox = document.getElementById('text-box');
let choice = '';

//Dark or Light Images 
function imageMode(color) {
    image1.setAttribute('src', `/img/undraw_proud_coder_${color}.svg`);
    image2.setAttribute('src', `/img/undraw_feeling_proud_${color}.svg`);
    image3.setAttribute('src', `/img/undraw_conceptual_idea_${color}.svg`);  
}

//Light or Dark Elements
function toggleDarkLightMode() {
    nav.style.backgroundColor = (choice === 'dark') ?  'rgb(0 0 0 /50%)' : 'rgb(255 255 255 /50%)';
    textBox.style.backgroundColor = (choice === 'dark') ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    // toggleText.textContent
    toggleIcon.children[0].textContent = (choice === 'dark') ? 'Dark Mode' : 'Light Mode';
    (choice === 'dark') ? toggleIcon.children[1].classList.replace('fa-sun','fa-moon') : toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    imageMode(`${choice}`);
 }


//Switch Theme Dynamically
function switchTheme(event) {
    event.target.checked ? choice = 'dark' : choice = 'light';
    document.documentElement.setAttribute('data-theme', `${choice}`);
    localStorage.setItem('theme', `${choice}`);
    ;
    toggleDarkLightMode();
 }

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    console.log(currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        choice = 'dark'
        toggleDarkLightMode();
    }
}