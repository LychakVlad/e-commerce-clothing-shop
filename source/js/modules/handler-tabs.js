


const initTabs = () => {
  if (!document.querySelectorAll('[data-tab="link"]')) {
    return;
  }

  const tabContent = document.querySelectorAll('[data-tab="content"]');
  const tabItem = document.querySelectorAll('[data-tab="link"]');

  tabItem.forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      const id = e.target.getAttribute('href').replace('#', '');

      tabItem.forEach((child) => {
        child.classList.remove('is-active');
      });

      tabContent.forEach((child) => {
        child.classList.remove('is-active');
      });


      item.classList.add('is-active');
      document.getElementById(id).classList.add('is-active');
    })
  })

}


export { initTabs }
