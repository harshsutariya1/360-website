document.addEventListener("DOMContentLoaded", function () {
    // Get the "Contact Us" link
    var contactLink = document.querySelector('.CU');

    // Add a click event listener to the link
    contactLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Scroll smoothly to the contact section
        document.querySelector('#contactUs').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// _______________________________________________________ //
document.addEventListener("DOMContentLoaded", function () {
    // Get the "Contact Us" link
    var foundersLink = document.querySelector('.AU');

    // Add a click event listener to the link
      foundersLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Scroll smoothly to the founders section
      
        document.querySelector('#founders').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// _______________________________________________________ //

// _______________________________________________________ //

document.addEventListener("DOMContentLoaded", function () {
    var backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function () {
        scrollToTop();
    });

    function scrollToTop() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentScroll - currentScroll / 8);
        }
    }
});

// __________________________________________________ //
const form = document.querySelector("form");
// const form = document.getElementById("contactForm");
function sendEmail(){
  console.log("sending email");
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "harshsutariya77471@gmail.com",
      Password : "3F3E3D836FEA5290E51795419D33710BC4A6",
      To : 'harshsutariya77471@gmail.com',
      From : document.getElementById("email").value,
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
  console.log("email is sent");
}
// ______________________________________________________________ //
// ______________________________________________________________ //
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);