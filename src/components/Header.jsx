import React from 'react'

const Header = () => {
  return (
    <section id='header'>
    <nav className="navbar navbar-expand-lg bg-primary header position-fixed w-100" data-bs-theme="dark">
  <div className="container-fluid d-flex justify-content-between">
   <div> <a className="navbar-brand fw-bolder text-warning " href="#">PORTFOLIO</a></div>
   <div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link  text-warning fw-bolder" href="/">Home
              <span className="visually-hidden">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-warning fw-bolder" href="#About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-warning fw-bolder" href="#Projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-warning fw-bolder" href="#Skills">Skills</a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link text-warning fw-bolder" href="#Contacts">Contacts</a>
          </li>
         
        </ul>
        
      </div>
   </div>
  </div>
</nav></section>
  )
}

export default Header