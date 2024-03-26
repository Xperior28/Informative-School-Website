const contactBtn = document.querySelector('.ad-contact-btn');
const admissionBtn = document.querySelector('.ad-admission-btn');
const home = document.querySelector('.school-logo');

contactBtn.addEventListener('click', () => {
    window.location.href = '../html/contact.html';
})

admissionBtn.addEventListener('click', () => {
    window.location.href = '../html/admission-page.html';
})

home.addEventListener('click', () => {
    window.location.href = '../index.html';
});