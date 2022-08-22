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

// Закрытие модалки по крестику


