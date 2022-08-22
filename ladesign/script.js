// Клик на меню-гамбургер при клике

const hamburger = document.querySelector('.hamburger'),
    mobileMenu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    mobileMenu.classList.toggle('nav_active');
})

// Клик по блокам с плюсами с выплывающим описанием

const advantagesItem = document.querySelectorAll('.advantages__inner'),
    advantagesBlock = document.querySelectorAll('.advantages__descr');

advantagesItem.forEach((item) => {
    item.addEventListener('click', function () {
        this.lastElementChild.classList.toggle('d-block');
        this.childNodes[1].childNodes[3].src = `
            ${this.lastElementChild.classList.contains('d-block') 
                ? 'icons/arrow_up.png' 
                : 'icons/arrow_down.png'
            }`; 
    })
})

// Открытие модалки при нажатии на "оставить заявку на проект"

const application = document.querySelector('.portfolio__application'),
      contactsModal = document.querySelector('.contacts__modal'),
      overlay = document.querySelector('.overlay');

application.addEventListener('click', (e) => {
    e.preventDefault();
    contactsModal.style.display = 'block';
    contactsModal.parentNode.style.display = 'block';
});


const contactsButton = document.querySelector('.contacts__btn'),
      thanksModal = document.querySelector('.thanks__modal');

contactsButton.addEventListener('click', (e) => {
    e.preventDefault();
    contactsButton.parentNode.parentNode.style.display = 'none';
    contactsButton.parentNode.parentNode.parentNode.style.display = 'none';
    thanksModal.style.display = 'block';
    thanksModal.parentNode.style.display = 'block';

})

// Закрытие модалки по крестику

const closeModal = document.querySelectorAll('.modal__close');

closeModal.forEach((item) => {
    item.addEventListener('click', () => {
        item.parentNode.style.display = 'none';
        item.parentNode.parentNode.style.display = 'none';
    })
})

// Табы портфолио

const tabItem = document.querySelectorAll('.portfolio__item-link'),
      tabBlock = document.querySelectorAll('.portfolio__wrapper');