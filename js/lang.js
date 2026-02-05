// Select Language Popup
(function selectLanguagePopup() {
    popup = document.querySelector('.popup--select-language');

    function redirect(language) {
        popup.style.opacity = '0';
        Array.from(document.querySelector('.hero').children).forEach(element => {
            element.style.transition = 'opacity 0.5s ease-in-out';
            element.style.opacity = '0';
    
        });
        setTimeout(() => {
            let current_url = location.href;
            current_url = current_url.endsWith('/') ? current_url.slice(0, -1) : current_url;

            location.assign(current_url + '/' + language);
        },500);
    }

    document.body.style.overflow = 'hidden';
    
    btnGerman = document.querySelector('.popup--select-language .popup__button--german');
    btnEnglish = document.querySelector('.popup--select-language .popup__button--english');
    console.log(popup, btnGerman, btnEnglish);

    btnGerman.addEventListener('click', () => {
        redirect('de')
    });
    btnEnglish.addEventListener('click', () => {
        redirect('en')
    });
})();