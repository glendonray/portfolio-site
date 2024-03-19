import React from "react";
class ProjectEditor extends React.Component {
  handleChange = (event) => {
    console.log(event.currentTarget.value);
    //UPDATE PROJECT
    //1. Take a copy of the current fish
    const updatedProject = {
      ...this.props.project,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateProject(this.props.index, updatedProject);
  };
  render() {
    console.log("ProjectEditor", this);

    return (
      <li className="project-editor">
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          value={this.props.details.title}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.details.image}
        />
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.details.desc}
        />
        <input
          type="text"
          name="link"
          onChange={this.handleChange}
          value={this.props.details.link}
        />
        <button onClick={() => this.props.deleteProject(this.props.index)}>
          Remove Project
        </button>
      </li>
    );
  }
}

export default ProjectEditor;
