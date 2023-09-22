// scroll animation slideleft and right for the containerseries
// ---------------------------------------------------------------------
let titleSeries = document.querySelectorAll(".containerSeriesBox");

let objectOptions = {
  root: null,
  threshold: 0.0,
  rootMargin: "50px",
};

let triggeredOne = false;

titleSeries.forEach((title) => {
  let sectionOberserver = new IntersectionObserver(
    titleCallBackFunction,
    objectOptions
  );
  sectionOberserver.observe(title);
});

function titleCallBackFunction(titleEntries) {
  titleEntries.forEach((titleEntry) => {
    let titleSerie = titleEntry.target.querySelector("h2.titleSeries");
    if (titleEntry.isIntersecting) {
      titleSerie.classList.add("slideInFromUpTwo");
    } else {
      titleSerie.classList.remove("slideInFromUpTwo");
    }
  });
}
// ---------------------------------------------------------------------

// ANALOG VS DIGITAL
// ---------------------------------------------------------------------
document.addEventListener("click", function (event) {
  event.preventDefault();
  let analogContainer = document.getElementById("analog");
  let digitalContainer = document.getElementById("digital");
  let navTitle = document.getElementById("name");
  if (event.target.classList.contains("aToggle")) {
    if (analogContainer.classList.contains("containerSeries")) {
      analogContainer.classList.remove("containerSeries");
      analogContainer.classList.add("hidden");
      navTitle.innerHTML = "GAUTHIER TAMPERE";
      navTitle.style.color = "#f8f8f8";
    } else {
      digitalContainer.classList.remove("containerSeries");
      digitalContainer.classList.add("hidden");
      analogContainer.classList.remove("hidden");
      analogContainer.classList.add("containerSeries");
      navTitle.innerHTML = "ANALOG";
      navTitle.style.color = "#8ecccc";
    }
  } else if (event.target.classList.contains("dToggle")) {
    event.preventDefault();
    if (digitalContainer.classList.contains("containerSeries")) {
      digitalContainer.classList.remove("containerSeries");
      digitalContainer.classList.add("hidden");
      navTitle.innerHTML = "GAUTHIER TAMPERE";
      navTitle.style.color = "#f8f8f8";
    } else {
      analogContainer.classList.remove("containerSeries");
      analogContainer.classList.add("hidden");
      digitalContainer.classList.remove("hidden");
      digitalContainer.classList.add("containerSeries");
      navTitle.innerHTML = "DIGITAL";
      navTitle.style.color = "#8ecccc";
    }
  }
});
// ---------------------------------------------------------------------

//video settings:
// ------------------------------------------------------
document.getElementById("video").playbackRate = 0.4;
document.getElementById("video").controls = false;
// ------------------------------------------------------

// scroll - appear animation
// --------------------------------------------
let containerBoxes = document.querySelectorAll(".containerSeriesBox");

let objOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: "-0px",
};

let triggered = false;

containerBoxes.forEach((box) => {
  let sectionObserver = new IntersectionObserver(callbackFunction, objOptions);
  sectionObserver.observe(box);
});

function callbackFunction(entries) {
  entries.forEach((entry) => {
    let slideThisRight = entry.target.querySelector(".slideThisRight");
    let slideThisLeft = entry.target.querySelector(".slideThisLeft");
    let cameraRollPics = entry.target.querySelector(".cameraRoll");

    if (entry.isIntersecting) {
      slideThisLeft.classList.add("slideLeft");
      slideThisRight.classList.add("slideRight");
      cameraRollPics.classList.add("slideInFromUp");
    } else {
      slideThisLeft.classList.remove("slideLeft");
      slideThisRight.classList.remove("slideRight");
      cameraRollPics.classList.remove("slideInFromUp");
    }
  });
}
// --------------------------------------------

// ONLOAD APPEAR
// ---------------------------------------------------------------------

function animationAppear() {
  console.log("hello");
  let divTitle = document.querySelector(".containerTitle");
  divTitle.classList.add("appear");
}
// ---------------------------------------------------------------------

// mouseover cameraroll animation
// --------------------------------------

let containerSeriesBoxes = document.querySelectorAll(".containerSeriesBox");

containerSeriesBoxes.forEach((containerSeriesBox) => {
  let cameraRollPhoto = containerSeriesBox.querySelectorAll(".focus");
  let getMainPhoto = containerSeriesBox.querySelector(".boxRight");

  cameraRollPhoto.forEach((photo) => {
    photo.addEventListener("mouseover", function () {
      let getPhotoCss = window.getComputedStyle(photo);
      let getFullImgUrl = getPhotoCss.getPropertyValue("background-image");
      console.log(getFullImgUrl);
      getMainPhoto.style.backgroundImage = getFullImgUrl;
    });
  });
});

// --------------------------------------

// redirect links when clicking on the photos
// --------------------------------------
let peopleSeries = document.getElementById("boxMountains");
peopleSeries.onclick = function () {
  window.location.href = "Analog/people.html";
};

let analogSeries = document.getElementById("boxSki");
analogSeries.onclick = function () {
  window.location.href = "Analog/analog.html";
};

let oceanSeries = document.getElementById("boxOcean");
oceanSeries.onclick = function () {
  window.location.href = "Analog/ocean.html";
};

let digitalVanSeries = document.getElementById("boxDigital");
digitalVanSeries.onclick = function () {
  window.location.href = "Digital/vanlife.html";
};

let digitalPortraitSeries = document.getElementById("boxDigitalTwo");
digitalPortraitSeries.onclick = function () {
  window.location.href = "Digital/portrait.html";
};

let digitalPhotographySeries = document.getElementById("boxDigitalThree");
digitalPhotographySeries.onclick = function () {
  window.location.href = "Digital/photography.html";
};

// --------------------------------------
// redirect when clicking contact span
// --------------------------------------
let contact = document.getElementById("contact");
contact.onclick = function() {
  window.location.href = "./contact.html"
}