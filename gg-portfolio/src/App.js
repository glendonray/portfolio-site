import React from "react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Intro from "./components/Intro";
// import portfolio from "./sample-portfolio";
import Footer from "./components/Footer";
// import PortfolioManager from "./components/PortfolioManager";
import base from "./base";

class App extends React.Component {
  state = {
    portfolio: {},
  };

  componentDidMount() {
    this.ref = base.syncState(`/`, {
      context: this,
      state: "portfolio",
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addProject = (project) => {
    //1. Take a copy of the existing state
    const portfolio = { ...this.state.portfolio };
    //2. Add our new project to the portfolio const
    portfolio[`project${Date.now()}`] = project;
    //3. Set the new portfolio object to state
    this.setState({ portfolio });
  };

  updateProject = (key, updatedProject) => {
    //1. Take a copy of the current state
    const portfolio = { ...this.state.portfolio };
    //2. Update that state
    portfolio[key] = updatedProject;
    //3. Set that to state
    this.setState({ portfolio });
  };

  deleteProject = (key) => {
    //1. Take a copy of state
    const portfolio = { ...this.state.portfolio };
    //2. Update the state, Firebase requires "null" to remove
    portfolio[key] = null;
    //3. Update state
    this.setState({ portfolio });
  };

  render() {
    console.log("App:", this);
    return (
      <div className="gg-portfolio">
        <Header />
        <Intro />
        <Portfolio portfolioData={this.state.portfolio} />
        <Footer />
        {/* <PortfolioManager
          addProject={this.addProject}
          portfolioData={this.state.portfolio}
          updateProject={this.updateProject}
          deleteProject={this.deleteProject}
        /> */}
      </div>
    );
  }
}

export default App;
