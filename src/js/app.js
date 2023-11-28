import { isWebp } from "./modules";
import createHeroSlider from "./modules/hero-slider";
import menuToogleHandler from "./modules/menu-toggle";

import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import createTruckSlider from "./modules/truck-slider.js";
import truckTypeToggle from "./modules/truck-type-toggle.js";
import createCaseSlider from "./modules/case-slider.js";
import caseDetailsHandler from "./modules/case-details-toggle.js";

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

import AOS from "aos";
import popUpHandler from "./modules/pop-up-handler.js";
import createPartnersSlider from "./modules/partners-slider.js";
import submenuHandler from "./modules/submenu-handler.js";

// import Inputmask from "inputmask";

// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================
isWebp();
// ====================================================================================================================================================

document.addEventListener("DOMContentLoaded", () => {
	try {
		menuToogleHandler();
		createHeroSlider(Swiper);
		createTruckSlider(Swiper);
		createCaseSlider(Swiper);
		truckTypeToggle();
		caseDetailsHandler();
		createPartnersSlider(Swiper);
		window.addEventListener("resize", () => createPartnersSlider(Swiper));
		popUpHandler();

		submenuHandler();

		window.addEventListener("scroll", () => {
			const header = document.querySelector(".page-header");

			if (
				window.scrollY > 500 &&
				!header.classList.contains("page-header--scrolled")
			) {
				header.classList.add("page-header--scrolled");
			} else if (
				window.scrollY <= 500 &&
				header.classList.contains("page-header--scrolled")
			) {
				header.classList.remove("page-header--scrolled");
			}
		});

		AOS.init({ duration: 600, offset: 30 });
	} catch (e) {
		console.log(e.message);
	}
});
