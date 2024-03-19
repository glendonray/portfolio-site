import React from "react";
class Project extends React.Component {
  render() {
    console.log("Project", this);
    const { title, image, desc, link } = this.props.details;
    return (
      <li className="project">
        <div className="project-row">
          <div className="project-image">
            <img src={image} alt={title + " Thumbnail"} />
          </div>
          <div className="project-details">
            <div className="project-text">
              <h3 className="project-title">{title}</h3>
              <p className="project-description">{desc}</p>
            </div>
            <a
              className="external-link button"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default Project;
