window.onload = function () {
  //Header toggle
  document.querySelectorAll('.menu-toggle').forEach(el => el.addEventListener('click', function(){
    document.querySelector('.header').classList.toggle('active');
    document.querySelector('.header__bg').classList.toggle('active');
    document.querySelector('body').classList.toggle('overflow-hidden');
  }));
}



window.onscroll = function(e) {



}