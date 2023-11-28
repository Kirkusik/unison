export default function createTruckSlider(Swiper) {
	const truckSliders = [...document.querySelectorAll(".truck-slider")];

	truckSliders.forEach((truckSlider) => {
		truckSliderInit(truckSlider, Swiper);
	});
}

function truckSliderInit(truckSlider, Swiper) {
	if (truckSlider) {
		const swiper = new Swiper(truckSlider, {
			spaceBetween: 40,
			slidesPerView: 2,
			speed: 3000,
			loop: true,
			centeredSlides: true,
			initialSlide: 2,
			slideVisibleClass: "swiper-slide-visible",
			watchSlidesProgress: true,

			autoplay: {
				delay: 0,
				disableOnInteraction: false,
				reverseDirection: truckSlider.classList.contains(
					"truck-slider--to-right"
				)
					? true
					: false,
			},

			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
				// when window width is >= 480px
				992: {
					spaceBetween: 40,
					slidesPerView: 4,
				},
				// when window width is >= 640px
				1200: {
					spaceBetween: 100,
					slidesPerView: 5,
				},
			},
		});
	}
}
