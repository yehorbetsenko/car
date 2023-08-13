if (window.innerWidth >= 1100) {
    document.addEventListener('mouseover', documentActions);
    document.addEventListener('mouseover', vehiclesMenu);
} else {
    document.addEventListener('click', documentActionsMobile);
    document.addEventListener('click', vehiclesMenuMobile);
}



function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-main]')) {
        const subMenuId = targetElement.dataset.main ? targetElement.dataset.main : null;
        const subMenu = document.querySelector(`[data-menu="${subMenuId}"]`);
        if (subMenu) {
            const block = document.querySelector('._block');
            const texts = document.querySelectorAll('.nav__item-special p');
            if (block && block !== targetElement) {
                block.classList.remove('_block');
                texts.forEach(text => {
                    text.classList.remove('_rotate');
                })
                targetElement.classList.remove('_rotate');
            }
            subMenu.classList.add('_block');
            targetElement.classList.add('_rotate');
            searchInput.classList.remove('_show');
            subMenu.addEventListener('mouseleave', () => {
                subMenu.classList.remove('_block');
                targetElement.classList.remove('_rotate');
            })
            if (block) {
                window.addEventListener('scroll', () => {
                    block.classList.remove('_block');
                    targetElement.classList.remove('_rotate');
                    texts.forEach(text => {
                        text.classList.remove('_rotate');
                    })    
                })
            }
        } else {
            console.log('submenu does not exist');
        }
        e.preventDefault();
    }
}

function vehiclesMenu(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-submenu]')) {
        const subMenuId = targetElement.dataset.submenu ? targetElement.dataset.submenu : null;
        const subMenu = document.querySelector(`[data-content="${subMenuId}"]`);
        if (subMenu) {
            const block = document.querySelector('._submenu');
            if (block && block !== targetElement) {
                block.classList.remove('_submenu');
            }
            subMenu.classList.toggle('_submenu');
        } else {
            console.log('submenu does not exist');
        }
        e.preventDefault();
    }
}

function documentActionsMobile(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-main]')) {
        const subMenuId = targetElement.dataset.main ? targetElement.dataset.main : null;
        const subMenu = document.querySelector(`[data-menu="${subMenuId}"]`);
        if (subMenu) {
            subMenu.classList.toggle('_move');
            targetElement.classList.toggle('_rotate');
        } else {
            console.log('submenu does not exist');
        }
        e.preventDefault();
    }
}

function vehiclesMenuMobile(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-submenu]')) {
        const subMenuId = targetElement.dataset.submenu ? targetElement.dataset.submenu : null;
        const subMenu = document.querySelector(`[data-content="${subMenuId}"]`);
        if (subMenu) {
            const move = document.querySelector('._menu');
            const texts = document.querySelectorAll('.nav__vehicles-type');
            if (move && move !== targetElement) {
                move.classList.remove('_menu');
                texts.forEach(text => {
                    text.classList.remove('_rotate');
                })
                targetElement.classList.remove('_rotate');
            }
            if (move && move !== targetElement) {
                move.classList.remove('_menu');
            }
            subMenu.classList.toggle('_menu');
            targetElement.classList.toggle('_rotate');
        } else {
            console.log('submenu does not exist');
        }
        e.preventDefault();
    }
}

const searchInput = document.querySelector('.header__search-input');
const searchBtn = document.querySelector('.header__search-icon');

searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('_show');
    burger.classList.remove('_active');
    nav.classList.remove('_active');
    header.classList.remove('_active');
    header.classList.remove('_overflow');
})

window.addEventListener('scroll', () => {
    searchInput.classList.remove('_show');
})

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    nav.classList.toggle('_active');
    header.classList.toggle('_active');
    header.classList.toggle('_overflow');
    searchInput.classList.remove('_show');
})

// =========================================================

const swiper = new Swiper('.swiper', {
    loop: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 7000,
        pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

// ======================================================

const aboutBtn = document.querySelector('.about__btn');
const aboutMore = document.querySelector('.about__more');

aboutBtn.addEventListener('click', () => {
    aboutBtn.classList.toggle('_active');
    aboutMore.classList.toggle('_active');
})

// =================================================

document.addEventListener('click', chooseAction);

function chooseAction(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-choose]')) {
        const chooseElId = targetElement.dataset.choose ? targetElement.dataset.choose : null;
        const chooseEl = document.querySelector(`[data-chosen="${chooseElId}"]`);
        if (chooseEl) {
            const chosens = document.querySelectorAll('._chosen');
            chosens.forEach(chosen => {
                if (chosen && chosen !== targetElement) {
                    chosen.classList.remove('_chosen');
                    targetElement.classList.remove('_chosen');
                }
            })
            targetElement.classList.add('_chosen');
            chooseEl.classList.add('_chosen');
        } else {
            console.log('item does not exist');
        }
        e.preventDefault();
    }

}

// =====================================================

