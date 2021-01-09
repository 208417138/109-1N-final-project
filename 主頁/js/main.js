const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('bx-x');
      nav.classList.toggle('show');
    });
  }
};

showMenu('header-toggle', 'nav-menu');

function change(index) {
  const p = document.getElementById('content')
  switch (index) {
    case 1:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="https://208417138.github.io/1091-1N-p1-208417138/" allowfullscreen></iframe>';
      break;
    case 2:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="https://208417138.github.io/1091-1N-demo-208417138/w15/dist/index.html" allowfullscreen></iframe>';
      break;
    case 3:
      p.innerHTML =
        '<iframe width="100%" height="100%" src="https://208417138.github.io/1091-1N-demo-208417138/w13/dist/index.html" allowfullscreen></iframe>';
      break;
  }
}
