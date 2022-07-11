const siteNavigationMenu = document.querySelector('.page-header__site-navigation');
const siteNavigationToggle = document.querySelector('.page-header__toggle');

siteNavigationMenu.classList.add('page-header__site-navigation--closed');
siteNavigationMenu.classList.remove('page-header__site-navigation--nojs');
siteNavigationToggle.classList.remove('page-header__toggle--nojs');

siteNavigationToggle.addEventListener('click', function() {
  if (siteNavigationMenu.classList.contains('page-header__site-navigation--closed')) {
    siteNavigationMenu.classList.remove('page-header__site-navigation--closed');
    siteNavigationToggle.classList.remove('page-header__toggle--closed');
    siteNavigationMenu.classList.add('page-header__site-navigation--opened');
    siteNavigationToggle.classList.add('page-header__toggle--opened');
  } else {
    siteNavigationMenu.classList.add('page-header__site-navigation--closed');
    siteNavigationMenu.classList.remove('page-header__site-navigation--opened');
    siteNavigationToggle.classList.add('page-header__toggle--closed');
    siteNavigationToggle.classList.remove('page-header__toggle--opened');
  }
});
