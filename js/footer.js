const createFooter = () => {
    let footer = document.querySelector('.footer-main');

    footer.innerHTML = `
    <footer>
        <div class="footer-content">
            <iframe class="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.421942773989!2d77.3555313!3d28.587116100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51b9a3bb81f%3A0x806219bd741a009f!2sSECURETECH%20AV%20DESIGNS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1701089400249!5m2!1sen!2sin"
                style="opacity: 0.9;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="contact">
                <h3 class="contact-title">CONTACT</h3>
                <p>Company Address &#x3A; <span>SecureTech AV Designs Private Limited</span></p>
                <span>A&#x2010;70&#x2010;SECTOR 33 NOIDA&#x2c; NOIDA&#x2c; UTTAR PRADESH&#x2c; 201301&#x2c; INDIA</span>
                <p>Contact No. &#x3A; <span>7017247344</span></p>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=61553741201034&mibextid=LQQJ4d"><img src="img/facebook.png" class="contact-logo" alt=""></a>
                    <a href="https://instagram.com/secuetechav?utm_source=qr"><img src="img/instagram.png" class="contact-logo" alt=""></a>
                    <a href="https://www.linkedin.com/company/securetechav-designs/"><img src="img/linkedin.png" class="contact-logo" alt=""></a>
                </div>
            </div>
            <div class="logo-bottom">
                <img src="img/logo.png" class="bottom-brand-logo" alt="">
                <div class="logo-bottom-name">
                    <p>SecureTech AV</p>
                    <p> Designs Private Limited</p>
                </div>
            </div>
            <div class="about">
                <h4>ABOUT US</h4>
                <span class="description">SecureTech AV Designs Private Limited is driven by a passion for absolute
                    technology. Our company is a sound unit comprising eminent audio engineers & top of the league
                    infrastructure.The core strength of the company is Architectural Acoustics, sound system designing,
                    project execution with skilled workforce & post-project service.</span>
                <a class="read" href="about.html">Read More</a>
            </div>
        </div>
    </footer>
    <div class="footer-bottom">
        <span>Copyright &copy; 2023. All rights reserved.</span>
    </div>
    `;
}

createFooter();