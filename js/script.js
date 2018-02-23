const navBrand = document.querySelector('.navbar-brand');
navBrand.addEventListener('mouseenter', addPulse);
navBrand.addEventListener('animationend', removePulse);

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => navLink.addEventListener('mouseenter', addPulse));
navLinks.forEach(navLink => navLink.addEventListener('animationend', removePulse));

function addPulse(e){
  this.classList.add('animated','pulse');
};

function removePulse(e){
  this.classList.remove('animated','pulse');
};


var feed = new Instafeed({
  get: 'user',
  userId: '840572034',
  sortBy: 'most-liked',
  accessToken: '840572034.1677ed0.06f83653c0a2486683a1c1e33a8d27de',
  template: '<div class="col-1.5"><img class="w-100" src="{{image}}"><hr><p><i class="fas fa-heart"></i>{{likes}}</p></div>'
});
feed.run();
