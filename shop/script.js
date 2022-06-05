// Back to top button
window.onscroll = () => {
	backToTop();
}

function backToTop() {
	const backToTopBtn = document.querySelector(".back-to-top-container");
	if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
		backToTopBtn.classList.add("back-to-top-active");
	} else {
		backToTopBtn.classList.remove("back-to-top-active");
	}
}

// Back to top onclick
const backToTopBtn = document.querySelector(".back-to-top-container");

backToTopBtn.addEventListener("click", () => {
	return document.documentElement.scrollTop = 0;
});

// Filter price
const filterPrices = document.querySelectorAll('.input-filter-series label');
filterPrices.forEach(element => {
	element.addEventListener("click", filteredItems);
});

// filters all the items by series/model
function filteredItems(e) {
	const allModels2 = document.querySelector('label [data-filter="all-items"]');
	const firstCheckmark2 = document.querySelector('label [data-filter="mediapad-series"]');
	const secondCheckmark2 = document.querySelector('label [data-filter="matepad-series"]');
	const thirdCheckmark2 = document.querySelector('label [data-filter="nova-series"]');
	const fourthCheckmark2 = document.querySelector('label [data-filter="mate-series"]');
	const fifthCheckmark2 = document.querySelector('label [data-filter="p-series"]');
	const sixthCheckmark2 = document.querySelector('label [data-filter="y-series"]');
	const seventhCheckmark2 = document.querySelector('label [data-filter="matebook-series"]');

	// stores all the checkmark in the array to easily navigate
	let allMarks = [allModels2, firstCheckmark2, secondCheckmark2, thirdCheckmark2, fourthCheckmark2, fifthCheckmark2, sixthCheckmark2, seventhCheckmark2];
	let markedFilter;
	let allLabel = document.querySelectorAll(".prices-section .input-filter-series label");

	// gets the value if checked
	allLabel.forEach(label => {
		if (label.children[0].checked) {
			markedFilter = label.children[0].getAttribute("value");
		}
	});
	if (markedFilter != null) {
		const itemPrices = document.querySelectorAll('.model-item-and-price');
		const itemContainer = Array.from(document.querySelectorAll('.main-content-item-container'));
		let counter = 0;
		let resultCounter = document.querySelector("#filter-result");

		// determines if the item is valid to the filter if not then it will not display
		itemPrices.forEach(element => {
			let a0 = element.children[1].textContent.replace("P", "");
			let prices1 = a0.replace(",", "");
			let prices = parseFloat(prices1);
			let itemContainer2 = element.parentElement.parentElement.parentElement;
			let allMarks2 = allMarks.filter(mark => {
				return mark.checked == true;
			});
			switch (markedFilter) {
				case 'a0':
					allMarks2.forEach(mark => {
						if (mark.checked) {
							let all = mark.getAttribute('data-filter');
							if (all == itemContainer2.getAttribute("data-item") || all == "all-items") {
								itemContainer2.style.display = "flex";
								counter++;
							}
						} else {
							itemContainer2.style.display = "none";
						}
					});
					resultCounter.innerHTML = counter;
					if (counter > 30) {
						resultCounter.innerHTML = resultCounter.textContent - 30;
					}
					break;

				case 'a1':
					allMarks2.forEach(mark => {
						if (mark.checked) {
							let all = mark.getAttribute('data-filter');
							if (all == itemContainer2.getAttribute("data-item") || all == "all-items") {
								if (prices >= 80000) {
									itemContainer2.style.display = "flex";
									counter++;
									resultCounter.innerHTML = counter;
								} else {
									itemContainer2.style.display = "none";

									let noResult = itemContainer.every(e => {
										return e.style.display == "none";
									});

								}
							}
						}
					});

					break;

				case 'a2':
					allMarks2.forEach(mark => {
						if (mark.checked) {
							let all = mark.getAttribute('data-filter');
							if (all == itemContainer2.getAttribute("data-item") || all == "all-items") {
								if (prices >= 60000 && prices < 80000) {
									itemContainer2.style.display = "flex";
									counter++;
									resultCounter.innerHTML = counter;
								} else {
									itemContainer2.style.display = "none";

									let noResult = itemContainer.every(e => {
										return e.style.display == "none";
									});

								}
							}
						}
					});

					break;

				case 'a3':
					allMarks2.forEach(mark => {
						if (mark.checked) {
							let all = mark.getAttribute('data-filter');
							if (all == itemContainer2.getAttribute("data-item") || all == "all-items") {
								if (prices >= 40000 && prices < 60000) {
									itemContainer2.style.display = "flex";
									counter++;
									resultCounter.innerHTML = counter;
								} else {
									itemContainer2.style.display = "none";

									let noResult = itemContainer.every(e => {
										return e.style.display == "none";
									});

								}
							}
						}
					});

					break;

				case 'a4':
					allMarks2.forEach(mark => {
						if (mark.checked) {
							let all = mark.getAttribute('data-filter');
							if (all == itemContainer2.getAttribute("data-item") || all == "all-items") {
								if (prices >= 20000 && prices < 40000) {
									itemContainer2.style.display = "flex";
									counter++;
									resultCounter.innerHTML = counter;
								} else {
									itemContainer2.style.display = "none";

									let noResult = itemContainer.every(e => {
										return e.style.display == "none";
									});

								}
							}
						}
					});

					break;

				case 'a5':
					allMarks2.forEach(mark => {
						if (mark.checked) {
							let all = mark.getAttribute('data-filter');
							if (all == itemContainer2.getAttribute("data-item") || all == "all-items") {
								if (prices >= 10000 && prices < 20000) {
									itemContainer2.style.display = "flex";
									counter++;
									resultCounter.innerHTML = counter;
								} else {
									itemContainer2.style.display = "none";

									let noResult = itemContainer.every(e => {
										return e.style.display == "none";
									});

								}
							}
						}
					});

					break;

				case 'a6':
					allMarks2.forEach(mark => {
						if (mark.checked) {
							let all = mark.getAttribute('data-filter');
							if (all == itemContainer2.getAttribute("data-item") || all == "all-items") {
								if (prices < 10000) {
									itemContainer2.style.display = "flex";
									counter++;
									resultCounter.innerHTML = counter;
								} else {
									itemContainer2.style.display = "none";

									let noResult = itemContainer.every(e => {
										return e.style.display == "none";
									});

								}
							}
						}
					});

					break;
			}
		});
	}
}

// Heart React Button Activate 
const heartImg = document.querySelectorAll('.heart-button img');

heartImg.forEach(element => {
	element.addEventListener("click", heartReact);
})

function heartReact(e) {
	let srcLocation = this.getAttribute("src");
	let addedToFavorites = this.parentElement.parentElement.children[0];
	if (srcLocation == '../icons/heart-1.png') {
		this.setAttribute("src", "../icons/heart.png");
		this.classList.add("heart-active");
		addedToFavorites.innerHTML = "Added to favorites";
		addedToFavorites.style.transitionDelay = "0s";
		addedToFavorites.style.opacity = "1";
		addedToFavorites.style.zIndex = "1";
		addedToFavorites.style.transition = ".3s linear";
		addedToFavorites.addEventListener("transitionend", () => {
			addedToFavorites.style.transitionDelay = "2s";
			addedToFavorites.style.opacity = "0";
			addedToFavorites.addEventListener("transitionend", () => {
				addedToFavorites.style.zIndex = "-1";
			});
		});

	} else {
		this.classList.remove("heart-active");
		this.setAttribute("src", "../icons/heart-1.png");
		addedToFavorites.innerHTML = "Removed from favorites";
		addedToFavorites.style.transitionDelay = "0s";
		addedToFavorites.style.opacity = "1";
		addedToFavorites.style.zIndex = "1";
		addedToFavorites.style.transition = ".3s linear";
		addedToFavorites.addEventListener("transitionend", () => {
			addedToFavorites.style.transitionDelay = "2s";
			addedToFavorites.style.opacity = "0";
			addedToFavorites.addEventListener("transitionend", () => {
				addedToFavorites.style.zIndex = "-1";
			});
		});
	}
}

// Added to wishlist Button
const wishlistBtn = document.querySelectorAll('#wishlist');

wishlistBtn.forEach(element => {
	element.addEventListener('click', addToWishlist);
});

function addToWishlist(e) {
	const addedToWishlist = this.parentElement.parentElement.children[2];
	if (this.textContent == 'Add to wishlist') {
		this.innerHTML = 'Added to wishlist';
		addedToWishlist.innerHTML = "Added to wishlist";
		addedToWishlist.style.transitionDelay = "0s";
		addedToWishlist.style.opacity = "1";
		addedToWishlist.style.zIndex = "1";
		addedToWishlist.style.transition = ".3s linear";
		addedToWishlist.addEventListener("transitionend", () => {
			addedToWishlist.style.transitionDelay = "2s";
			addedToWishlist.style.opacity = "0";
			addedToWishlist.addEventListener("transitionend", () => {
				addedToWishlist.style.zIndex = "-1";
			});
		});
	} else {
		this.innerHTML = 'Add to wishlist'
		addedToWishlist.innerHTML = "Removed from wishlist";
		addedToWishlist.style.transitionDelay = "0s";
		addedToWishlist.style.opacity = "1";
		addedToWishlist.style.zIndex = "1";
		addedToWishlist.style.transition = ".3s linear";
		addedToWishlist.addEventListener("transitionend", () => {
			addedToWishlist.style.transitionDelay = "2s";
			addedToWishlist.style.opacity = "0";
			addedToWishlist.addEventListener("transitionend", () => {
				addedToWishlist.style.zIndex = "-1";
			});
		});
	}
}

// checkmark
const checkBox = document.querySelectorAll('.model-series .input-filter-series label');
checkBox.forEach(element => {
	element.addEventListener("click", clickHandler);
});

function clickHandler(event) {

	// whenever the user clicks radio button will reset to all items
	const allPrices = document.querySelector("#all-prices");
	allPrices.checked = true;

	const allModels = document.querySelector('label [data-filter="all-items"]');
	const firstCheckmark = document.querySelector('label [data-filter="mediapad-series"]');
	const secondCheckmark = document.querySelector('label [data-filter="matepad-series"]');
	const thirdCheckmark = document.querySelector('label [data-filter="nova-series"]');
	const fourthCheckmark = document.querySelector('label [data-filter="mate-series"]');
	const fifthCheckmark = document.querySelector('label [data-filter="p-series"]');
	const sixthCheckmark = document.querySelector('label [data-filter="y-series"]');
	const seventhCheckmark = document.querySelector('label [data-filter="matebook-series"]');
	let allMarks2 = [firstCheckmark, secondCheckmark, thirdCheckmark, fourthCheckmark, fifthCheckmark, sixthCheckmark, seventhCheckmark];
	let filterItems = event.target.getAttribute("data-filter");

	if (!filterItems) return;

	let allItems = document.querySelectorAll(`.main-content [data-item="${filterItems}"]`);
	let allItems2 = document.querySelectorAll('.main-content .main-content-item-container');

	// Matebook Series
	if (seventhCheckmark.checked == false) {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "matebook-series") {
				element.style.display = "none";
			}
		});
	} else {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "matebook-series") {
				element.style.display = "flex";
			}
		});
	}

	// Mediapad Series
	if (firstCheckmark.checked == false) {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "mediapad-series") {
				element.style.display = "none";
			}
		});
	} else {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "mediapad-series") {
				element.style.display = "flex";
			}
		});
	}

	// Matepad Series
	if (secondCheckmark.checked == false) {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "matepad-series") {
				element.style.display = "none";
			}
		});
	} else {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "matepad-series") {
				element.style.display = "flex";
			}
		});
	}

	// Nova Series
	if (thirdCheckmark.checked == false) {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "nova-series") {
				element.style.display = "none";
			}
		});
	} else {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "nova-series") {
				element.style.display = "flex";
			}
		});
	}

	// Mate Series
	if (fourthCheckmark.checked == false) {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "mate-series") {
				element.style.display = "none";
			}
		});
	} else {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "mate-series") {
				element.style.display = "flex";
			}
		});
	}

	// P Series
	if (fifthCheckmark.checked == false) {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "p-series") {
				element.style.display = "none";
			}
		});
	} else {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "p-series") {
				element.style.display = "flex";
			}
		});
	}

	// Y Series
	if (sixthCheckmark.checked == false) {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "y-series") {
				element.style.display = "none";
			}
		});
	} else {
		allItems2.forEach(element => {
			const elem = element.getAttribute("data-item")
			if (elem == "y-series") {
				element.style.display = "flex";
			}
		});
	}

	// All Model Series
	if (event.target.value != "b0") {
		allModels.checked = false;
	} else if (event.target.value == "b0") {
		allItems2.forEach(element => {
			element.style.display = "flex";
		});
		firstCheckmark.checked = false;
		secondCheckmark.checked = false;
		thirdCheckmark.checked = false;
		fourthCheckmark.checked = false;
		fifthCheckmark.checked = false;
		sixthCheckmark.checked = false;
		seventhCheckmark.checked = false;
	}

	let isAllFalse = allMarks2.every(element => {
		return element.checked == false;
	});
	if (isAllFalse == true) {
		allModels.checked = true;
		allItems2.forEach(element => {
			element.style.display = "flex";
		});

		// updates the filtered items
		filteredItems();
	}
}

// activates the filter
const filterBtn = document.querySelector(".filter-title");
filterBtn.addEventListener("click", filterActive);

function filterActive() {
	const filterSideNav = document.querySelector(".filter-side-navigation-container");
	const addFilter = document.querySelector(".add-filter");

	if (filterSideNav.classList.contains("filter-active")) {
		filterSideNav.classList.remove("filter-active");
		addFilter.style.zIndex = "-1";
		addFilter.style.display = "none";
	} else {
		filterSideNav.classList.add("filter-active");
		addFilter.style.zIndex = "10";
		addFilter.style.display = "block";
	}
	console.log("g")
}

// removes the filter
const addFilter = document.querySelector(".add-filter");
addFilter.addEventListener("click", removeFilter);

function removeFilter() {
	const filterSideNav = document.querySelector(".filter-side-navigation-container");

	if (filterSideNav.classList.contains("filter-active")) {
		filterSideNav.classList.remove("filter-active");
		addFilter.style.zIndex = "-1";
		addFilter.style.display = "none";
	}
}