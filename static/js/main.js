document.addEventListener('DOMContentLoaded', function () {

    // svg
    const svg = document.querySelector('.animate-line');
    const line = svg.querySelector('line');

    const width = document.documentElement.clientWidth;

    // todo switch case
    if (width < 450) {
        svg.setAttribute('viewBox', '0 0 320 230');
        svg.setAttribute('height', '230px');
        svg.setAttribute('width', '320px');

        line.setAttribute('x1', -40);
        line.setAttribute('y1', 500);
        line.setAttribute('y2', 500);
    } else if (width < 660) {
        svg.setAttribute('viewBox', '0 0 480 230');
        svg.setAttribute('height', '230px');
        svg.setAttribute('width', '480px');

        line.setAttribute('x1', -10);
        line.setAttribute('y1', 580);
        line.setAttribute('y2', 580);
    } else if (width < 768) {
        svg.setAttribute('viewBox', '0 0 480 230');
        svg.setAttribute('height', '230px');
        svg.setAttribute('width', '480px');

        line.setAttribute('x1', -45);
        line.setAttribute('y1', 500);
        line.setAttribute('y2', 500);
    } else if (width < 1025) {
        svg.setAttribute('viewBox', '0 0 765 300');
        svg.setAttribute('height', '300px');

        line.setAttribute('x1', -45);
        line.setAttribute('y1', 500);
        line.setAttribute('y2', 500);
    } else if (width < 1141) {
        svg.setAttribute('viewBox', '0 0 765 440');
        svg.setAttribute('height', '440px');
    } else if (width < 1261) {
        svg.setAttribute('viewBox', '0 0 765 480');
        svg.setAttribute('height', '480px');
    }

    // open close modal
    const btnBuy = document.querySelector('.js-modal'),
        modal = document.querySelector('.modal'),
        modalClose = modal.querySelector('.js-modal-close'),
        wrapper = document.querySelector('.wrapper'),
        modalWrap = modal.querySelector('.modal__wrap');


    btnBuy.addEventListener('click', function () {
        const heightModal = modalWrap.scrollHeight;
        console.log(modalWrap);
        wrapper.style.minHeight = heightModal + 50 + 'px';
        modal.classList.add('modal--open');
    });

    modalClose.addEventListener('click', function () {
        wrapper.style.minHeight = 0;
        modal.classList.remove('modal--open');
    });

    // subscribe form
    const subscribeForm = document.querySelector('.subscribe__form'),
        subscribeFormInput = subscribeForm.querySelector('.subscribe__input'),
        subscribeFormSubmit = subscribeForm.querySelector('.subscribe__submit'),
        subscribeBlock = document.querySelector('.subscribe__block'),
        subscribeSuccess = document.querySelector('.subscribe__success');

    subscribeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // todo check pattern email
        if (subscribeFormInput.value) {
            subscribeBlock.classList.add('d-none');
            subscribeSuccess.classList.add('active');

            subscribeFormInput.value = '';

            // todo send data
            // ...

            // close modal
            setTimeout(() => {
                modal.classList.remove('modal--open');
                subscribeBlock.classList.remove('d-none');
                subscribeSuccess.classList.remove('active');
            }, 2000);
        }
    });


    // reject form
    const rejectForm = document.querySelector('.reject__form'),
        thanks = document.querySelector('.reject__thanks');

    rejectForm.addEventListener('click', function (e) {
        e.preventDefault();

        if (e.target.classList.contains('reject__label')) {

            // input value
            const inputId = e.target.getAttribute('for'),
                inputVal = this.querySelector('#' + inputId).value;

            // send data
            // ...

            // show thanks
            thanks.classList.add('active');

            setTimeout(() => {
                modal.classList.remove('modal--open');
                thanks.classList.remove('active');
            }, 2000);
        }
    });

});