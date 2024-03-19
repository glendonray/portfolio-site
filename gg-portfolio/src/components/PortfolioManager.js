import React from "react";
import ProjectEditor from "./ProjectEditor";
import AddProjectForm from "./AddProjectForm";

class PortfolioManager extends React.Component {
  render() {
    console.log("PortfolioManager:", this);
    return (
      <section id="portfolio-manager">
        <h2>Portfolio Manager</h2>
        <ul className="project-editors">
          {Object.keys(this.props.portfolioData).map((key) => (
            <ProjectEditor
              key={key}
              index={key}
              details={this.props.portfolioData[key]}
              updateProject={this.props.updateProject}
              deleteProject={this.props.deleteProject}
            />
          ))}
        </ul>

        <AddProjectForm addProject={this.props.addProject} />
      </section>
    );
  }
}

export default PortfolioManager;
