var slideIndex = 1;
showslide(slideIndex);

function plusslide(n) {
  showslide((slideIndex += n));
}

function showslide(n) {
  var i;
  var x = document.getElementsByClassName('myslides');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}
var navlinks = document.querySelector('.links');
var icon = document.querySelector('.hamburger');
var links = document.querySelectorAll('.links li');
var sidebutton = document.getElementsByClassName('.sidebutton');

icon.addEventListener('click', () => {
  navlinks.classList.toggle('open');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});

var card = document.querySelectorAll('.card');
var overlay = document.querySelectorAll('.overlay');
var title = document.querySelectorAll('.title');
var cardimage = document.querySelectorAll('.cardimage');

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('mouseover', () => {
    card[i].style.transition = '1s linear 0.2s';
    card[i].classList.add('cardhover');
    title[i].style.display = 'none';
    overlay[i].style.display = 'block';
    cardimage[i].style.transition = '0.3s linear';
    cardimage[i].classList.add('roundicon');
    card[i].style.background =
      'black';
  });
  card[i].addEventListener('mouseout', () => {
    card[i].style.transition = '0.3s linear';
    card[i].classList.remove('cardhover');
    overlay[i].style.display = 'none';
    title[i].style.display = 'block';
    cardimage[i].style.transition = '0.3s linear';
    cardimage[i].classList.remove('roundicon');
    card[i].style.background = 'white';
  });
}
var body = document.querySelector('body');
var coursecontainer = document.querySelector('.course-container');
// body.addEventListener('scroll',() =>{
//      coursecontainer.style.display='block';
// })
