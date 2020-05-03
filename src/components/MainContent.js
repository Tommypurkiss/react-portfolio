import React from 'react'


import './MainContent.scss'



export default function MainContent() {



    return (
        <div className="Main-content-wrapper">

            <section className="welcome-section">
                <div className="welcome-title">
                    <h1>Hello.</h1>
                </div>
                <div className="welcome-text-container row">
                    <div className="text-one">
                        <p>
                            I'm Tommy, a Frontend Developer based in the United Kingdom. I like to design and create beautiful websites, that perform well with a focus on responsive design. 
                        </p>
                    </div>
                    <div className="text-two">
                        <p>
                            I also have worked with some mobile programming in Android and iOS. I'm always keen to learn new skills as a Developer.
                        </p>
                    </div>
                    <div className="text-three">
                        <p>
                        Have a project idea you want to work on? Get in touch so we can work together to create something amazing.
                        </p>
                    </div>
                </div>
            </section>

            <hr></hr>

            <section className="project-section">
                <div className="project-title" id="projects-title">
                    <h2>Some of my work</h2>
                </div>
                <div className="projects-cards-container row">
                    {/* ADD MORE AS NECESSARY */}
                    <div className="project-card">
                        {/* react portfolio */}
                        
                        <img src={require('../reactportfolio.png')} className="react-portfolio-img" alt="React Portfolio"></img>

                    </div>
                    <div className="project-card">
                        {/* android weather */}
                        <a href="https://play.google.com/store/apps/details?id=com.tommypurkissdev.weather" target="_blank">
                            <img src={require('../androidweather.png')} alt="Android Weather"></img>
                        </a>
                    </div>
                    <div className="project-card">
                        {/* android onlynote */}
                        <a href="https://play.google.com/store/apps/details?id=tommypurkissdev.simplenotes" target="_blank">
                            <img src={require('../androidonlynote.png')} alt="Android Onlynote"></img>
                        </a>
                    </div>
                </div>

            </section>

            <hr></hr>

            <section className="skills-section" id="skills-section">
                <div className="skills-title" id="skills-title">
                    <h2>What I can do</h2>
                </div>
                <div className="skills-container row ">
                    <div className="skills-card">
                        <div className="skills-img">
                            <img src={require('../imgs/web-tech-logos/html5.svg')}></img>
                        </div>
                        <div className="skills-text">
                            HTML5
                        </div>
                    </div>

                    <div className="skills-card">
                        <div className="skills-img">
                            <img src={require('../imgs/web-tech-logos/css-5.svg')}></img>

                        </div>
                        <div className="skills-text">
                            CSS3 / Sass
                        </div>
                    </div>

                    <div className="skills-card">
                        <div className="skills-img">
                            <img src={require('../imgs/web-tech-logos/javascript-4.svg')}></img>
                        </div>
                        <div className="skills-text">
                            Javascript / jQuery
                        </div>
                    </div>

                    <div className="skills-card">
                        <div className="skills-img">
                            <img src={require('../imgs/web-tech-logos/react-2.svg')}></img>
                        </div>
                        <div className="skills-text">
                            ReactJS
                        </div>
                    </div>

                    <div className="skills-card">
                        <div className="skills-img">
                            <img src={require('../imgs/web-tech-logos/firebase-1.svg')}></img>
                        </div>
                        <div className="skills-text">
                            Firebase
                        </div>
                    </div>

                    <div className="skills-card">
                        <div className="skills-img">
                            <img src={require('../imgs/web-tech-logos/adobe-xd-1.svg')}></img>
                        </div>
                        <div className="skills-text">
                            Adobe XD
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}



