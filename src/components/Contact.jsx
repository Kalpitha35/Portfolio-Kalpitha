import React from 'react'

const Contact = () => {
  return (
    <section id="Contacts">
    <div class="section-head">
        <h2 class="main-head text-center">CONTACTS</h2>
    </div>
    <div class="icon-collection">
        {/* <!-- linkedin --> */}
        <div class="icon">
            <a target="_blank" href="www.linkedin.com/in/kalpitha-c-j"><i class="fa-brands fa-linkedin-in brands"></i></a>
        </div>
        {/* <!-- github --> */}
        <div class="icon">
            <a target="_blank" href="https://github.com/Kalpitha35/"><i class="fa-brands fa-github brands"></i></a>
        </div>
       
        {/* <!-- facebook --> */}
        <div class="icon">
            <a target="_blank" href="https://www.facebook.com/kalpitha.kappu?mibextid=ZbWKwL"><i class="fa-brands fa-facebook-f brands"></i></a>
        </div>
        {/* <!-- instagram --> */}
        <div class="icon">
            <a target="_blank" href="https://www.instagram.com/kalpitha_kappu/profilecard/?igsh=NHAydnJpM3hoaHdm"><i class="fa-brands fa-instagram brands"></i></a>
        </div>
        {/* <!-- mail --> */}
        <div class="icon">
            <a target="_blank" href="https://www.google.co.in/"><i class="fa-solid fa-envelope brands "></i></a>
        </div>
    </div>
</section>
  )
}

export default Contact