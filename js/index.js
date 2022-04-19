import Highway from '@dogstudio/highway';
import Fade from './transition';

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});

const indexButton = document.querySelector('.index-link');
const aboutButton = document.querySelector('.about-link');
const projectsButton = document.querySelector('.projects-link');
const contactButton = document.querySelector('.contact-link');
const body = document.querySelector('body');

indexButton.addEventListener('click', () => {
    document.createAttribute('style', 'background: #0D1321;');
    body.style.background = "#0D1321";
});

aboutButton.addEventListener('click', () => {
    document.createAttribute('style', 'background: #C5D86D;');
    body.style.background = "#C5D86D";
});

projectsButton.addEventListener('click', () => {
    document.createAttribute('style', 'background: #86615C;');
    body.style.background = "#86615C";
});

contactButton.addEventListener('click', () => {
    document.createAttribute('style', 'background: #FFEDDF;');
    body.style.background = "#FFEDDF";
});