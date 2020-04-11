(function App(globalThis) {
  'use strict';

  const { setTimeout } = globalThis;
  const appHeader = document.querySelector('.appHeader');
  const buttonOpenMenu = appHeader.querySelector('.button__open');
  const appNavigation = appHeader.querySelector('.appNavigation');
  const appNavigationLinks = appNavigation.querySelectorAll('a[href]');
  const firstNavLink = appNavigationLinks.item(0);
  const buttonCloseMenu = appHeader.querySelector('.button__close');
  const beverageList = document.querySelector('.beverageList');
  const beverageListItemsArray = [].slice.call(
    beverageList.querySelectorAll('.beverageList__item')
  );
  const buttonGoToTop = document.querySelector('.goToTop');

  const init = () => {
    buttonOpenMenu.addEventListener('click', handleOpenMenu);
    buttonCloseMenu.addEventListener('click', handleCloseMenu);
    firstNavLink.addEventListener('keydown', handleNavShiftTabKeyDown);
    buttonCloseMenu.addEventListener('keydown', handleNavTabKeyDown);
    buttonGoToTop.addEventListener('click', handleGoToTop);
    globalThis.addEventListener('scroll', handleScrollToggleGoToTop);
    beverageListItemsArray.forEach((item) => {
      const buttonShow = item.querySelector('.beverageList__button');
      const buttonHide = item.querySelector('.button__close');
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
    setTimeout(() => dialog.classList.add('is-active'), 100);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleHideItemDialog = (e) => {
    const buttonHide = e.currentTarget;
    const dialog = buttonHide.parentNode;
    const buttonShow = dialog.previousElementSibling;
    buttonShow.setAttribute('aria-pressed', false);
    dialog.classList.remove('is-active');
    setTimeout(() => dialog.setAttribute('hidden', true), 400);
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
    let targetScrollPosition = beverageList.offsetTop;
    targetScrollPosition < scrollTopPosition
      ? buttonGoToTop.classList.add('is-show')
      : buttonGoToTop.classList.remove('is-show');
  };

  init();
})(window);
