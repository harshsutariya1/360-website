<!DOCTYPE html>
<html lang="en">

<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta content="" name="description">
     <meta content="" name="keywords">
     <title>360&deg; Institute for Development</title>

     <link rel="stylesheet" href="assets\css\style.css">
     <link rel="stylesheet" href="assets\css\nav_style.css">
     <link rel="stylesheet" href="assets\css\buttons.css">
     <link rel="stylesheet" href="assets\css\home_style.css">
     <link rel="stylesheet" href="assets\css\about.css">
     <!-- <link rel="stylesheet" href="assets\css\mob-style.css"> -->

     <script src="assets\js\script.js"></script>
</head>

<body>
     <header>
          <?php include 'navbar.php'; ?>
     </header>

     <section id="home">
          <?php include 'home.php';?>
     </section>
     
     <section id="screen_buttons">
          <?php include 'screen_btn.php';?>
     </section>

     <section id="about">
          <?php include 'about_us.php';?>
     </section>
     <hr>

     <section id="services">
          <div class="container">
               <h2>Our Experts</h2>
          </div>
     </section>
     <hr>

     <section id="reviews">
          <div class="container">
               <h2>Our Reviews</h2>
          </div>
     </section>
     <hr>

     <section id="locations">
          <div class="container">
               <h2>Our Locations</h2>
          </div>
     </section>
     <hr>

     <section id="contactUs">
          <div class="container">
               <h2>Contact Us</h2>
               <p>Include a contact form or your contact information here.</p>
          </div>
     </section>

     <!-- Back to Top button -->
     <a id="backToTopBtn" class="back-to-top-btn"><img src="assets\images\up-arrow.png" alt="" height=50></a>

     <hr>
     <footer>
          <div class="container">
               <p>&copy; 2024 360&deg; Institute for Development. All rights reserved.</p>
          </div>
     </footer>
</body>

</html>