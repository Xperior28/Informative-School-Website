const brochureBtn = document.querySelector('.ad-brochure-btn');
const aboutBtn = document.querySelector('.about-page');
const exploreBtn = document.querySelector('.explore-btn');
const contactBtn = document.querySelector('.ad-contact-btn');
const admissionBtn = document.querySelector('.ad-admission-btn');
const newsBtn = document.querySelector('.news');

const navadmnBtn = document.querySelector('.admn');
const navcntctBtn = document.querySelector('.cntc');

brochureBtn.addEventListener('click', () => {

    var url = '../assets/files/brochure.pdf';

    var link = document.createElement('a');
    link.download = 'fiama_brochure.pdf';
    link.href = url;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
});

aboutBtn.addEventListener('click', () => {
    window.location.href = './html/about.html';
});

exploreBtn.addEventListener('click', () => {
    window.location.href = './html/about.html';
})

contactBtn.addEventListener('click', () => {
    window.location.href = './html/contact.html';
})

admissionBtn.addEventListener('click', () => {
    window.location.href = './html/admission-page.html';
})

newsBtn.addEventListener('click', () => {
    window.location.href = './html/events.html';
});

navadmnBtn.addEventListener('click', () => {
    window.location.href = './html/admission-page.html';
});

navcntctBtn.addEventListener('click', () => {
    window.location.href = './html/contact.html';
});