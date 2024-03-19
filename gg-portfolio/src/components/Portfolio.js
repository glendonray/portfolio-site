import React from "react";
import Project from "./Project";

class Portfolio extends React.Component {
  render() {
    console.log("Portfolio:", this);
    return (
      <section id="portfolio">
        <div className="portfolio-wrapper">
          <h2>Portfolio</h2>
          <ul className="portfolio">
            {Object.keys(this.props.portfolioData).map((key) => (
              <Project
                key={key}
                index={key}
                details={this.props.portfolioData[key]}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Portfolio;
