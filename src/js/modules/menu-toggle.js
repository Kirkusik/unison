export default function menuToogleHandler() {
	const menuToggleBtn = document.querySelector(".main-nav-toggle");
	const menuWrapper = document.querySelector(".header-menu-wrapper");
	const pageNav = document.querySelector(".page-header__nav");

	menuToggleBtn.addEventListener("click", () => {
		if (window.innerWidth >= 992) {
			pageNav.style.display =
				pageNav.style.display === "none" ? "block" : "none";

			setTimeout(() => {
				pageNav.classList.toggle("page-header__nav--visible");
			}, 200);
		} else {
			menuWrapper.classList.toggle("header-menu-wrapper--active");

			if (menuWrapper.classList.contains("header-menu-wrapper--active")) {
				setTimeout(() => {
					menuWrapper.style.zIndex = "13";
				}, 1000);
			} else {
				menuWrapper.style.zIndex = "-2";
			}
		}

		pageNav.addEventListener(
			"click",
			(evt) => {
				const target = evt.target.closest(".main-menu > li > a");

				if (target && !target.closest("li").querySelector(".sub-menu")) {
					document.body.classList.remove("page__body--no-scroll");
					menuWrapper.classList.remove("header-menu-wrapper--active");

					pageNav.style.display =
						pageNav.style.display === "none" ? "block" : "none";

					setTimeout(() => {
						pageNav.classList.remove("page-header__nav--visible");
					}, 200);
				}
			},
			{ once: true }
		);
		document.body.classList.toggle("page__body--no-scroll");
	});
}
