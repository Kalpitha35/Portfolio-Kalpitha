import { animate, AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const Skills = () => {
    const [openCards, setOpenCards] = useState([false]);

    const toggleCard = (index) => {
        setOpenCards(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className="container py-5" id="Skills">
            <h1 className="text-center fw-bolder ">SKILLS</h1>
            <div className="row g-4">

                <motion.div data-aos="zoom-in-down" onClick={() => toggleCard(0)} className="col-lg-4 col-md-6">
                    <motion.div className="card border text-primary text-center rounded shadow-sm p-2">
                        <motion.h5 className="">REACT  <br />
                        <img className="img-fluid mt-2" style={{ maxWidth: '7rem', height:'4rem'  }} src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="React" />
              </motion.h5>
                        <AnimatePresence>
                            {openCards[0] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center"
                                >
                                    {/* <img className="img-fluid mb-3" style={{ maxWidth: '4rem' }} src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="React" /> */}
                                    <p style={{color:'deeppink'}} className=" small">
                                        React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

                <motion.div data-aos="zoom-in-down" onClick={() => toggleCard(2)} className="col-lg-4 col-md-6">
                    <motion.div className="card border text-primary text-center rounded shadow-sm p-2">
                        <motion.h5 className="">EXPRESS  <br />
                        <img className="img-fluid mt-2" style={{ maxWidth: '9rem', height:'4rem'  }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-O1b4c7fPwAOfsNS5ssD7Y00f2EjRJKxS72pltX9EVG21nNbWm5NeR228ZQ06OJbFmI&usqp=CAU" alt="Express" />
                        </motion.h5>
                        <AnimatePresence>
                            {openCards[2] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center"
                                >
                                   
                                    <p className="text-pink small">
                                        Express is a fast and minimalist web framework for Node.js that supports web and mobile applications, APIs, and middleware.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

                <motion.div data-aos="zoom-in-down" onClick={() => toggleCard(6)} className="col-lg-4 col-md-6">
                    <motion.div className="card border text-primary text-center rounded shadow-sm p-2">
                        <motion.h5 className="">NODE JS <br />
                        <img className="img-fluid mt-2" style={{ maxWidth: '7rem', height:'4rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeGDBXAWQ6sQtJ2fwrwL4FABSJBv9bZb6txFu9BhlCiPAPFNbv8prxBgioD0LNZKdW0o&usqp=CAU" alt="Node.js" />
                        </motion.h5>
                        <AnimatePresence>
                            {openCards[6] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center"
                                >
                                    
                                    <p className="text-pink small">
                                        Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

                <motion.div data-aos="zoom-in-down" onClick={() => toggleCard(7)} className="col-lg-4 col-md-6">
                    <motion.div className="card border text-primary text-center rounded shadow-sm p-2">
                        <motion.h5 className="">Mongo DB <br />
                        <img className="img-fluid mt-2" style={{ maxWidth: '7rem', height:'4rem'  }} src="https://media.licdn.com/dms/image/C5612AQG77DO3h9v3Dg/article-cover_image-shrink_720_1280/0/1627563122351?e=2147483647&v=beta&t=iSkYGJJMDBn-bu0lswDnumKyuUn9B8TTmDuOOih6hZc" alt="MongoDB" />
                        </motion.h5>
                        <AnimatePresence>
                            {openCards[7] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center"
                                >

                                    <p className="text-pink small">
                                        MongoDB is the world's most popular document database that supports transactions, rich search, and AI.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

                <motion.div data-aos="zoom-in-down" onClick={() => toggleCard(8)} className="col-lg-4 col-md-6">
                    <motion.div className="card border text-primary text-center rounded shadow-sm p-2">
                        <motion.h5 className="">TAILWIND CSS <br />
                        <img className="img-fluid mt-2" style={{ maxWidth: '7rem', height:'4rem'  }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BBuHmFiEOHb12an7ErH8O11qc31HmbtLKA&s" alt="TailwindCSS" />
                        </motion.h5>
                        <AnimatePresence>
                            {openCards[8] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center"
                                >
                                   
                                    <p className="text-pink small">
                                        Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

                <motion.div data-aos="zoom-in-down" onClick={() => toggleCard(9)} className="col-lg-4 col-md-6">
                    <motion.div className="card border text-primary text-center rounded shadow-sm p-2">
                        <motion.h5 className="">BOOTSTRAP <br />
                        <img className="img-fluid mt-2" style={{ maxWidth: '7rem', height:'4rem'  }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvD_eGgBXkruGyfn6_oXRrH1AM_07sB9glQg&s" alt="Bootstrap" />

                        </motion.h5>
                        <AnimatePresence>
                            {openCards[9] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center"
                                >
                                    <p className="text-pink small">
                                        Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

                <motion.div data-aos="zoom-in-down" onClick={() => toggleCard(10)} className="col-lg-4 col-md-6">
                    <motion.div className="card border text-primary text-center rounded shadow-sm p-2">
                        <motion.h5 className="">CSS <br />
                        <img className="img-fluid mt-1" style={{ maxWidth: '7rem', height:'4rem'  }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkMYb955fj7IRiw-8g6gmn5GoZzKni1Kv8g&s" alt="Bootstrap" />
                        </motion.h5>
                        <AnimatePresence>
                            {openCards[10] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center"
                                >
                                    
                                    <p className="text-pink small">
                                    CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

                <motion.div data-aos="zoom-in-down" onClick={() => toggleCard(11)} className="col-lg-4 col-md-6">
                    <motion.div className="card border text-primary text-center rounded shadow-sm p-2">
                        <motion.h5 className="">HTML <br />
                        <img className="img-fluid mt-2" style={{ maxWidth: '7rem', height:'4rem'  }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVS5wOrF1fXHLGU-HDaTvt1LZG0ZF2aRmIEw&s" alt="Bootstrap" />
                        </motion.h5>
                        <AnimatePresence>
                            {openCards[11] && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center"
                                >
                                    
                                    <p className="text-pink small">
                                    HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting hypertext documents on the World Wide Web.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
