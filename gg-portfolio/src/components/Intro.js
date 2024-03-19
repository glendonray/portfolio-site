import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <section id="intro">
        <div className="intro-wrapper">
          <div className="intro">
            <div className="intro-text">
              <h2 className="career-title">Software Engineer</h2>
              <p className="summary">
                Full stack engineer with over ten years of experience in
                creating beautiful websites. Proficient in translating designs
                into pixel-perfect user interfaces, lending to wonderful user
                experiences. Excellent soft skills with a love for communicating
                and collaborating with a team.
              </p>
            </div>
            <div className="portrait">
              <img alt="Glendon Grapperhaus" src="./images/gg_headshot.jpg" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
