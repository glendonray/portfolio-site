import React from "react";

class AddProjectForm extends React.Component {
  titleRef = React.createRef();
  imageRef = React.createRef();
  descRef = React.createRef();
  linkRef = React.createRef();
  createProject = (event) => {
    //1. Stop form from submitting
    event.preventDefault();
    const project = {
      title: this.titleRef.current.value,
      image: this.imageRef.current.value,
      desc: this.descRef.current.value,
      link: this.linkRef.current.value,
    };
    this.props.addProject(project);
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="add-project" onSubmit={this.createProject}>
        <input
          name="title"
          ref={this.titleRef}
          type="text"
          placeholder="Name"
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input name="link" ref={this.linkRef} type="text" placeholder="Link" />
        <button type="submit">+ Add Project</button>
      </form>
    );
  }
}

export default AddProjectForm;
