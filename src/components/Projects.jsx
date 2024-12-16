import React, { useState,useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import foodWebsite from '../images/Food-Order.png';
import chatApp from '../images/Chat App.png';
import Employee from '../images/Employee.png';
import ParallaxReact from '../images/Parallax-react.png';
import Ecart from '../images/ECart.png';
import CounterApp from '../images/Counter-App.png';
import Mediaplayer from '../images/Mediaplayer.png';
import Amazon from '../images/Amazon.png';
import Hospital from '../images/Hospital.png';
import Mobile from '../images/Mobile.png';
import Calculator from '../images/Calculator.png';
import Game from '../images/Game.png';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';


const projectsData = [
  {
    title: "Online Food Ordering Website",
    imgSrc: foodWebsite,
    githubLink: "https://github.com/Kalpitha35/Final_MERN_Project_Food_Website",
    liveLink: "https://final-mern-project-food-website.vercel.app/",
  },
  {
    title: "Real Time Chat App",
    imgSrc: chatApp,
    githubLink: "https://github.com/Kalpitha35/ChatApp_FrontEnd",
    liveLink: "https://chat-app-front-end-two.vercel.app/",
  },
  {
    title: "Employee Management App",
    imgSrc: Employee,
    githubLink: "https://github.com/Kalpitha35/Employee_Frontend",
    liveLink: "https://employee-frontend-inky.vercel.app/",
  },
  
  {
    title: "Media Player",
    imgSrc: Mediaplayer,
    githubLink: "https://github.com/Kalpitha35/mediaPlayer_Frontend",
    liveLink: "https://media-player-frontend-chi-azure.vercel.app/",
  },{
    title: "Memory Card Game",
    imgSrc: Game,
    githubLink: "https://github.com/Kalpitha35/memory-card-game",
    liveLink: "https://memory-card-game-kalpitha.netlify.app/",
  },
  {
    title: "Parallax Website-React",
    imgSrc: ParallaxReact,
    githubLink: "https://github.com/Kalpitha35/parallaxWebsite_React_Flower",
    liveLink: "https://parallax-website-react-flower.vercel.app/",
  },
  {
    title: "E-Cart",
    imgSrc: Ecart,
    githubLink: "https://github.com/Kalpitha35/E-Cart-Website-React",
    liveLink: "https://e-cart-website-react.vercel.app/",
  },
  {
    title: "Counter App",
    imgSrc: CounterApp,
    githubLink: "https://github.com/Kalpitha35/counterAppRedux",
    liveLink: "https://counter-app-redux-psi-blush.vercel.app/",
  },{
    title: "Amazon Clone",
    imgSrc: Amazon,
    githubLink: "https://github.com/Kalpitha35/amazon-colne-site",
    liveLink: "https://amazon-colne-site.vercel.app/",
  },{
    title: "Static Hospital Website",
    imgSrc: Hospital,
    githubLink: "https://github.com/Kalpitha35/Hospital-Site",
    liveLink: "https://hospitalwebsite-kalpitha.netlify.app/",
  },{
    title: "Online Mobile Shopping - Figma",
    imgSrc: Mobile,
    githubLink: "https://github.com/Kalpitha35/Mobile-Shopping",
    liveLink: "https://mobile-shopping-sigma.vercel.app/",
  },{
    title: "Simple Calculator",
    imgSrc: Calculator,
    githubLink: "https://github.com/Kalpitha35/calculator",
    liveLink: "https://calculator-calc-simple.netlify.app/",
  }

 

];

const Projects = () => {


  const itemsPerPage = 6; // Number of projects per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  useEffect(() => {
    AOS.init();
  }, [])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedProjects = projectsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div id='Projects' className='container my-3'>
      <h1 className='text-center'>MY PROJECTS</h1>
      <Row className='mt-3'>
        {paginatedProjects.map((project, index) => (
          <Col data-aos="fade-down" className='mb-3' sm={12} md={6} lg={4} key={index}>
            <Card className='btn shadow'>
              <Card.Img
                height={'150px'}
                width={'120px'}
                variant="top"
                src={project.imgSrc}
              />
              <Card.Body style={{height:'150px'}}>
                <Card.Title className='text-warning'>{project.title}</Card.Title>
                <a target="_blank" href={project.githubLink}>
                  <i style={{ fontSize: '25px' }} className="fa-brands fa-github me-3"></i>
                </a>
                <a target="_blank" href={project.liveLink}>
                  <i style={{ fontSize: '25px' }} className="fa-solid fa-link"></i>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mt-3">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`btn btn-primary mx-1 ${page === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
