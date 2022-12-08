document.addEventListener('DOMContentLoaded', function() {

const showSlider = new Swiper('.cards-carousel', {
	loop: true,
	slidesPerView: 3,
	speed: 1800,
	centeredSlides: true,
	navigation: {
		nextEl: '.cards-navigation__next',
		prevEl: '.cards-navigation__prev',

	}
})





document.querySelector('video').playbackRate = 2

})

