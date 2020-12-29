import React from 'react'
import './Home.css'
import Projects from '../Projects/Projects'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {Link} from 'react-router-dom';
import agile from './agile.png'
import css from './css.png'
import git from './git.png'
import html from './html.png'
import mongodb from './mongodb.png'
import node from './nodejs.png'
// import python from './python.png'
import sql from './sql.png'
import react from './react.png';
import redux from './redux.png'

function Home() {
    return (
        <div className="double">
        <div className="home">
            {/* <h1 className="intro-h1">Web Developer by Choice, Computer Scientist by Degree</h1> */}
            <h2 className="intro-h2">Passionate for Creating Responsive Web Apps</h2>
            <br />
            <h3 className="tech-text">EXPERTISE</h3>
            {/* ADD names of the frameworks on hover ..  */}

            <div className="techs-1">
                <img src={html} width="8%" alt="html" />
                <img src={css} width="8%" alt="css" />
                <img src={react} width="8%" alt="react" />
                <img src={redux} width="8%" alt="" />
                <img src={git} width="8%" alt="git" />
                {/* <img src={python} width="8%" alt="python" /> */}
            </div>


            <br /> <br />
            <h3 className="intro-h3">Projects Here</h3>
            {/* on click, go down */}
            <h1 className="arrow">
                <a href="#project-section">
                <ArrowDownwardIcon />
                </a></h1>
            
        </div>
        {/* i'll have so many projects with diff attributes passed to the
            components
        */}
        <div id="project-section">
            <div className="project-box">
                <Projects 
                projectName="Netflix Clone"
                techStack="Reactjs | Material UI | React Router Dom | TMDB"
                githubLink="https://github.com/rawah96/netflix-clone"
                demoLink=""
                image="https://cdn.vox-cdn.com/thumbor/T0YRuZUcXIzNYfl6O_89Rx7yQzo=/39x0:3111x2048/1220x813/filters:focal(39x0:3111x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
                />
            </div>

            <div className="project-box">
                <Projects 
                    projectName="Hulu Clone"
                    techStack="Reactjs | Material UI | React Router Dom | TMDB"
                    githubBtn=""
                    demoBtn=""
                    image="https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg"
                />
            </div>

            <div className="project-box">
                <Projects
                projectName=""
                techStack=""
                githubBtn=""
                demoBtn=""
                image=""
                />
            </div>

            <div className="project-box">
                <Projects />
            </div>

            <div className="project-box">
                <Projects />
            </div>

            <div className="project-box">
                <Projects />
            </div>
        </div>
        </div>
    )
}

export default Home


// {/* <div className="techs-1">
// <img src={html} width="8%" alt="html" />
// <img src={css} width="8%" alt="css" />
// <img src={react} width="8%" alt="react" />
// <img src={redux} width="8%" alt="" />
// <img src={git} width="8%" alt="git" />
// {/* <img src={node} width="8%" alt="nodejs"/> */}
// <img src={python} width="8%" alt="python" />
// {/* <img src={express} width="8%" alt="expressjs" /> */}
// {/* <img src={sql} width="8%" alt="sql" />
// <img src={mongodb} width="8%" alt="mongoDB" /> */}
// </div> */}