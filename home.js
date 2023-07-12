var slider = document.getElementsByName("homeSec");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("homeSlide");
var count = 1;
var items = slideList.querySelectorAll(".list-homer").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
    slideWidth = slider.offsetWidth;
});

var prevSlide = function() {
    if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
    }
    
        else if(count = 1) {
              count = items - 1;
              slideList.style.left = "-" + count * sliderWidth + "px";
              count++;
        };
};


var nextSlide = function() {
    if(count < items) {
        slideList.style.left = "-" + count * + "px"; //slideWidth 
        count++;
    }

     else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
     }
};

next.addEventListener("click", function() {
     nextSlide();
});

prev.addEventListener("click", function() {
    prevSlide();
});

setInterval(function() {
    nextSlide()
}, 5000);

window.onload= function() {
    responsiveSlider();
};

var responsiveSlider = function() {

    var slider = document.getElementById("homeSec");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("homeSlide");
    count = 1;
    var items = slideList.querySelectorAll(".list-homer").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function() {
        if(count > 1){
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }

        else if(count = 1){
            count= items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    var nextSlide = function() {
        if(count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }

         else if(count = items) {
            slideList.style.left = "0px";;
            count = 1;
         }
    };

    next.addEventListener("click", function() {
        nextSlide();
    });

    prev.addEventListener("click", function() {
        prevSlide();
    });

    setInterval(function() {
        nextSlide()
    }, 8000)
};

window.onload = function() {
    responsiveSlider();
};

  const text = document.getElementById("heading");

  const prog = 'Buy all you need on Jeagwad';
  let idx = 1;

  setInterval(writeText, 150);

  function writeText() {
    text.innerHTML = prog.slice(0, idx);
    idx++;
    if(idx > prog.length) {
        idx = 1;
    }
  }

   
