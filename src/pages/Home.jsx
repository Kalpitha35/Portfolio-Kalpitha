import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'

const Home = () => {
  const [typewriter] = useTypewriter({
    words: ['KALPITHA CJ'],
    loop:{},
    typeSpeed:200,
    deleteSpeed:200
  })
  return (
    <div style={{height:'100vh'}} className="container mt-4">
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex align-items-center flex-column mt-5 border shadow p-2">
           
              <h2>HELLO!</h2>
              <h1>I AM <span style={{color:'orange'}}>{typewriter}</span></h1>
              <h6 style={{color:'orange'}}>- MERN STACK DEVELOPER</h6>
           
            <p>Talented MERN STACK Developer driven by the desire to design and develop clean,  websites.</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className='mt-4'>
            <img className='img-fluid mt-2' src="https://cdn.dribbble.com/users/1912990/screenshots/6496981/web_developing.gif" alt="" />
          </div>       
        </div>
      </div>
    </div>
  )
}

export default Home