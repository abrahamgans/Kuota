
  document.querySelector('#ham-toggle-button' + "[data-abell-hUUWaY]").addEventListener('click', () => {
    document.body.classList.toggle('open-nav');
  })

  document.querySelector('#footer-year' + "[data-abell-jLzQID]").innerHTML = new Date().getFullYear();

  if (document.querySelector('.nav-overlay' + "[data-abell-gSHhmV]")) {
    document.querySelector('.nav-overlay' + "[data-abell-gSHhmV]").addEventListener('click', () => {
      document.body.classList.remove('open-nav');
    })
  }

  if (window.matchMedia("(max-width: 768px)")) {
    document.querySelectorAll('nav a.menu-item' + "[data-abell-gSHhmV]").forEach((menuItem) => 
      menuItem.addEventListener('click', () => {
        document.body.classList.remove('open-nav');
      })
    )
  }
