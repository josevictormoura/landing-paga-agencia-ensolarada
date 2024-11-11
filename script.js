const btn = document.querySelector('[data-menu="button"]');
const menuLinks = document.querySelector('.list-links');
const headerBg = document.querySelector('.header-bg');
const sectionImages = document.querySelector('.grid-images-galery')
const iconArrow = document.querySelector('.icon-arrow')

function showMenuMobile() {
  menuLinks.classList.toggle('active');
  btn.classList.toggle('active');

  if (menuLinks.classList.contains('active')) {
    clickOutside(menuLinks, () => {
      menuLinks.classList.remove('active');
      btn.classList.remove('active');
    });
  }
}

function clickOutside(element, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {
    html.addEventListener('click', handleClickOutside);
    element.setAttribute(outside, '');
  }

  function handleClickOutside(event) {
    console.log(btn.contains(event.target));
    
    if (!element.contains(event.target) && !btn.contains(event.target)) {
      element.removeAttribute(outside);
      html.removeEventListener('click', handleClickOutside);
      callback();
    }
  }
}

function addScrollTo() {
  sectionImages.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

btn.addEventListener('click', showMenuMobile);
iconArrow.addEventListener('click', addScrollTo)