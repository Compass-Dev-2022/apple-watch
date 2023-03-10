feather.replace();
let x = window.matchMedia("(max-width: 640px)");
console.log("x", x);
let toggle = document.querySelector(".toggle");
let toggle1 = document.querySelector(".toggle1");
let toggle2 = document.querySelector(".toggle2");
let toggle3 = document.querySelector(".toggle3");
let toggle4 = document.querySelector(".toggle4");
let toggle5 = document.querySelector(".toggle5");
let watchCircle = document.querySelector(".watchCircle");
let watchImages = document.querySelectorAll(".watchCircle img");
let largeWatch = document.querySelector(".large-watch");
let toggleColors = document.querySelectorAll("section .colors li");
let circlePath = document.querySelector(".circle");
let awaits = document.querySelector(".awaits");
let learn = document.querySelector(".learn");
let angle = 210;
let dangle = 360 / 6;

let resize_ob = new ResizeObserver(function (entries) {
  let rect = entries[0].contentRect;
  let width = rect.width;
  let toggleWatchesImagesObj = {
    watchCircle: "translate(-50%, -50%) rotate(0deg)",
    watchTransition: "all 0.8s linear",
    rotate: [
      `rotate(270deg)  translate(${width / 2}px) rotate(-271deg)`,
      `rotate(330deg)  translate(${width / 2}px) rotate(-332deg)`,
      `rotate(390deg)  translate(${width / 2}px) rotate(-390deg)`,
      `rotate(450deg)  translate(${width / 2}px) rotate(-448deg)`,
      `rotate(510deg)  translate(${width / 2}px) rotate(-511deg)`,
      `rotate(570deg)  translate(${width / 2}px) rotate(-571deg)`,
    ],
  };
  let toggleWatchesImageObj1 = {
    watchCircle: `translate(-50%, -50%) rotate(-60deg)  `,
    watchTransition: `all 0.8s linear`,
    rotate: [
      `rotate(270deg)  translate(${width / 2}px) rotate(-210deg)`,
      `rotate(330deg)  translate(${width / 2}px) rotate(-270deg)`,
      `rotate(390deg)  translate(${width / 2}px) rotate(-331deg)`,
      `rotate(450deg)  translate(${width / 2}px) rotate(-391deg)`,
      `rotate(510deg)  translate(${width / 2}px) rotate(-450deg)`,
      `rotate(570deg)  translate(${width / 2}px) rotate(-512deg)`,
    ],
  };
  let toggleWatchesImageObj2 = {
    watchCircle: `translate(-50%, -50%) rotate(-120deg)`,
    watchTransition: `all 0.8s linear`,
    rotate: [
      `rotate(270deg)  translate(${width / 2}px) rotate(-152deg)`,
      `rotate(330deg)  translate(${width / 2}px) rotate(-209deg)`,
      `rotate(390deg)  translate(${width / 2}px) rotate(-269deg)`,
      `rotate(450deg)  translate(${width / 2}px) rotate(-331deg)`,
      `rotate(510deg)  translate(${width / 2}px) rotate(-391deg)`,
      `rotate(570deg)  translate(${width / 2}px) rotate(-453deg)`,
    ],
  };
  let toggleWatchesImageObj3 = {
    watchCircle: `translate(-50%, -50%) rotate(-180deg)`,
    watchTransition: `all 0.8s linear`,
    rotate: [
      `rotate(270deg)  translate(${width / 2}px) rotate(-93deg)`,
      `rotate(330deg)  translate(${width / 2}px) rotate(-152deg)`,
      `rotate(390deg)  translate(${width / 2}px) rotate(-212deg)`,
      `rotate(450deg)  translate(${width / 2}px) rotate(-272deg)`,
      `rotate(510deg)  translate(${width / 2}px) rotate(-333deg)`,
      `rotate(570deg)  translate(${width / 2}px) rotate(-390deg)`,
    ],
  };
  let toggleWatchesImageObj4 = {
    watchCircle: `translate(-50%, -50%) rotate(-240deg)`,
    watchTransition: `all 0.8s linear`,
    rotate: [
      `rotate(270deg)  translate(${width / 2}px) rotate(-29deg)`,
      `rotate(330deg)  translate(${width / 2}px) rotate(-91deg)`,
      `rotate(390deg)  translate(${width / 2}px) rotate(-152deg)`,
      `rotate(450deg)  translate(${width / 2}px) rotate(-213deg)`,
      `rotate(510deg)  translate(${width / 2}px) rotate(-270deg)`,
      `rotate(570deg)  translate(${width / 2}px) rotate(-332deg)`,
    ],
  };
  let toggleWatchesImageObj5 = {
    watchCircle: `translate(-50%, -50%) rotate(-304deg)`,
    watchTransition: `all 0.8s linear`,
    rotate: [
      `rotate(270deg)  translate(${width / 2}px) rotate(33deg)`,
      `rotate(330deg)  translate(${width / 2}px) rotate(-24deg)`,
      `rotate(390deg)  translate(${width / 2}px) rotate(-88deg)`,
      `rotate(450deg)  translate(${width / 2}px) rotate(-146deg)`,
      `rotate(521deg)  translate(${width / 2}px) rotate(-218deg)`,
      `rotate(570deg)  translate(${width / 2}px) rotate(-267deg)`,
    ],
  };

  if (width > 310) {
    watchCircle.style.transform = toggleWatchesImagesObj.watchCircle;
    watchCircle.style.transition = toggleWatchesImagesObj.watchTransition;
    for (const toggleColor of toggleColors) {
      toggleColor.classList.remove("active");
      toggleColor.style.border = null;
      toggleColor.style.borderColor = null;
      toggleColor.style.pointerEvents = null;
    }
    toggleColors[0].style.border = "1px solid hsl(351, 72%, 55%)";
    awaits.style.color = "hsl(351, 72%, 55%)";
    largeWatch.src = "/assets/img-lg-1.svg";
  } else {
    watchCircle.style.transform = toggleWatchesImagesObj.watchCircle;
    watchCircle.style.transition = toggleWatchesImagesObj.watchTransition;
    for (const toggleColor of toggleColors) {
      toggleColor.classList.remove("active");
      toggleColor.style.border = null;
      toggleColor.style.borderColor = null;
      toggleColor.style.pointerEvents = null;
    }
    toggleColors[0].style.border = "1px solid hsl(351, 72%, 55%)";
    awaits.style.color = "hsl(351, 72%, 55%)";
    toggleColors[0].style.pointerEvents = "none";
    largeWatch.src = "/assets/img-lg-1.svg";
  }
  for (const [index] of watchImages.entries()) {
    watchImages[
      index
    ].style.transform = `${toggleWatchesImagesObj.rotate[index]}`;
  }

  // ******* Toggle addEventListener ******

  toggle.addEventListener("click", () =>
    controlAnimation(
      "/assets/img-lg-1.svg",
      "hsla(351, 72%, 55%,8%)",
      "hsl(351, 72%, 55%)",
      "toggle"
    )
  );

  toggle1.addEventListener("click", () =>
    controlAnimation(
      "/assets/img-lg-2.svg",
      "hsla(230, 5%, 24%,8%)",
      "hsl(230, 5%, 24%)",
      "toggle1"
    )
  );

  toggle2.addEventListener("click", () =>
    controlAnimation(
      "/assets/img-lg-3.svg",
      "hsla(214, 14%, 49%,8%)",
      "hsl(214, 14%, 49%)",
      "toggle2"
    )
  );

  toggle3.addEventListener("click", () =>
    controlAnimation(
      "/assets/img-lg-4.svg",
      "hsl(0, 0%, 96%)",
      "hsl(0, 0%, 90%)",
      "toggle3"
    )
  );

  toggle4.addEventListener("click", () =>
    controlAnimation(
      "/assets/img-lg-5.svg",
      "hsl(28, 21%, 82%)",
      "hsl(27, 12%, 67%)",
      "toggle4"
    )
  );

  toggle5.addEventListener("click", () =>
    controlAnimation(
      "/assets/img-lg-6.svg",
      "hsl(32, 100%, 95%)",
      "hsl(32, 45%, 50%)",
      "toggle5"
    )
  );

  // ******* Toggle addEventListener ******
  // ******* Toggle Function ******

  function controlAnimation(img, color, textColor, toggle) {
    circlePath.style.backgroundColor = color;
    learn.style.color = textColor;
    largeWatch.classList.remove("ani");
    awaits.classList.remove("slide-top");

    for (const watchImage of watchImages) {
      watchImage.style.transition = "all 0.8s linear";
    }
    largeWatch.src = img;

    setTimeout(() => {
      largeWatch.classList.add("ani");
      awaits.classList.add("slide-top");

      awaits.style.color = textColor;

      for (const watchImage of watchImages) {
        watchImage.style.transition = "all 0.8s linear";
      }
      largeWatch.src = img;
    }, 0);

    // ***** toggle Colors ******
    for (const toggleColor of toggleColors) {
      toggleColor.classList.remove("active");
      toggleColor.style.border = null;
      toggleColor.style.borderColor = null;
      toggleColor.style.pointerEvents = null;
    }

    setTimeout(() => {
      for (const toggleColor of toggleColors) {
        if (toggleColor.className === toggle) {
          toggleColor.style.border = "1px solid red";
          toggleColor.style.pointerEvents = "none";
          if (x.matches) {
            toggleColor.style.borderRadius = "13px";
          }
          toggleColor.style.borderColor = textColor;
        }
      }
    }, 0);
    // ***** toggle Colors ******

    // ******* toggle *****

    switch (toggle) {
      case "toggle":
        for (const [index] of toggleWatchesImagesObj.rotate.entries()) {
          watchImages[index].style.transform =
            toggleWatchesImagesObj.rotate[index];
        }
        watchCircle.style.transform = toggleWatchesImagesObj.watchCircle;
        watchCircle.style.transition = toggleWatchesImagesObj.watchTransition;
        break;
      case "toggle1":
        for (const [index] of toggleWatchesImageObj1.rotate.entries()) {
          watchImages[index].style.transform =
            toggleWatchesImageObj1.rotate[index];
        }
        watchCircle.style.transform = toggleWatchesImageObj1.watchCircle;
        watchCircle.style.transition = toggleWatchesImageObj1.watchTransition;
        break;
      case "toggle2":
        for (const [index] of toggleWatchesImageObj2.rotate.entries()) {
          watchImages[index].style.transform =
            toggleWatchesImageObj2.rotate[index];
        }
        watchCircle.style.transform = toggleWatchesImageObj2.watchCircle;
        watchCircle.style.transition = toggleWatchesImageObj2.watchTransition;
        break;
      case "toggle3":
        for (const [index] of toggleWatchesImageObj3.rotate.entries()) {
          watchImages[index].style.transform =
            toggleWatchesImageObj3.rotate[index];
        }
        watchCircle.style.transform = toggleWatchesImageObj3.watchCircle;
        watchCircle.style.transition = toggleWatchesImageObj3.watchTransition;
        break;
      case "toggle4":
        for (const [index] of toggleWatchesImageObj4.rotate.entries()) {
          watchImages[index].style.transform =
            toggleWatchesImageObj4.rotate[index];
        }
        watchCircle.style.transform = toggleWatchesImageObj4.watchCircle;
        watchCircle.style.transition = toggleWatchesImageObj4.watchTransition;
        break;
      case "toggle5":
        for (const [index] of toggleWatchesImageObj5.rotate.entries()) {
          watchImages[index].style.transform =
            toggleWatchesImageObj5.rotate[index];
        }
        watchCircle.style.transform = toggleWatchesImageObj5.watchCircle;
        watchCircle.style.transition = toggleWatchesImageObj5.watchTransition;
        break;
      default:
        "";
        break;
    }
  }

  // ******* Toggle Function ******
});

resize_ob.observe(watchCircle);
