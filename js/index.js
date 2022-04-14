import Highway from '@dogstudio/highway';
import Fade from './transition';

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});

const linkedIn = document.querySelector('.fa-linkedin');
const github = document.querySelector('.fa-github');
const skillsButton = document.querySelector('.about-link');
const indexButton = document.querySelector('.index-link');
const projectsButton = document.querySelector('.projects-link');
const contactButton = document.querySelector('.contact-link');

skillsButton.addEventListener('click', () => {
    linkedIn.classList.add('d-none');
    github.classList.add('d-none');
});

indexButton.addEventListener('click', () => {
    linkedIn.setAttribute('style', 'color: #C5D86D !important');
    github.setAttribute('style', 'color: #C5D86D !important');
    linkedIn.classList.remove('d-none');
    github.classList.remove('d-none');
});

projectsButton.addEventListener('click', () => {
    linkedIn.setAttribute('style', 'color: #FFEDDF !important');
    github.setAttribute('style', 'color: #FFEDDF !important');
    linkedIn.classList.add('d-none');
    github.classList.add('d-none');
});

contactButton.addEventListener('click', () => {
    linkedIn.setAttribute('style', 'color: #86615C !important');
    github.setAttribute('style', 'color: #86615C !important');
    linkedIn.classList.remove('d-none');
    github.classList.remove('d-none');
});

// let daysNumSpan = document.querySelector('.num-days');

// let oneDay = 1000 * 60 * 60 * 24;
// let deployDate = new Date("4/10/2022");

// const getDaysBetween = ((deployDate) => {
    
//     let currentDate = new Date();
//     let oneDay = 1000 * 60 * 60 * 24;
//     let diffInTime = currentDate.getTime() - deployDate.getTime();
//     return Math.ceil(diffInTime / oneDay);

// });

// console.log(getDaysBetween(deployDate));

// let fillInDaysCounter = () => {
//     daysNumSpan.innerText = getDaysBetween(deployDate);
// }

// fillInDaysCounter();
