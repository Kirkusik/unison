export default function createPartnersSlider(Swiper) {
	let partnersSlider = null;
	const partnersSliderBlock = document.querySelector(".partners-slider");
	if (window.innerWidth > 768) {
		[...partnersSliderBlock.querySelectorAll(".partners__item")].forEach(
			(el) => {
				el.classList.add("swiper-slide");
			}
		);
		partnersSliderBlock
			.querySelector(".partners")
			.classList.add("swiper-wrapper");

		partnersSlider = new Swiper(partnersSliderBlock, {
			slidesPerView: 4,
			loop: true,
			speed: 2000,

			autoplay: {
				delay: 1000,
			},

			breakpoints: {
				992: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 6,
				},
			},
		});
	} else {
		partnersSlider?.destroy();
		[...partnersSliderBlock.querySelectorAll(".partners__item")].forEach(
			(el) => {
				el.classList.remove("swiper-slide");
				el.style.cssText = "";
			}
		);
		const partnersList = partnersSliderBlock.querySelector(".partners");
		partnersList.classList.remove("swiper-wrapper");
		partnersList.style.cssText = "";
	}
}
