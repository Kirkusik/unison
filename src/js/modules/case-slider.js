export default function createCaseSlider(Swiper) {
	const caseSlider = new Swiper(".cases__slider", {
		slidesPerView: 1,
		loop: true,
		speed: 1000,

		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},

		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}
