import React from 'react'

const Footer = () => {
  return (
    <footer style={{fontSize:'20px'}} className='mt-5 text-center fw-bolder'>
    <p id="copyright"> &copy; My portfolio Website - December 2024, All Rights Reserved to &reg; Kalpitha C J</p>
    <div style={{ position: 'absolute', right: '20px', backgroundColor:'blue' }} class="icon up-arrow">
        <a href="#header"><i class="fa-solid fa-angle-up brands"></i></a>
    </div>
    </footer>
  )
}

export default Footer