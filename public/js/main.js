
/*
=======
MAIN JS
=======
*/

console.log('EXPRESS main.js file');

document.addEventListener('DOMContentLoaded', function() {

  /*
  ==========
  SIDEBAR JS
  ==========
  */

  const sidebar = document.querySelector('.sidebar');
  const sidebar_logo = document.querySelector('.sidebar-logo');
  const sidebar_elements = document.querySelectorAll('.sidebar-element');

  sidebar_logo.addEventListener('click', (e) => {
    sidebar.classList.toggle('close');
  });

  sidebar_elements.forEach(elment => {
    elment.addEventListener('click', () => {
      sidebar_elements.forEach((otherItem) => otherItem.classList.remove('active'));
      elment.classList.toggle('active');
    });
  });
});