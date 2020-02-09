(function App(global) {
  'use strict';

  const { setTimeout } = global;
  const appHeader = document.querySelector('.app-header');
  const buttonOpenMenu = appHeader.querySelector('.button.is-open-menu');
  const appNavigation = appHeader.querySelector('.app-navigation');
  const appNavigationLinks = appNavigation.querySelectorAll('a[href]');
  const firstNavLink = appNavigationLinks.item(0);
  const buttonCloseMenu = appHeader.querySelector('.button.is-close-menu');
  const ediyaMenu = document.querySelector('.ediya-menu');
  const ediyaMenuItemsArray = [].slice.call(ediyaMenu.querySelectorAll('.ediya-menu__item'));
  const buttonGoToTop = document.querySelector('.button.is-go-to-top');

  const init = () => {
    buttonOpenMenu.addEventListener('click', handleOpenMenu);
    buttonCloseMenu.addEventListener('click', handleCloseMenu);
    firstNavLink.addEventListener('keydown', handleNavShiftTabKeyDown);
    buttonCloseMenu.addEventListener('keydown', handleNavTabKeyDown);
    buttonGoToTop.addEventListener('click', handleGoToTop);
    global.addEventListener('scroll', handleScrollToggleGoToTop);
    ediyaMenuItemsArray.forEach((item) => {
      const buttonShow = item.querySelector('a[role="button"]');
      const buttonHide = item.querySelector('.button.is-close-panel');
      buttonShow.addEventListener('click', handleShowItemDialog);
      buttonHide.addEventListener('click', handleHideItemDialog);
    });
  };

  const handleOpenMenu = (e) => {
    appNavigation.removeAttribute('hidden');
    setTimeout(() => appNavigation.classList.add('is-active'), 100);
  };

  const handleCloseMenu = (e) => {
    appNavigation.classList.remove('is-active');
    setTimeout(() => appNavigation.setAttribute('hidden', true), 400);
  };

  const handleNavShiftTabKeyDown = (e) => {
    if (e.shiftKey && e.code === 'Tab') {
      setTimeout(() => buttonCloseMenu.focus(), 0);
    }
  };

  const handleNavTabKeyDown = (e) => {
    if (!e.shiftKey && e.code === 'Tab') {
      setTimeout(() => firstNavLink.focus(), 0);
    }
  };

  const handleShowItemDialog = (e) => {
    const buttonShow = e.currentTarget;
    const dialog = buttonShow.nextElementSibling;
    buttonShow.setAttribute('aria-pressed', true);
    dialog.removeAttribute('hidden');
    setTimeout(() => dialog.classList.add('is-active'), 0);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleHideItemDialog = (e) => {
    const buttonHide = e.currentTarget;
    const dialog = buttonHide.parentNode;
    const buttonShow = dialog.previousElementSibling;
    buttonShow.setAttribute('aria-pressed', false);
    dialog.classList.remove('is-active');
    setTimeout(() => dialog.setAttribute('hidden', true), 200);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleGoToTop = (e) => {
    document.documentElement.scrollIntoView({ behavior: 'smooth' });
    e.preventDefault();
    e.stopPropagation();
  };

  const handleScrollToggleGoToTop = (e) => {
    let scrollTopPosition = window.scrollY;
    let targetScrollPosition = ediyaMenu.offsetTop;
    (targetScrollPosition < scrollTopPosition) ?
      buttonGoToTop.classList.add('is-show') :
      buttonGoToTop.classList.remove('is-show');
  };

  init();

})(window);
