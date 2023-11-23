export default function caseDetailsHandler() {
	const caseMorebtns = [...document.querySelectorAll(".case__more")];

	caseMorebtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const caseDetailsBlock = btn
				.closest(".cases__item")
				.querySelector(".case__details");

			caseDetailsBlock.classList.add("case__details--visible");

			caseDetailsBlock
				.closest(".swiper")
				.querySelector(".swiper-button-prev").style.display = "none";
			caseDetailsBlock
				.closest(".swiper")
				.querySelector(".swiper-button-next").style.display = "none";
			caseDetailsBlock
				.closest(".swiper")
				.querySelector(".swiper-pagination").style.display = "none";

			caseDetailsBlock.querySelector(".cases__more-close").addEventListener(
				"click",
				() => {
					caseDetailsBlock.classList.remove("case__details--visible");

					caseDetailsBlock
						.closest(".swiper")
						.querySelector(".swiper-button-prev").style.display = "block";
					caseDetailsBlock
						.closest(".swiper")
						.querySelector(".swiper-button-next").style.display = "block";
					caseDetailsBlock
						.closest(".swiper")
						.querySelector(".swiper-pagination").style.display = "block";
				},
				{ once: true }
			);
		});
	});
}
