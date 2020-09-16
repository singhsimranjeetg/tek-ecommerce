function setUpEvents() {
  var slider = document.getElementById("slider");
  var active = document.getElementById("active");
  var line1 = document.getElementById("line1");
  var line2 = document.getElementById("line2");
  var line3 = document.getElementById("line3");
  var line4 = document.getElementById("line4");

  function moveLine1() {
    slider.style.transform = "translateX(0)";
    active.style.top = "0";
  }

  function moveLine2() {
    slider.style.transform = "translateX(-25%)";
    active.style.top = "25%";
  }

  function moveLine3() {
    slider.style.transform = "translateX(-50%)";
    active.style.top = "50%";
  }

  function moveLine4() {
    slider.style.transform = "translateX(-75%)";
    active.style.top = "75%";
  }

  line1.onclick = function line1Slide() {
    moveLine1();
  };

  line2.onclick = function line2Slide() {
    moveLine2();
  };

  line3.onclick = function line3Slide() {
    moveLine3();
  };

  line4.onclick = function line4Slide() {
    moveLine4();
  };

  function autoSlide() {
    setTimeout(() => {
      moveLine1();
    }, 1000);

    setTimeout(() => {
      moveLine2();
    }, 2000);

    setTimeout(() => {
      moveLine3();
    }, 6000);

    setTimeout(() => {
      moveLine4();
    }, 8000);

    setTimeout(() => {
      moveLine3();
    }, 10000);

    setTimeout(() => {
      moveLine2();
    }, 12000);

    setTimeout(() => {
      moveLine1();
    }, 14000);
  }
  autoSlide();
  setInterval(() => {
    autoSlide();
  }, 15000);
}
window.onload = function () {
  console.log("from onload");
};

$(document).ready(function () {
  console.log("ready!");
  setUpEvents();
});
