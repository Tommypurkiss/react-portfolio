import React from 'react'

import './MainContent.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function MainContent() {



    return (
        <div className="Main-content-wrapper">

            <div className="welcome-section">
                <h1 className="h1-one">
                    hello.
                </h1>
                <h1 className="h1-two">
                    hello.
                </h1>
            </div>
            <div className="project-section">
                <h2 id="projects-title">Projects</h2>

                <Router>
                <div className="project-types-titles">

                    <Link to="/all" className="proj-link">All</Link>

                    <Link to="/web" className="proj-link">Web</Link>

                    <Link to="/mobile" className="proj-link">Mobile</Link>

                </div>
                
                <Switch>
                <div className="projects-container">
                    
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

            </div>
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

