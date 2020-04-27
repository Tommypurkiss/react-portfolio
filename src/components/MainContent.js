import React from 'react'

import './MainContent.scss'

export default function MainContent() {
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
                <div className="projects-container">
                    <div className="project-types-titles">
                        <h3>
                            Web
                        </h3>
                        <h3>
                            Mobile
                        </h3>
                    </div>
                    <div >

                    </div>
                </div>
            </div>
        </div>
    )
}

