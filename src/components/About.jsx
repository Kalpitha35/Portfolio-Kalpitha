import React, { useEffect } from 'react'
import Resume from '../assets/KalpithaCJ-MERN-Resume.pdf'
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div id='About' style={{marginTop:'-50px'}} className='container'>
        <h1 className="text-center fw-bolder">ABOUT ME</h1>
        <div className="row">
            <div data-aos="fade-right"  className="col-lg-5 mt-4">
                <img height={'400px'} width={'400px'} src="https://media.licdn.com/dms/image/D5612AQGOmwfIE5mlWA/article-cover_image-shrink_720_1280/0/1674617947228?e=2147483647&v=beta&t=FTU_isQ6VYfV5D_ueFHPWvT8ZqgDeJG3yr8Mi8lpfk0" alt="" />
            </div>
            <div className="col-lg-6">
              
                    <div data-aos="fade-left" className='d-flex flex-column border shadow p-2 mt-4'>
                    <h1>KALPITHA CJ</h1>
                    <h3 className='text-warning'>MERN STACK DEVELOPER</h3>
                    <p>I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Express.js and MongoDB. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
                    <h5>BCA GRADUATE- Bharathiar University</h5>
                    <a href={Resume} download="Resume">
                    <button className='download-cv text-sm px-2 py-2 border rounded border-blue-900 mx-5 rounded-md bg-blue-800 '>Download CV</button >
                    </a>
                </div>
                    </div>
                </div>
                
            </div>
      
    
  )
}

export default About