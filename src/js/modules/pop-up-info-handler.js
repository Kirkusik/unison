export default function popUpInfoHandler() {
	const btn = document.querySelector(".show-pop-up-info");
	const popUpInfo = document.querySelector(".pop-up-info");

	btn.addEventListener("click", () => {
		popUpInfo.classList.add("pop-up-info--active");
		document.body.classList.add("page__body--no-scroll");

		popUpInfo.querySelector(".pop-up-info-close").addEventListener(
			"click",
			() => {
				popUpInfo.classList.remove("pop-up-info--active");
				document.body.classList.remove("page__body--no-scroll");
			},
			{ once: true }
		);
	});
}
