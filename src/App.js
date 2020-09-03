import React, { Component } from "react";
import "./App.css";

import AboutPage from "./Pages/aboutpage/aboutpage.component";
import HomePage from "./Pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        id: 1,
        name: "Luis Tejeda Sánchez",
        email: "ltejedasanchez@gmail.com",
        location: "Guadalajara, Mexico",
        jobPosition: "Software Architect",
        imgSource:
          "https://avatars1.githubusercontent.com/u/46000487?s=460&u=e1fbc6fafca2a3d0230631e020a06e4fda3900b2&v=4",
        githublink: "https://github.com/LuisTejedaS",
        linkedinlink:
          "https://mx.linkedin.com/in/luis-alfredo-tejeda-s%C3%A1nchez",
        extract1:
          "I am a software engineer since 2012 having experience in Software development. " +
          "I’ve worked in different phases of software development from establishing a roadmap to maintenance" +
          " the software in production. I have experience in application architecture following UML standard," +
          " applying design patterns, development of web applications using MVC and SOA with .NET technologies.",
        extract2:
          "I have worked in development and maintenance of desktop applications using Java technologies. " +
          " I have experience building API’s with dot net core, and i have knowledge of dot net standard." +
          "I’ve worked as Scrum Master in agile projects.",
      },
    };
  }

  render() {
    const { person } = this.state;
    return (
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route
            exact
            path="/CVReact/"
            render={(props) => (
              <HomePage {...props} person={person} isAuthed={true} />
            )}
          />
          <Route
            path="/CVReact/about"
            render={(props) => (
              <AboutPage {...props} person={person} isAuthed={true} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
