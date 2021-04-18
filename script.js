const toggleSwitch = document.querySelector('input[type="checkbox"]');

const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const toggleText = document.getElementById('toggle-text');
const textBox = document.getElementById('text-box');

//Dar Mode Styles

const darkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    nav.style.backgroundColor = 'rgb(0 0 0 /50%';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    // toggleText.textContent = 'Dark Mode';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.setAttribute('src', '/img/undraw_proud_coder_dark.svg');
    image2.setAttribute('src', '/img/undraw_feeling_proud_dark.svg');
    image3.setAttribute('src', '/img/undraw_conceptual_idea_dark.svg');

}

const lightMode = () => {
    document.documentElement.setAttribute('data-theme', 'light');;
    nav.style.backgroundColor = 'rgb(255 255 255 /50%';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    // toggleText.textContent = 'Light Mode';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.setAttribute('src', '/img/undraw_proud_coder_light.svg');
    image2.setAttribute('src', '/img/undraw_feeling_proud_light.svg');
    image3.setAttribute('src', '/img/undraw_conceptual_idea_light.svg');
}

//Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        darkMode();
    } else {
        
        lightMode();   
    }
 
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);