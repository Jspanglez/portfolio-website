menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
  menuToggler.classList.toggle('active');
  setTimeout(() => {
    menuToggler.classList.toggle('active');
  }, 200);
});

let color;
if (window.location.pathname === '/index.html') {
  color = 'darkred';
} 

else if (window.location.pathname.includes('/page2.html')) {
  color = '#0649db';
} 

else if (window.location.pathname.includes('/page3.html')) {
  color = 'indigo';
} 

else if (window.location.pathname.includes('/page4.html')) {
  color = 'green';
} 

else {
  color = 'black';
}

document.documentElement.style.setProperty('--myColour', color);
