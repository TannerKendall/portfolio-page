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
    // document.style.background = "#C5D86D";
    document.createAttribute('style', 'background: #C5D86D;');
    body.style.background = "#C5D86D";
});

projectsButton.addEventListener('click', () => {
    document.createAttribute('style', 'background: #86615C;');
    body.style.background = "#86615C";
});