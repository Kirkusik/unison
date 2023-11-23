export default function transportTypeTabsHandler(service, transportTypeTabs) {
	transportTypeTabs.addEventListener("click", transportTypeTabsHandler);

	function transportTypeTabsHandler(evt) {
		const transportTypeTab = evt.target.closest(".transport-type__tab");

		if (transportTypeTab) {
			[...service.querySelectorAll(".transport-type__tab")].forEach((tab) => {
				tab.classList.remove("transport-type__tab--active");
			});

			transportTypeTab.classList.add("transport-type__tab--active");

			[...service.querySelectorAll(".transport-type__list")].forEach(
				(typeList) => {
					typeList.classList.remove("transport-type__list--active");
				}
			);
			service
				.querySelector(
					`[data-list-name="${transportTypeTab.textContent.trim()}"]`
				)
				.classList.add("transport-type__list--active");

			service
				.querySelector(".close-transport-type")
				.addEventListener("click", (evt) => {
					transportTypeTabs.removeEventListener(
						"click",
						transportTypeTabsHandler
					);
				});
		}
	}
}
