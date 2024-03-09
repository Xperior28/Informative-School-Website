const brochureBtn = document.querySelector('.ad-brochure-btn');

brochureBtn.addEventListener('click', () => {

    var url = '../assets/files/brochure.pdf';

    var link = document.createElement('a');
    link.download = 'fiama_brochure.pdf';
    link.href = url;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
});