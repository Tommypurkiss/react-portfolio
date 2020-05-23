import React from "react";

import "./MainContent.scss";

export default function MainContent() {
  return (
    <div className="Main-content-wrapper">
      <section className="welcome-section">
        <div className="welcome-title">
          <h1>Hello.</h1>
        </div>
        <div className="welcome-text-container row">
          <div className="text text-one">
            <p>
              I'm Tommy, a Frontend Developer based in the UK. I'm passionate
              about designing and creating beautiful websites, that perform well
              with a focus on responsive design.
            </p>
          </div>
          <div className="text text-two">
            <p>
              I also have worked with mobile programming in Android and iOS. I'm
              always keen to learn new skills as a Developer.
            </p>
          </div>
          <div className="text text-three">
            <p>
              Have a project idea you want to work on? Get in touch so we can
              work together to create something amazing.
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
            <img
              src={require("../reactportfolio.png")}
              className="react-portfolio-img"
              alt="React Portfolio"
            ></img>
          </div>
          <div className="project-card">
            <a
              href="https://play.google.com/store/apps/details?id=com.tommypurkissdev.weather"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../androidweather.png")}
                alt="Android Weather"
              ></img>
            </a>
          </div>
          <div className="project-card">
            <a
              href="https://play.google.com/store/apps/details?id=tommypurkissdev.simplenotes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../androidonlynote.png")}
                alt="Android Onlynote"
              ></img>
            </a>
          </div>
        </div>
      </section>

      <hr></hr>

      <section className="skills-section" id="skills-section">
        <div className="skills-title" id="skills-title">
          <h2>Main skills</h2>
        </div>
        <div className="skills-container row ">
          <div className="skills-card">
            <div className="skills-img">
              <img
                src={require("../imgs/web-tech-logos/html-5.svg")}
                alt="HTML3"
              ></img>
            </div>
            <div className="skills-text">HTML5</div>
          </div>

          <div className="skills-card">
            <div className="skills-img">
              <img
                src={require("../imgs/web-tech-logos/css-5.svg")}
                alt="CSS3"
              ></img>
            </div>
            <div className="skills-text">CSS3/Sass</div>
          </div>

          <div className="skills-card">
            <div className="skills-img">
              <img
                src={require("../imgs/web-tech-logos/javascript-4.svg")}
                alt="JavaScript"
              ></img>
            </div>
            <div className="skills-text">Javascript</div>
          </div>

          <div className="skills-card">
            <div className="skills-img">
              <img
                src={require("../imgs/web-tech-logos/react-2.svg")}
                alt="ReactJS"
              ></img>
            </div>
            <div className="skills-text">ReactJS</div>
          </div>

          <div className="skills-card">
            <div className="skills-img">
              <img
                src={require("../imgs/web-tech-logos/firebase-1.svg")}
                alt="Firebase"
              ></img>
            </div>
            <div className="skills-text">Firebase</div>
          </div>

          <div className="skills-card">
            <div className="skills-img">
              <img
                src={require("../imgs/web-tech-logos/adobe-xd-1.svg")}
                alt="Adobe XD"
              ></img>
            </div>
            <div className="skills-text">Adobe XD</div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact-section">
        <div className="contact-container">
          <div className="contact-title" id="contact-title">
            <h2>Get in touch?</h2>
          </div>

          <div className="contact-logos">
            <div className="logo-left">
              <a
                href="mailto:tommypurkiss1@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../imgs/contact-logos/email.png")}
                  alt="email"
                ></img>
              </a>
            </div>
            <div className="logo-right">
              <a
                href="https://www.instagram.com/tommypdev/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../imgs/contact-logos/instagram.png")}
                  alt="instagram"
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/in/tommypurkiss/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../imgs/contact-logos/linkedin.png")}
                  alt="linkedin"
                ></img>
              </a>
              <a
                href="https://github.com/Tommypurkiss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../imgs/contact-logos/github.png")}
                  alt="github"
                ></img>
              </a>
            </div>
          </div>
          {/* <div className="smallprint-text">
                        <p>
                            This portfolio was created using ReactJS.
                        </p>
                    </div> */}
        </div>
      </section>
    </div>
  );
}
