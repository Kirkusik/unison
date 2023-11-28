export default function popUpHandler() {
	const orderBtns = [...document.querySelectorAll(".order-pop-up")];

	orderBtns.forEach((btn) => {
		btn.addEventListener("click", (evt) => {
			const popUpID = evt.target.closest("button").dataset.target;
			const popUp = document.querySelector(`#${popUpID}`);

			popUp.classList.add("pop-up--active");
			document.body.classList.add("page__body--no-scroll");

			popUp.querySelector(".pop-up-close").addEventListener(
				"click",
				() => {
					popUp.classList.remove("pop-up--active");
					document.body.classList.remove("page__body--no-scroll");
				},
				{ once: true }
			);
		});
	});
}
