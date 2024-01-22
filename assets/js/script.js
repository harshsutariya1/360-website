document.addEventListener("DOMContentLoaded", function () {
    // Get the "Contact Us" link
    var contactLink = document.querySelector('.nav-link');

    // Add a click event listener to the link
    contactLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Scroll smoothly to the contact section
        document.querySelector('#contactUs').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     // Get the back to top button
//     var backToTopBtn = document.getElementById('backToTopBtn');

//     // Add a scroll event listener to show/hide the button based on the scroll position
//     window.addEventListener('scroll', function () {
//         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//             backToTopBtn.style.display = 'block';
//         } else {
//             backToTopBtn.style.display = 'none';
//         }
//     });

//     // Add a click event listener to scroll smoothly to the top when the button is clicked
//     backToTopBtn.addEventListener('click', function () {
//         document.body.scrollTop = 0; // For Safari
//         document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
//     });
    
// });

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

