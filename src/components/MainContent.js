import React from 'react'


import './MainContent.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function MainContent() {

    // function moveHelloTitles() {
    //     const bottomHello = document.getElementsByClassName('bottom-hello');
    //     const topHello = document.getElementsByClassName('top-hello');


    // }

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
                        {/* I'm Tommy, a Frontend Developer based in the United Kingdom. I like to design and create beautiful websites, that perform well with a focus on responsive design.  */}
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

                        <img src={require('../androidweather.png')} alt="Android Weather"></img>

                    </div>
                    <div className="project-card ">
                        {/* android onlynote */}

                        <img src={require('../androidonlynote.png')} alt="Android Onlynote"></img>
                    </div>
                </div>

            </section>

            <hr></hr>

            <section className="skills-section">
                <div className="skills-title" id="skills-title">
                    <h2>What I can do</h2>
                </div>
            </section>

            {/* <div className="welcome-section">
                <h1 className="h1-one">
                    hello.
                </h1>
                <h1 className="h1-two top-hello">
                    hello.
                </h1>
                <h1 className="h1-three bottom-hello">
                    hello.
                </h1>
                <div className="welcome-text">
                    <div className="text-one">
                        <p>

                        </p>
                    </div>
                    <div className="text-two">
                        <p>

                        </p>
                    </div>
                </div>
            </div> */}



            {/* <div className="project-section">
                <h2 id="projects-title">Projects</h2>

                <Router>
                <div className="project-types-titles">

                    <Link to="/all" className="proj-link">All</Link>

                    <Link to="/web" className="proj-link">Web</Link>

                    <Link to="/mobile" className="proj-link">Mobile</Link>

                </div>
                
                <Switch>
                <div className="projects-container" >
                    <Route exact path="/" render={() => (
                        <AllComponent />
                    )} />
                    <Route path="/all">
                        <AllComponent />
                    </Route>
                    <Route path="/web">
                        <WebComponent />
                    </Route>
                    <Route path="/mobile">
                        <MobileComponent />
                    </Route>
                </div> 
                </Switch>

                </Router>

            </div>

            <div className="about-section">

            </div> */}
        </div>
    )
}




function AllComponent() {
    return(
        <div>

            <div className="projects-container">

                <div className="test web ">
                    web
                    </div>
                <div className="test web ">
                    web two
                </div>
                <div className="test android ">
                    android
                </div>
                <div className="test android ">
                    android two
                </div>
                {/* ADD NEW PROJECTS AS NEEDED */}
            </div>
        </div>
    );
}

function WebComponent() {
    return(
        <div>

            <div className="projects-container">

                <div className="test web ">
                    web
                </div>
                <div className="test web ">
                    web two
                </div>
                {/* ADD NEW PROJECTS AS NEEDED */}

            </div>
        </div>
    );
}

function MobileComponent() {
    return(
        <div>

            <div className="projects-container">

                <div className="test android ">
                    android
                </div>
                <div className="test android ">
                    android two
                </div>
                {/* ADD NEW PROJECTS AS NEEDED */}

            </div>
        </div>
    );
}

