export default function createHeroSlider(Swiper) {
	const heroSlider = new Swiper(".hero__slider", {
		slidesPerView: 1,
		loop: true,
		speed: 2000,

		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},

		autoplay: {
			delay: 1500,
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		pagination: {
			el: ".swiper-pagination",
			clickable: true,

			renderBullet: function (index, className) {
				return `<span class="${className}">${
					index >= 10 ? index + 1 : "0" + (index + 1)
				} </span>`;
			},
		},
	});
}
