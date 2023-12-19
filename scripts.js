document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetSection = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Swipe handling for slider
    var touchStartX = 0;
    var touchEndX = 0;

    $('.slider').on('touchstart', function (e) {
        touchStartX = e.originalEvent.touches[0].clientX;
    });

    $('.slider').on('touchend', function (e) {
        touchEndX = e.originalEvent.changedTouches[0].clientX;

        if (touchStartX - touchEndX > 50) {
            // Swipe left
            plusSlides(1);
        } else if (touchEndX - touchStartX > 50) {
            // Swipe right
            plusSlides(-1);
        }
    });

    // Automatic slideshow
    var slideIndex = 0;
    showSlides();

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000); // Change slide every 4 seconds
    }
});
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}