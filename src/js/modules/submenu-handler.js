export default function submenuHandler() {
	const mainMenu = document.querySelector(".main-menu");
	const menuWrapper = document.querySelector(".header-menu-wrapper");

	mainMenu.addEventListener(
		"click",
		(evt) => {
			const target = evt.target.closest(".main-menu > li > a");

			if (target && target.closest("li").querySelector(".sub-menu")) {
				evt.preventDefault();

				const menuItem = target.closest("li");
				const submenu = target.closest("li").querySelector(".sub-menu");

				submenu.classList.toggle("sub-menu--active");
				menuItem.classList.toggle("menu-item-has-children--open");

				submenu.addEventListener(
					"click",
					() => {
						const pageNav = document.querySelector(".page-header__nav");
						pageNav.style.display =
							pageNav.style.display === "none" ? "block" : "none";

						setTimeout(() => {
							pageNav.classList.remove("page-header__nav--visible");
						}, 200);

						submenu.classList.remove("sub-menu--active");
						menuItem.classList.remove("menu-item-has-children--open");
						menuWrapper.classList.remove("header-menu-wrapper--active");
						document.body.classList.remove("page__body--no-scroll");
					},
					{ once: true }
				);
			}
		},
		true
	);
}
