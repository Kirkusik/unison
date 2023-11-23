import transportTypeTabsHandler from "./transport-type-tabs.js";

export default function truckTypeToggle() {
	const truckTypeToggleBtns = [
		...document.querySelectorAll(".service__more-btn"),
	];

	truckTypeToggleBtns.forEach((btn) => {
		const truckTypeBlock = btn
			.closest(".service")
			.querySelector(".service__transport-type");

		btn.addEventListener("click", (evt) => {
			truckTypeBlock.classList.add("service__transport-type--visible");
			if (window.innerWidth < 992) {
				document.body.classList.add("page__body--no-scroll");
			}

			[...document.querySelectorAll(".truck-slider")].forEach((slider) => {
				slider.style.zIndex = "-1";
			});

			const transportTypeTabs = truckTypeBlock.querySelector(
				".transport-type__tabs"
			);

			if (transportTypeTabs) {
				transportTypeTabsHandler(truckTypeBlock, transportTypeTabs);
			}

			truckTypeBlock
				.querySelector(".transport-type__order")
				.addEventListener("click", () => {
					truckTypeBlock.classList.remove("service__transport-type--visible");
					[...document.querySelectorAll(".truck-slider")].forEach((slider) => {
						slider.style.zIndex = "0";
					});
				});

			truckTypeBlock.querySelector(".close-transport-type").addEventListener(
				"click",
				(evt) => {
					truckTypeBlock.classList.remove("service__transport-type--visible");
					[...document.querySelectorAll(".truck-slider")].forEach((slider) => {
						slider.style.zIndex = "0";
					});
					document.body.classList.remove("page__body--no-scroll");
				},
				{ once: true }
			);
		});
	});
}
