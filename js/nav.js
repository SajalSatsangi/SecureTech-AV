const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <div class="logo">
            <img src="img/logo.png" class="brand-logo" alt="">
            <div class="logo-name">
                <h1>SECURETECH AV</h1>
                <h1> DESIGNS PRIVATE LIMITED</h1>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Home</a></li>
            <li class="link-item"><a href="about.html" class="link">About Us</a></li>
            <li class="link-item"><a href="solutions.html" class="link">Solutions</a></li>
            <li class="link-item"><a href="contact.html" class="link">Contact Us</a></li>
        </ul>
    </div>
    `;
}

createNav();