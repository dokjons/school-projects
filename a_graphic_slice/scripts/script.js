//Crew design / normal slider
var section = $('#section');
var designerImg = $('#designer-img');
var coderImg = $('#coder-img');
var sectionWidth = section.width();

section.mousemove(function(e) {
  var mousePosition = e.pageX - section.offset().left;
  var halfWidth = sectionWidth / 2;
  var diff = mousePosition - halfWidth;
  
  designerImg.css('width', halfWidth + diff);
  coderImg.css('width', halfWidth - diff);
});

section.mouseleave(function(e) {
  designerImg.css('width', '50%');
  coderImg.css('width', '50%');
});


if ($(window).width() > 769) {
//Display header when 700px down, and add padding to first section to fix jump
  var header = $('header');
  var scrollPositionToShowHeader = 500;

  $(window).on('scroll', function() {
    if ($(window).scrollTop() >= scrollPositionToShowHeader) {
      header.addClass('visible');
    } else {
      header.removeClass('visible');
    }
  });
}

//Mobile nav menu
var menubtn = document.getElementsByClassName('nav-item-btn')[0];
var menulist = document.getElementsByClassName('nav-list')[0];

menubtn.addEventListener('click', () => {
  menulist.classList.toggle('mobile-navmenu');
});


// Get the left and right buttons
var leftButton = document.querySelector('.split-btn-con a:first-child');
var rightButton = document.querySelector('.split-btn-con a:last-child');

// Add mouseover and mouseout event listeners to the left button
leftButton.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#8080804a';
  rightButton.style.backgroundColor = 'transparent';
});

leftButton.addEventListener('mouseout', function() {
  this.style.backgroundColor = 'transparent';
  rightButton.style.backgroundColor = 'transparent';
});

// Add mouseover and mouseout event listeners to the right button
rightButton.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#8080804a';
  leftButton.style.backgroundColor = 'transparent';
});

rightButton.addEventListener('mouseout', function() {
  this.style.backgroundColor = 'transparent';
  leftButton.style.backgroundColor = 'transparent';
});