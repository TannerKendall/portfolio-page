import Highway from '@dogstudio/highway';
import Fade from './transition';

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});

const html = console.log(document.querySelector('html'));
const aboutButton = document.querySelector('.about-link');
const projectsButton = document.querySelector('.projects-link');
const body = document.querySelector('body');

aboutButton.addEventListener('click', () => {
    html.style.background = "#C5D86D";
    body.style.background = "#C5D86D";
});

projectsButton.addEventListener('click', () => {
    html.style.background = "#86615C";
    body.style.background = "#86615C";
});