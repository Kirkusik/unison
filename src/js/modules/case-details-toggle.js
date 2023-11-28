export default function caseDetailsHandler() {
	const caseMorebtns = [...document.querySelectorAll(".case__more")];

	caseMorebtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const caseDetailsID = btn.dataset.details;
			const caseDetailsBlock = document.querySelector(`#${caseDetailsID}`);

			caseDetailsBlock.classList.add("case__details--visible");
			document.body.classList.toggle("page__body--no-scroll");

			btn
				.closest(".swiper")
				.querySelector(".swiper-button-prev").style.display = "none";
			btn
				.closest(".swiper")
				.querySelector(".swiper-button-next").style.display = "none";
			btn.closest(".swiper").querySelector(".swiper-pagination").style.display =
				"none";

			caseDetailsBlock.querySelector(".cases__more-close").addEventListener(
				"click",
				() => {
					caseDetailsBlock.classList.remove("case__details--visible");

					btn
						.closest(".swiper")
						.querySelector(".swiper-button-prev").style.display = "block";
					btn
						.closest(".swiper")
						.querySelector(".swiper-button-next").style.display = "block";
					btn
						.closest(".swiper")
						.querySelector(".swiper-pagination").style.display = "block";
					document.body.classList.toggle("page__body--no-scroll");
				},
				{ once: true }
			);
		});
	});
}
