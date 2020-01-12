import home from './pages/home';
import menu from './pages/menu';
import aboutus from './pages/aboutus';
import contact from './pages/contact';

function clearPage() {
  const currentPageContent = document.querySelector('.main-content');

  if (currentPageContent) {
    currentPageContent.remove();
  }
}

function closeMenu() {
  const menu = document.getElementById('main-nav');
  menu.classList.remove('open');
}

function getPageContent(page) {
  switch (page) {
    default:
    case 'home': {
      return home();
    }
    case 'menu': {
      return menu();
    }
    case 'aboutus': {
      return aboutus();
    }
    case 'contact': {
      return contact();
    }
  }
}

function navigation(page) {
  // Load content wrapper
  const content = document.getElementById('content');

  // Load page HTML
  const newPageContent = getPageContent(page);

  return function changePage() {
    clearPage();
    content.appendChild(newPageContent);
    closeMenu()
;  };
}




export default navigation;
