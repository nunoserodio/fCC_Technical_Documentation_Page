hljs.highlightAll();

const hamburger = document.querySelector('#hamburger');
const body = document.querySelector('body');
const header = document.querySelector('.page-header');
const dropObjs = document.querySelectorAll('.drop');
const fadeObjs = document.querySelectorAll('.fade');
const menuBtn = document.querySelectorAll('.nav-link');

function toggleHeader() {
    if(header.classList.contains('open')){ // CLOSE HAMBURGER MENU
      body.classList.remove('no-scroll');
      header.classList.remove('open');

      dropObjs.forEach(function(element){
        element.classList.remove('drop-down');
        element.classList.add('close-drop-down');
      });

      fadeObjs.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
      });

    }
    else { // OPEN HAMBURGER MENU
      header.classList.add('open');

      dropObjs.forEach(function(element){
        element.classList.remove('close-drop-down');
        element.classList.add('drop-down');
      });

      fadeObjs.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
      });

    }
}

hamburger.addEventListener('click', function(){
  console.log('click hamburger');

  toggleHeader()
});

menuBtn.forEach(button => {
  button.addEventListener('click', function(){
    console.log('click menuBtn');

    toggleHeader()
  })
});