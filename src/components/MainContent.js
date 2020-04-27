import React from 'react'

import './MainContent.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function MainContent() {


    // function showProjectCatg() {

    //     const projAll = document.getElementsByClassName("proj-catg-all");

    //     if(projAll.checked === true) {
    //         const test = document.getElementsByClassName("test");
    //         test.className 

    //     }
         
    // }


    return (
        <div className="Main-content-wrapper">
            {/* Main content 1
            <div className="test"></div>
            <h1 id="h1">
                Projects
            </h1> */}

            <div className="section-one">
                <h1 className="h1-one">
                    hello.
                </h1>
                <h1 className="h1-two">
                    hello.
                </h1>
            </div>
            <div className="section-two">
                <h2 id="projects-title">Some of my work </h2>

                <Router>
                <div className="project-types-titles">

                    <Link to="/all" className="proj-link">All</Link>

                    <Link to="/web" className="proj-link">Web</Link>

                    <Link to="/mobile" className="proj-link">Mobile</Link>

                    {/* <h3>
                        Web
                    </h3>
                    <h3>
                        Mobile
                    </h3> */}
                    {/* <a href>
                        All 
                    </a>
                    <a href>
                        Web 
                    </a>
                    <a href>
                        Mobile
                    </a> */}
                    {/* <div className="project-catg-div"> 
                        <input type="radio" className="project-catg"/>All
                    </div>
                    
                    <div>
                        <input type="radio" className="project-catg"/>Web
                    </div>
                    
                    <div>
                        <input type="radio" className="project-catg"/>Mobile
                    </div> */}
                    {/* <input type="radio" id="proj-catg-all" className="project-catg" name="project-catg"/><label for="proj-catg-all">All</label>
                    <input type="radio" id="proj-catg-web" className="project-catg" name="project-catg"/><label for="proj-catg-web">Web</label>
                    <input type="radio" id="proj-catg-mobile" className="project-catg" name="project-catg"/><label for="proj-catg-mobile">Mobile</label> */}
                </div>
                {/* <Router> */}
                {/* <div className="projects-container">
                    
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
                    
                </div> */}
                {/* </Router> */}
                <Switch>
                <div className="projects-container">
                    
                    {/* <div className="test web ">
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
                    </div> */}
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

