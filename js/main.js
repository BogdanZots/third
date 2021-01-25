$('.menu-button').on('click', function(e) {
	e.preventDefault();
 $('.hidden-header__menu').toggleClass('visible');
});
const  buyTicketsBtn = document.getElementById('buy-tickets');
const  ticketImg = document.getElementById('ticket-img')
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	buyTicketsBtn.style.backgroundColor = "#FFB800";
	ticketImg.style.backgroundImage = "url('img/arrowR-btn.png')";
	ticketImg.style.minWidth = "12px";
  }