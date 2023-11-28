export default function menuToogleHandler() {
	const menuToggleBtn = document.querySelector(".main-nav-toggle");
	const menuWrapper = document.querySelector(".header-menu-wrapper");
	const pageNav = document.querySelector(".page-header__nav");

	document.addEventListener("click", (evt) => {
		if (
			!evt.target.closest(".page-header__nav") &&
			pageNav.classList.contains("page-header__nav--visible") &&
			evt.target !== menuToggleBtn
		) {
			pageNav.classList.remove("page-header__nav--block");
			setTimeout(() => {
				pageNav.classList.remove("page-header__nav--visible");
			}, 200);
		}
	});

	menuToggleBtn.addEventListener("click", () => {
		if (window.innerWidth >= 1080) {
			pageNav.classList.toggle("page-header__nav--block");

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

			document.body.classList.toggle("page__body--no-scroll");
		}

		pageNav.addEventListener(
			"click",
			(evt) => {
				const target = evt.target.closest(".main-menu > li > a");

				if (target && !target.closest("li").querySelector(".sub-menu")) {
					document.body.classList.remove("page__body--no-scroll");
					menuWrapper.classList.remove("header-menu-wrapper--active");

					pageNav.classList.toggle("page-header__nav--block");

					setTimeout(() => {
						pageNav.classList.remove("page-header__nav--visible");
					}, 200);

					if (window.innerWidth < 992) {
						document.body.classList.toggle("page__body--no-scroll");
					}
				}
			},
			{ once: true }
		);
	});
}
