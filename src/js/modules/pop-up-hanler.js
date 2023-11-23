export default function popUpHandler() {
	document.addEventListener("click", (evt) => {
		const target = evt.target;

		if (target.closest(".order-pop-up")) {
			const popUpForm = document.querySelector(".pop-up-form");

			popUpForm.classList.add("pop-up-form--active");
			document.body.classList.add("page__body--no-scroll");

			popUpForm.querySelector(".pop-up-close").addEventListener(
				"click",
				() => {
					popUpForm.classList.remove("pop-up-form--active");
					document.body.classList.remove("page__body--no-scroll");
				},
				{ once: true }
			);
		}
	});
}
