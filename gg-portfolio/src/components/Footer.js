import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  render() {
    console.log("Footer:", this);
    return (
      <footer id="footer">
        <div className="footer-wrapper">
          <div className="footer">
            <div className="skills-container">
              <h2>Skills</h2>
              <div className="skills">
                <ul>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>React</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
            <div className="contact">
              <h2>Social</h2>
              <ul>
                <li>
                  <FontAwesomeIcon icon={fas.faIdCard} />{" "}
                  <a
                    href="/docs/glendon-grapperhaus-resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={fab.faLinkedin} />{" "}
                  <a
                    href="https://www.linkedin.com/in/glendonray/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/glendonray
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={fas.faEnvelope} />{" "}
                  <a
                    href="mailto: glendonray@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    glendonray@gmail.com
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={fab.faGithub} />{" "}
                  <a
                    href="https://github.com/glendonray"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/glendonray
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
