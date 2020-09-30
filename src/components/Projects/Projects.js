import React from 'react'
import './Projects.css'
import github from './github.svg'
import art from './art.jpg';

function Projects({projectName, techStack, githubLink, demoLink, image}) {
    return (
        // add a screenshot of the project
        <div className="projects">
            <h1 className="project-title">{projectName}</h1>
            <a href={demoLink}>
                {/* should have demo link */}
                <img className="screenshot" src={image} alt="" />
            </a>
            <p>
                Technologies Used
                <h5 className="tech-stack">{techStack}</h5>
            </p>

            <div className="project-btns">
                <button className="github-link"><a href={githubLink}
                className="links"
                > <h4>GitHub</h4><img src={github} alt="" /></a></button>
                <button className="demo-link"><a href={demoLink}>Demo</a></button>
            </div>
        </div>
    )
}

export default Projects
