import React, { useState } from 'react'
import './Projects.css'
import github from './github.svg'

function Projects({projectName, techStack, githubLink, demoLink, image}) {
    const baseDemo="https://"

    const baseGithub="https://github.com/rawah96/"
    return (
        // add a screenshot of the project
        <div className="projects">
            <h1 className="project-title">{projectName}</h1>
            <a href={demoLink}>
                <img className="screenshot" src={image} alt="" />
            </a>
            <p>
                Technologies Used
                <h5 className="tech-stack">{techStack}</h5>
            </p>

            <div className="project-btns">
                <button className="github-link"><a href={`${baseGithub}${githubLink}`}
                target="_blank"
                className="links"
                > <h4>GitHub</h4><img src={github} alt="" /></a></button>
                <button className="demo-link"
                ><a href={`${baseDemo}${demoLink}`} target="_blank"
                >Demo</a></button>
            </div>
        </div>
    )
}

export default Projects
