const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <nav class="navbar">
    <!-- LOGO -->
    <div class="logo">
        <img src="img/logo.png" class="brand-logo" alt="">
        <div class="logo-name">
            <p>SecureTech AV Designs</p>
        </div>
    </div>

    <!-- NAVIGATION MENU -->
    <ul class="nav-links">

      <!-- USING CHECKBOX HACK -->
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      <!-- NAVIGATION MENUS -->
      <div class="menu">
      <li class="link-item"><a href="index.html" class="link">Home</a></li>
      <li class="link-item"><a href="about.html" class="link">About Us</a></li>
      <li class="link-item"><a href="solutions.html" class="link">Solutions</a></li>
      <li class="link-item"><a href="contact.html" class="link">Contact Us</a></li>
      </div>
    </ul>
  </nav>
    `;
}

createNav();