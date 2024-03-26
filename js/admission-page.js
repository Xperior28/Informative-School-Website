const applyBtn = document.querySelector('.apply-btn');
const home = document.querySelector('.school-logo');

applyBtn.addEventListener('click', () => {
    window.location.href = '../html/admission-form.html';
});

home.addEventListener('click', () => {
    window.location.href = '/';
});