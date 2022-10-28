gsap.from("#m1" , {
    scrollTrigger : {
        scrub: true
    },
    y: -200,
})
gsap.from("#ter" , {
  scrollTrigger : {
      scrub: true
  },
  y: 50,
})
$(document).ready(function(){
    $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active')
      $('body').toggleClass('lock')
    })
  });
function handLeClick(e){
  e.target.scrollTopm += 100 
}
const guides = document.querySelector('#guides')
guides.addEventListener(handLeClick)
window.scrollTo({
  top: 1000,
  behavior: "smooth"
});