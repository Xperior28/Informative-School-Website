const contactBtn = document.querySelector('.ad-contact-btn');
const admissionBtn = document.querySelector('.ad-admission-btn');

contactBtn.addEventListener('click', () => {
    window.location.href = '../html/contact.html';
})

admissionBtn.addEventListener('click', () => {
    window.location.href = '../html/admission-page.html';
})