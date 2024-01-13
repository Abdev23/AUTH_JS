
/*
======
APP JS
======
*/

console.log('EXPRESS app.js file');

document.addEventListener('DOMContentLoaded', function() {

  /*
  =========
  NAVBAR JS
  =========
  */
  
  const hamburger_btn = document.querySelector('.ham-menu');
  const menu = document.querySelector('.menu');
  
  hamburger_btn.addEventListener('click', (e) => {
    hamburger_btn.classList.toggle('active');
    menu.classList.toggle('hide');
  });

  
  
  /*
  =========
  FOOTER JS
  =========
  */
});