//marker bottom nav bar
const markerBot = document.querySelectorAll(".my-nav ul li");
const markerBotA = document.querySelectorAll(".my-nav ul li span a");
const markerBotAfter = document.querySelectorAll(".my-nav ul li span");
for (var i = 0; i < markerBot.length; i++) {
  markerBot[i].addEventListener("mouseover", activate);
}

// to update marker and top sub navigation
function activate(event) {
  for (var i = 0; i < markerBot.length; i++) {
    markerBot[i].addEventListener("mouseout", () => {
      markerBotAfter[0].classList.remove("my-marker0");
      if (window.innerWidth > 1700) {
        if (
          (document.body.scrollTop >= 1000 && document.body.scrollTop < 2500) ||
          (document.documentElement.scrollTop >= 1000 &&
            document.documentElement.scrollTop < 2500)
        ) {
          markerBotAfter[0].classList.add("my-marker1");
        } else {
          markerBotAfter[0].classList.remove("my-marker1");
        }
        if (
          (document.body.scrollTop >= 2500 && document.body.scrollTop < 3500) ||
          (document.documentElement.scrollTop >= 2500 &&
            document.documentElement.scrollTop < 3500)
        ) {
          markerBotAfter[0].classList.add("my-marker2");
        } else {
          markerBotAfter[0].classList.remove("my-marker2");
        }
        if (
          (document.body.scrollTop >= 3500 && document.body.scrollTop < 3900) ||
          (document.documentElement.scrollTop >= 3500 &&
            document.documentElement.scrollTop < 3900)
        ) {
          markerBotAfter[0].classList.add("my-marker3");
        } else {
          markerBotAfter[0].classList.remove("my-marker3");
        }
        if (
          (document.body.scrollTop > 3900) ||
          (document.documentElement.scrollTop > 3900)
        ) {
          markerBotAfter[0].classList.add("my-marker4");
        } else {
          markerBotAfter[0].classList.remove("my-marker4");
        }

      } else if (window.innerWidth <= 1300 && window.innerWidth > 1100) {
        if (
          (document.body.scrollTop >= 1000 && document.body.scrollTop < 1700) ||
          (document.documentElement.scrollTop >= 1000 &&
            document.documentElement.scrollTop < 1700)
        ) {
          markerBotAfter[0].classList.add("my-marker1");
        } else {
          markerBotAfter[0].classList.remove("my-marker1");
        }
        if (
          (document.body.scrollTop >= 1700 && document.body.scrollTop < 2500) ||
          (document.documentElement.scrollTop >= 1700 &&
            document.documentElement.scrollTop < 2500)
        ) {
          markerBotAfter[0].classList.add("my-marker2");
        } else {
          markerBotAfter[0].classList.remove("my-marker2");
        }
        if (
          (document.body.scrollTop >= 2500 && document.body.scrollTop < 3300) ||
          (document.documentElement.scrollTop >= 2500 &&
            document.documentElement.scrollTop < 3300)
        ) {
          markerBotAfter[0].classList.add("my-marker3");
        } else {
          markerBotAfter[0].classList.remove("my-marker3");
        }
        if (
          (document.body.scrollTop > 3300) ||
          (document.documentElement.scrollTop > 3300)
        ) {
          markerBotAfter[0].classList.add("my-marker4");
        } else {
          markerBotAfter[0].classList.remove("my-marker4");
        }

      } else if (window.innerWidth <= 1100 && window.innerWidth >= 900) {
        if (
          (document.body.scrollTop >= 1000 && document.body.scrollTop < 1700) ||
          (document.documentElement.scrollTop >= 1000 &&
            document.documentElement.scrollTop < 1700)
        ) {
          markerBotAfter[0].classList.add("my-marker1");
        } else {
          markerBotAfter[0].classList.remove("my-marker1");
        }
        if (
          (document.body.scrollTop >= 1700 && document.body.scrollTop < 2500) ||
          (document.documentElement.scrollTop >= 1700 &&
            document.documentElement.scrollTop < 2500)
        ) {
          markerBotAfter[0].classList.add("my-marker2");
        } else {
          markerBotAfter[0].classList.remove("my-marker2");
        }
        if (
          (document.body.scrollTop >= 2500 && document.body.scrollTop < 3300) ||
          (document.documentElement.scrollTop >= 2500 &&
            document.documentElement.scrollTop < 3300)
        ) {
          markerBotAfter[0].classList.add("my-marker3");
        } else {
          markerBotAfter[0].classList.remove("my-marker3");
        }
        if (
          (document.body.scrollTop > 3300) ||
          (document.documentElement.scrollTop > 3300)
        ) {
          markerBotAfter[0].classList.add("my-marker4");
        } else {
          markerBotAfter[0].classList.remove("my-marker4");
        }

      } else if (window.innerWidth < 900 && window.innerWidth >= 840) {
        if (
          (document.body.scrollTop >= 1000 && document.body.scrollTop < 1700) ||
          (document.documentElement.scrollTop >= 1000 &&
            document.documentElement.scrollTop < 1700)
        ) {
          markerBotAfter[0].classList.add("my-marker1");
        } else {
          markerBotAfter[0].classList.remove("my-marker1");
        }
        if (
          (document.body.scrollTop >= 1700 && document.body.scrollTop < 2400) ||
          (document.documentElement.scrollTop >= 1700 &&
            document.documentElement.scrollTop < 2400)
        ) {
          markerBotAfter[0].classList.add("my-marker2");
        } else {
          markerBotAfter[0].classList.remove("my-marker2");
        }
        if (
          (document.body.scrollTop >= 2400 && document.body.scrollTop < 3300) ||
          (document.documentElement.scrollTop >= 2400 &&
            document.documentElement.scrollTop < 3300)
        ) {
          markerBotAfter[0].classList.add("my-marker3");
        } else {
          markerBotAfter[0].classList.remove("my-marker3");
        }
        if (
          (document.body.scrollTop > 3300) ||
          (document.documentElement.scrollTop > 3300)
        ) {
          markerBotAfter[0].classList.add("my-marker4");
        } else {
          markerBotAfter[0].classList.remove("my-marker4");
        }

      } else if (window.innerWidth < 840 && window.innerWidth >= 700) {
        if (
          (document.body.scrollTop >= 1000 && document.body.scrollTop < 2300) ||
          (document.documentElement.scrollTop >= 1000 &&
            document.documentElement.scrollTop < 2300)
        ) {
          markerBotAfter[0].classList.add("my-marker1");
        } else {
          markerBotAfter[0].classList.remove("my-marker1");
        }
        if (
          (document.body.scrollTop >= 2300 && document.body.scrollTop < 4100) ||
          (document.documentElement.scrollTop >= 2300 &&
            document.documentElement.scrollTop < 4100)
        ) {
          markerBotAfter[0].classList.add("my-marker2");
        } else {
          markerBotAfter[0].classList.remove("my-marker2");
        }
        if (
          (document.body.scrollTop >= 4100 && document.body.scrollTop < 5300) ||
          (document.documentElement.scrollTop >= 4100 &&
            document.documentElement.scrollTop < 5300)
        ) {
          markerBotAfter[0].classList.add("my-marker3");
        } else {
          markerBotAfter[0].classList.remove("my-marker3");
        }
        if (
          (document.body.scrollTop > 5300) ||
          (document.documentElement.scrollTop > 5300)
        ) {
          markerBotAfter[0].classList.add("my-marker4");
        } else {
          markerBotAfter[0].classList.remove("my-marker4");
        }

      } else {
        if (
          (document.body.scrollTop >= 1100 && document.body.scrollTop < 1700) ||
          (document.documentElement.scrollTop >= 1100 &&
            document.documentElement.scrollTop < 1700)
        ) {
          markerBotAfter[0].classList.add("my-marker1");
        } else {
          markerBotAfter[0].classList.remove("my-marker1");
        }
        if (
          (document.body.scrollTop >= 1700 && document.body.scrollTop < 2400) ||
          (document.documentElement.scrollTop >= 1700 &&
            document.documentElement.scrollTop < 2400)
        ) {
          markerBotAfter[0].classList.add("my-marker2");
        } else {
          markerBotAfter[0].classList.remove("my-marker2");
        }
        if (
          (document.body.scrollTop >= 2400 && document.body.scrollTop < 3300) ||
          (document.documentElement.scrollTop >= 2400 &&
            document.documentElement.scrollTop < 3300)
        ) {
          markerBotAfter[0].classList.add("my-marker3");
        } else {
          markerBotAfter[0].classList.remove("my-marker3");
        }
        if (
          (document.body.scrollTop > 3300) ||
          (document.documentElement.scrollTop > 3300)
        ) {
          markerBotAfter[0].classList.add("my-marker4");
        } else {
          markerBotAfter[0].classList.remove("my-marker4");
        }

      }

    });
  }
  if (this.className == "first") {
    markerBotAfter[0].classList.remove("my-marker2");
    markerBotAfter[0].classList.remove("my-marker3");
    markerBotAfter[0].classList.add("my-marker0");
  } else if (this.className == "second") {
    markerBotAfter[0].classList.remove("my-marker2");
    markerBotAfter[0].classList.remove("my-marker3");
    markerBotAfter[0].classList.remove("my-marker4");
    markerBotAfter[0].classList.add("my-marker1");
  } else if (this.className == "third") {
    markerBotAfter[0].classList.remove("my-marker4");
    markerBotAfter[0].classList.remove("my-marker3");
    markerBotAfter[0].classList.add("my-marker2");
  } else if (this.className == "fourth") {
    markerBotAfter[0].classList.remove("my-marker4");
    markerBotAfter[0].classList.add("my-marker3");
  } else if (this.className == "fifth") {
    markerBotAfter[0].classList.add("my-marker4");
  }
}

// Onscroll functions Call
window.onscroll = function () {
  featuredArticle();
  bottomNavDuplicateFunc();
}

// Onresize functions Call
window.onresize = function () {
  featuredArticle();
  bottomNavDuplicateFunc();
}

// Bottom nav duplicate
// Onresize function
// Onscroll function
function bottomNavDuplicateFunc() {
  console.log(document.documentElement.scrollTop);
  if (window.innerWidth < 700) {
    const bottomNavDuplicate = document.querySelector(".bottom-nav-duplicate");
    const bottomNav = document.querySelector(".bottom-nav");
    const myNavDuplicate = document.querySelectorAll(".my-nav-duplicate ul li");
    const filter = document.querySelector(".filter");

    for (var i = 0; i < markerBot.length; i++) {
      markerBot[i].addEventListener("click", (e) => {
        if (window.innerWidth < 700) {
          bottomNavDuplicate.classList.add("animateBND");
          filter.classList.add("filter-active");
          bottomNav.style.boxShadow = "unset";
        }
      });
    }
    myNavDuplicate.forEach(element => {
      element.addEventListener("click", () => {
        bottomNavDuplicate.classList.remove("animateBND");
        filter.classList.remove("filter-active");
        bottomNav.style.boxShadow = "0px 3px 5px rgba(0,0,0,0.4)";
        for (var i = 0; i < markerBot.length; i++) {
          markerBot[i].style.cursor = "pointer";
        }
      });
    });
    filter.addEventListener("click", () => {
      bottomNavDuplicate.classList.remove("animateBND");
      filter.classList.remove("filter-active");
      bottomNav.style.boxShadow = "0px 3px 5px rgba(0,0,0,0.4)";
      for (var i = 0; i < markerBot.length; i++) {
        markerBot[i].style.cursor = "pointer";
      }
    });
  }
}

// Onscroll functions
// Onresize function
function featuredArticle() {
  const featuredBuyNow = document.querySelector(".featured-product-buy-now");
  const featuredContent = document.querySelector(".featured-product-content p");
  const featuredImg = document.querySelector("#featured-img");
  const exploreTitle = document.querySelector(".explore-title");
  const exploreContent = document.querySelector(".explore-content");
  const exploreOptions = document.querySelector(".explore-options");
  const exploreContentCon = document.querySelector(".explore-section-items-con");
  const doWhatYouCantTitleContainer = document.querySelector(".dowhatyoucant-section-title-container");
  const doWhatYouCantContents = document.querySelectorAll(".dowhatyoucant-section-main-content .dowhatyoucant-section-item-container");

  const findGadgetTitle = document.querySelector(".find-gadget-section-title-container");
  const findGadgetImg = document.querySelectorAll(".find-gadget-section-content-container .find-gadget-item-container .find-gadget-img-container");
  const findGadgetLink = document.querySelectorAll(".find-gadget-section-content-container .find-gadget-item-container .find-gadget-content a");
  const findGadgetDescription = document.querySelectorAll(".find-gadget-section-content-container .find-gadget-item-container .find-gadget-content-description");

  const myNavBottom = document.querySelectorAll(".my-nav ul li");

  markerBot.forEach(element => {
    element.style.opacity = "0";
    element.style.display = "none";
  });
  if (window.innerWidth > 1700) {
    doWhatYouCantContents[0].style.transform = "translateX(-10rem)";
    doWhatYouCantContents[0].style.opacity = "0";
    doWhatYouCantContents[1].style.transform = "translateY(10rem)";
    doWhatYouCantContents[1].style.opacity = "0";
    doWhatYouCantContents[2].style.transform = "translateX(10rem)";
    doWhatYouCantContents[2].style.opacity = "0";
    markerBot.forEach(element => {
      element.style.opacity = "1";
      element.style.display = "flex";
    });
    if (
      (document.body.scrollTop >= 350 && document.body.scrollTop < 1800) ||
      (document.documentElement.scrollTop >= 350 &&
        document.documentElement.scrollTop < 1800)
    ) {
      featuredContent.classList.add("activate-featured-content");
      featuredBuyNow.classList.add("activate-featured-buy-now");
      featuredImg.classList.add("activate-featured-img");
    } else {
      featuredContent.classList.remove("activate-featured-content");
      featuredBuyNow.classList.remove("activate-featured-buy-now");
      featuredImg.classList.remove("activate-featured-img");
    }
    if (
      (document.body.scrollTop >= 1800 && document.body.scrollTop < 2500) ||
      (document.documentElement.scrollTop >= 1800 &&
        document.documentElement.scrollTop < 2500)
    ) {
      markerBotAfter[0].classList.add("my-marker1");
      exploreTitle.style.animation = "animateExplore .5s ease forwards 0.1s";
      exploreContent.style.animation = "animateExplore .5s ease forwards 0.3s";
      exploreOptions.style.animation = "animateExplore .5s ease forwards 0.5s";
      exploreContentCon.style.opacity = "1";
    } else {
      markerBotAfter[0].classList.remove("my-marker1");
      exploreTitle.style.animation = "unset";
      exploreContent.style.animation = "unset";
      exploreOptions.style.animation = "unset";
      exploreContentCon.style.opacity = "0";
    }

    if (
      (document.body.scrollTop >= 2500 && document.body.scrollTop < 3500) ||
      (document.documentElement.scrollTop >= 2500 &&
        document.documentElement.scrollTop < 3500)
    ) {
      markerBotAfter[0].classList.add("my-marker2");
      doWhatYouCantTitleContainer.style.animation = "animateDoWhatYouCant .5s ease forwards .1s";
      doWhatYouCantContents[0].style.animation = "animateDoWhatYouCantContent1 .5s ease forwards .3s";
      doWhatYouCantContents[1].style.animation = "animateDoWhatYouCantContent2 .5s ease forwards .3s";
      doWhatYouCantContents[2].style.animation = "animateDoWhatYouCantContent3 .5s ease forwards .3s";
    } else {
      markerBotAfter[0].classList.remove("my-marker2");
      doWhatYouCantTitleContainer.style.animation = "unset";
      doWhatYouCantContents[0].style.animation = "unset";
      doWhatYouCantContents[1].style.animation = "unset";
      doWhatYouCantContents[2].style.animation = "unset";
    }

    if (
      (document.body.scrollTop >= 3500 && document.body.scrollTop < 4000) ||
      (document.documentElement.scrollTop >= 3500 &&
        document.documentElement.scrollTop < 4000)
    ) {
      markerBotAfter[0].classList.add("my-marker3");
      findGadgetTitle.style.animation = "animateFindTitle 0.5s ease forwards 0.1s";
      findGadgetImg.forEach((element) => {
        element.style.animation = "animateFind1 1s ease forwards 0.5s";
      });
      findGadgetLink.forEach((element) => {
        element.style.animation = "animateFind1 0.5s ease forwards 0.7s";
      });
      findGadgetDescription.forEach((element) => {
        element.style.animation = "animateFind2 0.5s ease forwards 0.8s";
      });
    } else {
      markerBotAfter[0].classList.remove("my-marker3");
      findGadgetTitle.style.animation = "unset";
      findGadgetImg.forEach((element) => {
        element.style.animation = "unset";
      });
      findGadgetLink.forEach((element) => {
        element.style.animation = "unset";
      });
      findGadgetDescription.forEach((element) => {
        element.style.animation = "unset";
      });
    }
    if (
      (document.body.scrollTop >= 4000) ||
      (document.documentElement.scrollTop >= 4000)
    ) {
      markerBotAfter[0].classList.add("my-marker4");
    } else {
      markerBotAfter[0].classList.remove("my-marker4");
    }
  } else if (window.innerWidth > 1300 && window.innerWidth <= 1700) {
    doWhatYouCantContents[0].style.transform = "translateX(-10rem)";
    doWhatYouCantContents[0].style.opacity = "0";
    doWhatYouCantContents[1].style.transform = "translateY(10rem)";
    doWhatYouCantContents[1].style.opacity = "0";
    doWhatYouCantContents[2].style.transform = "translateX(10rem)";
    doWhatYouCantContents[2].style.opacity = "0";
    markerBot.forEach(element => {
      element.style.opacity = "1";
      element.style.display = "flex";
    });
    if (
      (document.body.scrollTop >= 350 && document.body.scrollTop < 1400) ||
      (document.documentElement.scrollTop >= 350 &&
        document.documentElement.scrollTop < 1400)
    ) {
      featuredContent.classList.add("activate-featured-content");
      featuredBuyNow.classList.add("activate-featured-buy-now");
      featuredImg.classList.add("activate-featured-img");
    } else {
      featuredContent.classList.remove("activate-featured-content");
      featuredBuyNow.classList.remove("activate-featured-buy-now");
      featuredImg.classList.remove("activate-featured-img");
    }
    if (
      (document.body.scrollTop >= 1400 && document.body.scrollTop < 2000) ||
      (document.documentElement.scrollTop >= 1400 &&
        document.documentElement.scrollTop < 2000)
    ) {
      markerBotAfter[0].classList.add("my-marker1");
      exploreTitle.style.animation = "animateExplore .5s ease forwards 0.1s";
      exploreContent.style.animation = "animateExplore .5s ease forwards 0.3s";
      exploreOptions.style.animation = "animateExplore .5s ease forwards 0.5s";
      exploreContentCon.style.opacity = "1";
    } else {
      markerBotAfter[0].classList.remove("my-marker1");
      exploreTitle.style.animation = "unset";
      exploreContent.style.animation = "unset";
      exploreOptions.style.animation = "unset";
      exploreContentCon.style.opacity = "0";
    }

    if (
      (document.body.scrollTop >= 2000 && document.body.scrollTop < 2700) ||
      (document.documentElement.scrollTop >= 2000 &&
        document.documentElement.scrollTop < 2700)
    ) {
      markerBotAfter[0].classList.add("my-marker2");
      doWhatYouCantTitleContainer.style.animation = "animateDoWhatYouCant .5s ease forwards .1s";
      doWhatYouCantContents[0].style.animation = "animateDoWhatYouCantContent1 .5s ease forwards .3s";
      doWhatYouCantContents[1].style.animation = "animateDoWhatYouCantContent2 .5s ease forwards .3s";
      doWhatYouCantContents[2].style.animation = "animateDoWhatYouCantContent3 .5s ease forwards .3s";
    } else {
      markerBotAfter[0].classList.remove("my-marker2");
      doWhatYouCantTitleContainer.style.animation = "unset";
      doWhatYouCantContents[0].style.animation = "unset";
      doWhatYouCantContents[1].style.animation = "unset";
      doWhatYouCantContents[2].style.animation = "unset";
    }

    if (
      (document.body.scrollTop >= 2700 && document.body.scrollTop < 3300) ||
      (document.documentElement.scrollTop >= 2700 &&
        document.documentElement.scrollTop < 3300)
    ) {
      markerBotAfter[0].classList.add("my-marker3");
      findGadgetTitle.style.animation = "animateFindTitle 0.5s ease forwards 0.1s";
      findGadgetImg.forEach((element) => {
        element.style.animation = "animateFind1 1s ease forwards 0.5s";
      });
      findGadgetLink.forEach((element) => {
        element.style.animation = "animateFind1 0.5s ease forwards 0.7s";
      });
      findGadgetDescription.forEach((element) => {
        element.style.animation = "animateFind2 0.5s ease forwards 0.8s";
      });
    } else {
      markerBotAfter[0].classList.remove("my-marker3");
      findGadgetTitle.style.animation = "unset";
      findGadgetImg.forEach((element) => {
        element.style.animation = "unset";
      });
      findGadgetLink.forEach((element) => {
        element.style.animation = "unset";
      });
      findGadgetDescription.forEach((element) => {
        element.style.animation = "unset";
      });
    }
    if (
      (document.body.scrollTop >= 3300) ||
      (document.documentElement.scrollTop >= 3300)
    ) {
      markerBotAfter[0].classList.add("my-marker4");
    } else {
      markerBotAfter[0].classList.remove("my-marker4");
    }
  } else if (window.innerWidth <= 1300 && window.innerWidth > 1100) {
    doWhatYouCantContents[0].style.transform = "translateX(-10rem)";
    doWhatYouCantContents[0].style.opacity = "0";
    doWhatYouCantContents[1].style.transform = "translateY(10rem)";
    doWhatYouCantContents[1].style.opacity = "0";
    doWhatYouCantContents[2].style.transform = "translateX(10rem)";
    doWhatYouCantContents[2].style.opacity = "0";

    markerBot.forEach(element => {
      element.style.opacity = "1";
      element.style.display = "flex";
    });
    if (
      (document.body.scrollTop >= 350 && document.body.scrollTop < 1400) ||
      (document.documentElement.scrollTop >= 350 &&
        document.documentElement.scrollTop < 1400)
    ) {
      featuredContent.classList.add("activate-featured-content");
      featuredBuyNow.classList.add("activate-featured-buy-now");
      featuredImg.classList.add("activate-featured-img");
    } else {
      featuredContent.classList.remove("activate-featured-content");
      featuredBuyNow.classList.remove("activate-featured-buy-now");
      featuredImg.classList.remove("activate-featured-img");
    }
    if (
      (document.body.scrollTop >= 1400 && document.body.scrollTop < 2400) ||
      (document.documentElement.scrollTop >= 1400 &&
        document.documentElement.scrollTop < 2400)
    ) {
      markerBotAfter[0].classList.add("my-marker1");
      exploreTitle.style.animation = "animateExplore .5s ease forwards 0.1s";
      exploreContent.style.animation = "animateExplore .5s ease forwards 0.3s";
      exploreOptions.style.animation = "animateExplore .5s ease forwards 0.5s";
      exploreContentCon.style.opacity = "1";
    } else {
      markerBotAfter[0].classList.remove("my-marker1");
      exploreTitle.style.animation = "unset";
      exploreContent.style.animation = "unset";
      exploreOptions.style.animation = "unset";
      exploreContentCon.style.opacity = "0";
    }

    if (
      (document.body.scrollTop >= 2400 && document.body.scrollTop < 3000) ||
      (document.documentElement.scrollTop >= 2400 &&
        document.documentElement.scrollTop < 3000)
    ) {
      markerBotAfter[0].classList.add("my-marker2");
      doWhatYouCantTitleContainer.style.animation = "animateDoWhatYouCant .5s ease forwards .1s";
      doWhatYouCantContents[0].style.animation = "animateDoWhatYouCantContent1 .5s ease forwards .3s";
      doWhatYouCantContents[1].style.animation = "animateDoWhatYouCantContent2 .5s ease forwards .3s";
      doWhatYouCantContents[2].style.animation = "animateDoWhatYouCantContent3 .5s ease forwards .3s";
    } else {
      markerBotAfter[0].classList.remove("my-marker2");
      doWhatYouCantTitleContainer.style.animation = "unset";
      doWhatYouCantContents[0].style.animation = "unset";
      doWhatYouCantContents[1].style.animation = "unset";
      doWhatYouCantContents[2].style.animation = "unset";
    }

    if (
      (document.body.scrollTop >= 3000 && document.body.scrollTop < 3700) ||
      (document.documentElement.scrollTop >= 3000 &&
        document.documentElement.scrollTop < 3700)
    ) {
      markerBotAfter[0].classList.add("my-marker3");
      findGadgetTitle.style.animation = "animateFindTitle 0.5s ease forwards 0.1s";
      findGadgetImg.forEach((element) => {
        element.style.animation = "animateFind1 1s ease forwards 0.5s";
      });
      findGadgetLink.forEach((element) => {
        element.style.animation = "animateFind1 0.5s ease forwards 0.7s";
      });
      findGadgetDescription.forEach((element) => {
        element.style.animation = "animateFind2 0.5s ease forwards 0.8s";
      });
    } else {
      markerBotAfter[0].classList.remove("my-marker3");
      findGadgetTitle.style.animation = "unset";
      findGadgetImg.forEach((element) => {
        element.style.animation = "unset";
      });
      findGadgetLink.forEach((element) => {
        element.style.animation = "unset";
      });
      findGadgetDescription.forEach((element) => {
        element.style.animation = "unset";
      });
    }
    if (
      (document.body.scrollTop >= 3700) ||
      (document.documentElement.scrollTop >= 3700)
    ) {
      markerBotAfter[0].classList.add("my-marker4");
    } else {
      markerBotAfter[0].classList.remove("my-marker4");
    }
  } else if (window.innerWidth <= 1100 && window.innerWidth >= 700) {
    markerBot.forEach(element => {
      element.style.opacity = "1";
      element.style.display = "flex";
    });
  }

  //innerHeight
  if (window.innerHeight <= 950 && window.innerHeight >= 800) {
    markerBot.forEach(element => {
      element.style.opacity = "1";
      element.style.display = "flex";
    });
    if (
      (document.body.scrollTop >= 600 && document.body.scrollTop < 1800) ||
      (document.documentElement.scrollTop >= 600 &&
        document.documentElement.scrollTop < 1800)
    ) {
      featuredContent.classList.add("activate-featured-content");
      featuredBuyNow.classList.add("activate-featured-buy-now");
      featuredImg.classList.add("activate-featured-img");
    } else {
      featuredContent.classList.remove("activate-featured-content");
      featuredBuyNow.classList.remove("activate-featured-buy-now");
      featuredImg.classList.remove("activate-featured-img");
    }
    if (
      (document.body.scrollTop >= 1800 && document.body.scrollTop < 2500) ||
      (document.documentElement.scrollTop >= 1800 &&
        document.documentElement.scrollTop < 2500)
    ) {
      markerBotAfter[0].classList.add("my-marker1");
      exploreTitle.style.animation = "animateExplore .5s ease forwards 0.1s";
      exploreContent.style.animation = "animateExplore .5s ease forwards 0.3s";
      exploreOptions.style.animation = "animateExplore .5s ease forwards 0.5s";
      exploreContentCon.style.opacity = "1";
    } else {
      markerBotAfter[0].classList.remove("my-marker1");
      exploreTitle.style.animation = "unset";
      exploreContent.style.animation = "unset";
      exploreOptions.style.animation = "unset";
      exploreContentCon.style.opacity = "0";
    }

    if (
      (document.body.scrollTop >= 2500 && document.body.scrollTop < 3000) ||
      (document.documentElement.scrollTop >= 2500 &&
        document.documentElement.scrollTop < 3000)
    ) {
      markerBotAfter[0].classList.add("my-marker2");
      doWhatYouCantTitleContainer.style.animation = "animateDoWhatYouCant .5s ease forwards .1s";
      doWhatYouCantContents[0].style.animation = "animateDoWhatYouCantContent1 .5s ease forwards .3s";
      doWhatYouCantContents[1].style.animation = "animateDoWhatYouCantContent2 .5s ease forwards .3s";
      doWhatYouCantContents[2].style.animation = "animateDoWhatYouCantContent3 .5s ease forwards .3s";
    } else {
      markerBotAfter[0].classList.remove("my-marker2");
      doWhatYouCantTitleContainer.style.animation = "unset";
      doWhatYouCantContents[0].style.animation = "unset";
      doWhatYouCantContents[1].style.animation = "unset";
      doWhatYouCantContents[2].style.animation = "unset";
    }

    if (
      (document.body.scrollTop >= 3000 && document.body.scrollTop < 3700) ||
      (document.documentElement.scrollTop >= 3000 &&
        document.documentElement.scrollTop < 3700)
    ) {
      markerBotAfter[0].classList.add("my-marker3");
      findGadgetTitle.style.animation = "animateFindTitle 0.5s ease forwards 0.1s";
      findGadgetImg.forEach((element) => {
        element.style.animation = "animateFind1 1s ease forwards 0.5s";
      });
      findGadgetLink.forEach((element) => {
        element.style.animation = "animateFind1 0.5s ease forwards 0.7s";
      });
      findGadgetDescription.forEach((element) => {
        element.style.animation = "animateFind2 0.5s ease forwards 0.8s";
      });
    } else {
      markerBotAfter[0].classList.remove("my-marker3");
      findGadgetTitle.style.animation = "unset";
      findGadgetImg.forEach((element) => {
        element.style.animation = "unset";
      });
      findGadgetLink.forEach((element) => {
        element.style.animation = "unset";
      });
      findGadgetDescription.forEach((element) => {
        element.style.animation = "unset";
      });
    }
    if (
      (document.body.scrollTop >= 3700) ||
      (document.documentElement.scrollTop >= 3700)
    ) {
      markerBotAfter[0].classList.add("my-marker4");
    } else {
      markerBotAfter[0].classList.remove("my-marker4");
    }
  }
  // else if (window.innerWidth <= 1100 && window.innerWidth >= 900) {
  //   markerBot.forEach(element => {
  //     element.style.opacity = "1";
  //     element.style.display = "flex";
  //   });
  //   if (
  //     (document.body.scrollTop >= 500 && document.body.scrollTop < 1300) ||
  //     (document.documentElement.scrollTop >= 500 &&
  //       document.documentElement.scrollTop < 1300)
  //   ) {
  //     featuredContent.classList.add("activate-featured-content");
  //     featuredBuyNow.classList.add("activate-featured-buy-now");
  //     featuredImg.classList.add("activate-featured-img");
  //   } else {
  //     featuredContent.classList.remove("activate-featured-content");
  //     featuredBuyNow.classList.remove("activate-featured-buy-now");
  //     featuredImg.classList.remove("activate-featured-img");
  //   }
  //   if (
  //     (document.body.scrollTop >= 1300 && document.body.scrollTop < 2200) ||
  //     (document.documentElement.scrollTop >= 1300 &&
  //       document.documentElement.scrollTop < 2200)
  //   ) {
  //     markerBotAfter[0].classList.add("my-marker1");
  //     exploreTitle.style.animation="animateExplore .5s ease forwards 0.1s";
  //     exploreContent.style.animation="animateExplore .5s ease forwards 0.3s";
  //     exploreOptions.style.animation="animateExplore .5s ease forwards 0.5s";
  //     exploreContentCon.style.opacity = "1";
  //   } else {
  //     markerBotAfter[0].classList.remove("my-marker1");
  //     exploreTitle.style.animation="unset";
  //     exploreContent.style.animation="unset";
  //     exploreOptions.style.animation="unset";
  //     exploreContentCon.style.opacity = "0";
  //   }

  //   if (
  //     (document.body.scrollTop >= 2200 && document.body.scrollTop < 2700) ||
  //     (document.documentElement.scrollTop >= 2200 &&
  //       document.documentElement.scrollTop < 2700)
  //   ) {
  //     markerBotAfter[0].classList.add("my-marker2");
  //     doWhatYouCantTitleContainer.style.animation = "animateDoWhatYouCant .5s ease forwards .1s";
  //     doWhatYouCantContents[0].style.animation = "animateDoWhatYouCantContent1 .5s ease forwards .3s";
  //     doWhatYouCantContents[1].style.animation = "animateDoWhatYouCantContent2 .5s ease forwards .3s";
  //     doWhatYouCantContents[2].style.animation = "animateDoWhatYouCantContent3 .5s ease forwards .3s";
  //   } else {
  //     markerBotAfter[0].classList.remove("my-marker2");
  //     doWhatYouCantTitleContainer.style.animation = "unset";
  //     doWhatYouCantContents[0].style.animation = "unset";
  //     doWhatYouCantContents[1].style.animation = "unset";
  //     doWhatYouCantContents[2].style.animation = "unset";
  //   }

  //   if (
  //     (document.body.scrollTop >= 2700 && document.body.scrollTop < 3400) ||
  //     (document.documentElement.scrollTop >= 2700 &&
  //       document.documentElement.scrollTop < 3400)
  //   ) {
  //     markerBotAfter[0].classList.add("my-marker3");
  //     findGadgetTitle.style.animation = "animateFindTitle 0.5s ease forwards 0.1s";
  //     findGadgetImg.forEach((element) => {
  //       element.style.animation = "animateFind1 1s ease forwards 0.5s";
  //     });
  //     findGadgetLink.forEach((element) => {
  //       element.style.animation = "animateFind1 0.5s ease forwards 0.7s";
  //     });
  //     findGadgetDescription.forEach((element) => {
  //       element.style.animation = "animateFind2 0.5s ease forwards 0.8s";
  //     });
  //   } else {
  //     markerBotAfter[0].classList.remove("my-marker3");
  //     findGadgetTitle.style.animation = "unset";
  //     findGadgetImg.forEach((element) => {
  //       element.style.animation = "unset";
  //     });
  //     findGadgetLink.forEach((element) => {
  //       element.style.animation = "unset";
  //     });
  //     findGadgetDescription.forEach((element) => {
  //       element.style.animation = "unset";
  //     });
  //   }
  // } else if (window.innerWidth < 900 && window.innerWidth >= 840) {
  //   markerBot.forEach(element => {
  //     element.style.opacity = "1";
  //     element.style.display = "flex";
  //   });
  //   if (
  //     (document.body.scrollTop >= 500 && document.body.scrollTop < 1300) ||
  //     (document.documentElement.scrollTop >= 500 &&
  //       document.documentElement.scrollTop < 1300)
  //   ) {
  //     featuredContent.classList.add("activate-featured-content");
  //     featuredBuyNow.classList.add("activate-featured-buy-now");
  //     featuredImg.classList.add("activate-featured-img");
  //   } else {
  //     featuredContent.classList.remove("activate-featured-content");
  //     featuredBuyNow.classList.remove("activate-featured-buy-now");
  //     featuredImg.classList.remove("activate-featured-img");
  //   }
  //   if (
  //     (document.body.scrollTop >= 1300 && document.body.scrollTop < 2200) ||
  //     (document.documentElement.scrollTop >= 1300 &&
  //       document.documentElement.scrollTop < 2200)
  //   ) {
  //     markerBotAfter[0].classList.add("my-marker1");
  //     exploreTitle.style.animation="animateExplore .5s ease forwards 0.1s";
  //     exploreContent.style.animation="animateExplore .5s ease forwards 0.3s";
  //     exploreOptions.style.animation="animateExplore .5s ease forwards 0.5s";
  //     exploreContentCon.style.opacity = "1";
  //   } else {
  //     markerBotAfter[0].classList.remove("my-marker1");
  //     exploreTitle.style.animation="unset";
  //     exploreContent.style.animation="unset";
  //     exploreOptions.style.animation="unset";
  //     exploreContentCon.style.opacity = "0";
  //   }

  //   if (
  //     (document.body.scrollTop >= 2200 && document.body.scrollTop < 2700) ||
  //     (document.documentElement.scrollTop >= 2200 &&
  //       document.documentElement.scrollTop < 2700)
  //   ) {
  //     markerBotAfter[0].classList.add("my-marker2");
  //     doWhatYouCantTitleContainer.style.animation = "animateDoWhatYouCant .5s ease forwards .1s";
  //     doWhatYouCantContents[0].style.animation = "animateDoWhatYouCantContent1 .5s ease forwards .3s";
  //     doWhatYouCantContents[1].style.animation = "animateDoWhatYouCantContent2 .5s ease forwards .3s";
  //     doWhatYouCantContents[2].style.animation = "animateDoWhatYouCantContent3 .5s ease forwards .3s";
  //   } else {
  //     markerBotAfter[0].classList.remove("my-marker2");
  //     doWhatYouCantTitleContainer.style.animation = "unset";
  //     doWhatYouCantContents[0].style.animation = "unset";
  //     doWhatYouCantContents[1].style.animation = "unset";
  //     doWhatYouCantContents[2].style.animation = "unset";
  //   }

  //   if (
  //     (document.body.scrollTop >= 2700 && document.body.scrollTop < 3350) ||
  //     (document.documentElement.scrollTop >= 2700 &&
  //       document.documentElement.scrollTop < 3350)
  //   ) {
  //     markerBotAfter[0].classList.add("my-marker3");
  //     findGadgetTitle.style.animation = "animateFindTitle 0.5s ease forwards 0.1s";
  //     findGadgetImg.forEach((element) => {
  //       element.style.animation = "animateFind1 1s ease forwards 0.5s";
  //     });
  //     findGadgetLink.forEach((element) => {
  //       element.style.animation = "animateFind1 0.5s ease forwards 0.7s";
  //     });
  //     findGadgetDescription.forEach((element) => {
  //       element.style.animation = "animateFind2 0.5s ease forwards 0.8s";
  //     });
  //   } else {
  //     markerBotAfter[0].classList.remove("my-marker3");
  //     findGadgetTitle.style.animation = "unset";
  //     findGadgetImg.forEach((element) => {
  //       element.style.animation = "unset";
  //     });
  //     findGadgetLink.forEach((element) => {
  //       element.style.animation = "unset";
  //     });
  //     findGadgetDescription.forEach((element) => {
  //       element.style.animation = "unset";
  //     });
  //   }
  // } else if (window.innerWidth < 840 && window.innerWidth >= 700) {
  //   markerBot.forEach(element => {
  //     element.style.opacity = "1";
  //     element.style.display = "flex";
  //   });
  //   for (var i = 0; i < myNavBottom.length; i++) {
  //     myNavBottom[i].style.display = "flex";
  //     myNavBottom[i].style.opacity = "1";
  //   }
  //   if (
  //     (document.body.scrollTop >= 500 && document.body.scrollTop < 1300) ||
  //     (document.documentElement.scrollTop >= 500 &&
  //       document.documentElement.scrollTop < 1300)
  //   ) {
  //     featuredContent.classList.add("activate-featured-content");
  //     featuredBuyNow.classList.add("activate-featured-buy-now");
  //     featuredImg.classList.add("activate-featured-img");
  //   } else {
  //     featuredContent.classList.remove("activate-featured-content");
  //     featuredBuyNow.classList.remove("activate-featured-buy-now");
  //     featuredImg.classList.remove("activate-featured-img");
  //   }
  //   if (
  //     (document.body.scrollTop >= 1300 && document.body.scrollTop < 2700) ||
  //     (document.documentElement.scrollTop >= 1300 &&
  //       document.documentElement.scrollTop < 2700)
  //   ) {
  //     markerBotAfter[0].classList.add("my-marker1");
  //     exploreTitle.style.animation="animateExplore .5s ease forwards 0.1s";
  //     exploreContent.style.animation="animateExplore .5s ease forwards 0.3s";
  //     exploreOptions.style.animation="animateExplore .5s ease forwards 0.5s";
  //     exploreContentCon.style.opacity = "1";
  //   } else {
  //     markerBotAfter[0].classList.remove("my-marker1");
  //     exploreTitle.style.animation="unset";
  //     exploreContent.style.animation="unset";
  //     exploreOptions.style.animation="unset";
  //     exploreContentCon.style.opacity = "0";
  //   }

  //   if (
  //     (document.body.scrollTop >= 2700 && document.body.scrollTop < 4400) ||
  //     (document.documentElement.scrollTop >= 2700 &&
  //       document.documentElement.scrollTop < 4400)
  //   ) {
  //     markerBotAfter[0].classList.add("my-marker2");
  //     doWhatYouCantTitleContainer.style.animation = "animateDoWhatYouCant .5s ease forwards .1s";
  //     doWhatYouCantContents[0].style.animation = "animateDoWhatYouCantContent1 .5s ease forwards .3s";
  //     doWhatYouCantContents[1].style.animation = "animateDoWhatYouCantContent2 .5s ease forwards .3s";
  //     doWhatYouCantContents[2].style.animation = "animateDoWhatYouCantContent3 .5s ease forwards .3s";
  //   } else {
  //     markerBotAfter[0].classList.remove("my-marker2");
  //     doWhatYouCantTitleContainer.style.animation = "unset";
  //     doWhatYouCantContents[0].style.animation = "unset";
  //     doWhatYouCantContents[1].style.animation = "unset";
  //     doWhatYouCantContents[2].style.animation = "unset";
  //   }

  //   if (
  //     (document.body.scrollTop >= 4400 && document.body.scrollTop < 5500) ||
  //     (document.documentElement.scrollTop >= 4400 &&
  //       document.documentElement.scrollTop < 5500)
  //   ) {
  //     markerBotAfter[0].classList.add("my-marker3");
  //     findGadgetTitle.style.animation = "animateFindTitle 0.5s ease forwards 0.1s";
  //     findGadgetImg.forEach((element) => {
  //       element.style.animation = "animateFind1 1s ease forwards 0.5s";
  //     });
  //     findGadgetLink.forEach((element) => {
  //       element.style.animation = "animateFind1 0.5s ease forwards 0.7s";
  //     });
  //     findGadgetDescription.forEach((element) => {
  //       element.style.animation = "animateFind2 0.5s ease forwards 0.8s";
  //     });
  //   } else {
  //     markerBotAfter[0].classList.remove("my-marker3");
  //     findGadgetTitle.style.animation = "unset";
  //     findGadgetImg.forEach((element) => {
  //       element.style.animation = "unset";
  //     });
  //     findGadgetLink.forEach((element) => {
  //       element.style.animation = "unset";
  //     });
  //     findGadgetDescription.forEach((element) => {
  //       element.style.animation = "unset";
  //     });
  //   }
  // }
  if (window.innerWidth < 700 && window.innerWidth >= 600) {
    doWhatYouCantContents.forEach(element => {
      element.style.transition = "none";
      element.style.opacity = "1";
      doWhatYouCantContents[0].style.transform = "translateX(0rem)";
      doWhatYouCantContents[1].style.transform = "translateY(0rem)";
      doWhatYouCantContents[2].style.transform = "translateX(0rem)";
    });

    if (document.documentElement.scrollTop < 500) {
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "first") {
          myNavBottom[i].style.display = "flex";
          myNavBottom[i].style.opacity = "1";
        }
      }
    } else if (
      (document.body.scrollTop >= 500 && document.body.scrollTop < 1200) ||
      (document.documentElement.scrollTop >= 500 &&
        document.documentElement.scrollTop < 1200)
    ) {
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "first") {
          myNavBottom[i].style.display = "flex";
          myNavBottom[i].style.opacity = "1";
        }
      }
    } else {
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "first") {
          myNavBottom[i].style.display = "none";
          myNavBottom[i].style.opacity = "0";
        }
      }
    }
    if (
      (document.body.scrollTop >= 1200 && document.body.scrollTop < 2700) ||
      (document.documentElement.scrollTop >= 1200 &&
        document.documentElement.scrollTop < 2700)
    ) {
      markerBotAfter[0].classList.add("my-marker1");
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "second") {
          myNavBottom[i].style.display = "flex";
          myNavBottom[i].style.opacity = "1";
        }
      }
    } else {
      markerBotAfter[0].classList.remove("my-marker1");
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "second") {
          myNavBottom[i].style.display = "none";
          myNavBottom[i].style.opacity = "0";
        }
      }
    }

    if (
      (document.body.scrollTop >= 2700 && document.body.scrollTop < 4100) ||
      (document.documentElement.scrollTop >= 2700 &&
        document.documentElement.scrollTop < 4100)
    ) {
      markerBotAfter[0].classList.add("my-marker2");
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "third") {
          myNavBottom[i].style.display = "flex";
          myNavBottom[i].style.opacity = "1";
        }
      }
    } else {
      markerBotAfter[0].classList.remove("my-marker2");
      doWhatYouCantTitleContainer.style.animation = "unset";
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "third") {
          myNavBottom[i].style.display = "none";
          myNavBottom[i].style.opacity = "0";
        }
      }
    }

    if (
      (document.body.scrollTop >= 4100 && document.body.scrollTop < 5200) ||
      (document.documentElement.scrollTop >= 4100 &&
        document.documentElement.scrollTop < 5200)
    ) {
      markerBotAfter[0].classList.add("my-marker3");
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "fourth") {
          myNavBottom[i].style.display = "flex";
          myNavBottom[i].style.opacity = "1";
        }
      }
    } else {
      markerBotAfter[0].classList.remove("my-marker3");
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "fourth") {
          myNavBottom[i].style.display = "none";
          myNavBottom[i].style.opacity = "0";
        }
      }
    }
    if (
      (document.body.scrollTop >= 5200) ||
      (document.documentElement.scrollTop >= 5200)
    ) {
      markerBotAfter[0].classList.add("my-marker4");
    } else {
      markerBotAfter[0].classList.remove("my-marker4");
    }
  } else if (window.innerWidth < 600 && window.innerWidth >= 400) { //To be Continued
    doWhatYouCantContents.forEach(element => {
      element.style.transition = "none";
      element.style.opacity = "1";
      doWhatYouCantContents[0].style.transform = "translateX(0rem)";
      doWhatYouCantContents[1].style.transform = "translateY(0rem)";
      doWhatYouCantContents[2].style.transform = "translateX(0rem)";
    });

    if (document.documentElement.scrollTop < 500) {
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "first") {
          myNavBottom[i].style.display = "flex";
          myNavBottom[i].style.opacity = "1";
        }
      }
    } else if (
      (document.body.scrollTop >= 500 && document.body.scrollTop < 1200) ||
      (document.documentElement.scrollTop >= 500 &&
        document.documentElement.scrollTop < 1200)
    ) {
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "first") {
          myNavBottom[i].style.display = "flex";
          myNavBottom[i].style.opacity = "1";
        }
      }
    } else {
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "first") {
          myNavBottom[i].style.display = "none";
          myNavBottom[i].style.opacity = "0";
        }
      }
    }
    if (
      (document.body.scrollTop >= 1200 && document.body.scrollTop < 2700) ||
      (document.documentElement.scrollTop >= 1200 &&
        document.documentElement.scrollTop < 2700)
    ) {
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "second") {
          myNavBottom[i].style.display = "flex";
          myNavBottom[i].style.opacity = "1";
        }
      }
    } else {
      markerBotAfter[0].classList.remove("my-marker1");
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "second") {
          myNavBottom[i].style.display = "none";
          myNavBottom[i].style.opacity = "0";
        }
      }
    }

    if (
      (document.body.scrollTop >= 2700 && document.body.scrollTop < 4100) ||
      (document.documentElement.scrollTop >= 2700 &&
        document.documentElement.scrollTop < 4100)
    ) {
      markerBotAfter[0].classList.add("my-marker2");
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "third") {
          myNavBottom[i].style.display = "flex";
          myNavBottom[i].style.opacity = "1";
        }
      }
    } else {
      markerBotAfter[0].classList.remove("my-marker2");
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "third") {
          myNavBottom[i].style.display = "none";
          myNavBottom[i].style.opacity = "0";
        }
      }
    }

    if (
      (document.body.scrollTop >= 4100 && document.body.scrollTop < 5200) ||
      (document.documentElement.scrollTop >= 4100 &&
        document.documentElement.scrollTop < 5200)
    ) {
      markerBotAfter[0].classList.add("my-marker3");
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "fourth") {
          myNavBottom[i].style.display = "flex";
          myNavBottom[i].style.opacity = "1";
        }
      }
    } else {
      markerBotAfter[0].classList.remove("my-marker3");
      for (var i = 0; i < myNavBottom.length; i++) {
        if (myNavBottom[i].className == "fourth") {
          myNavBottom[i].style.display = "none";
          myNavBottom[i].style.opacity = "0";
        }
      }
    }
    if (
      (document.body.scrollTop >= 5200) ||
      (document.documentElement.scrollTop >= 5200)
    ) {
      markerBotAfter[0].classList.add("my-marker4");
    } else {
      markerBotAfter[0].classList.remove("my-marker4");
    }
  }






  // if ((document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 350) || (document.body.scrollTop >= 0 && document.body.scrollTop < 350)) {
  //       for (var i = 0; i < myNavBottom.length; i++) {
  //         if (myNavBottom[i].className == "first") {
  //           myNavBottom[i].style.display = "flex";
  //           myNavBottom[i].style.opacity = "1";
  //         }
  //       }
  //       console.log("g")
  //   } else {
  //       for (var i = 0; i < myNavBottom.length; i++) {
  //         if (myNavBottom[i].className == "first") {
  //           myNavBottom[i].style.display = "none";
  //           myNavBottom[i].style.opacity = "0";
  //         }
  //       }
  //     }

  // console.log(document.documentElement.scrollTop)
}