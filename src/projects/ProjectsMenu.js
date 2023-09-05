import React, { Component } from 'react';
import classNames from 'classnames'; 
import projects from "./ProjectsData.js";
import "../styles/projectsMenu.css";
import projectTwoVid from "../assets/project-2.mp4";
import projectThreeVid from "../assets/project-3.mp4";
import projectFourVid from "../assets/project-4.mp4";

export default class ProjectsMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeProject: 1,
        };
    }

    handleProjectClick = (project) => {
        this.setState({
            activeProject: project,
        })
    }

    renderContent = (projects) => {
        return projects.map((project, index) => (
            <div 
                key={index} 
                className={`project-sub-container-${index + 1}`}>
                    <h3>{project.title}</h3>
                    {project.title === "Portfolio Website" && <img src={project.image} alt={project.title}></img>}
                    {project.title === "Movie Searcher" && <video 
                        playsInline 
                        autoPlay 
                        muted 
                        loop 
                        preload="auto" 
                        id="Movie Searcher" 
                    >
                        <source src={projectTwoVid} type="video/mp4" />
                    </video>}
                    {project.title === "2020 NHL Draft Simulator" && <video 
                        playsInline 
                        autoPlay 
                        muted 
                        loop 
                        preload="auto" 
                        id="2020 NHL Draft Simulator" 
                    >
                        <source src={projectThreeVid} type="video/mp4" />
                    </video>}
                    {project.title === "Snake Game" && <video 
                        playsInline 
                        autoPlay 
                        muted 
                        loop 
                        preload="auto" 
                        id="Snake Game" 
                    >
                        <source src={projectFourVid} type="video/mp4" />
                    </video>}
                    <div>{project.description}</div>
                    {project.title !== "Coming Soon" && <div className="link-container">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
                    </div>}
            </div>
        ))
    }

  render() {

    const {activeProject} = this.state;
    const projectItems = ["Portfolio Website", "Movie Searcher", "2020 NHL Draft Simulator", "Snake Game", "Coming Soon"];

    return (
      <div className="project-menu">
        <div className='project-items-container'>
            {projectItems.map((item, index) => (
                <div
                key={index}
                className={classNames("project-item", {activeProject: activeProject === index+1})}
                onClick={() => this.handleProjectClick(index + 1)}
                >
                    <h2 className="title">
                        {item}
                    </h2>
                </div>
            ))}
        </div>
        <div className="project-sub-container">
            {this.renderContent([projects[activeProject]])}
        </div>
      </div>
    )
  }
}
