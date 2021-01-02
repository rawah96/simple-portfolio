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
            <h2 className="intro-h2">Passionate About Creating Responsive Web Applications</h2>
            <br />
            <h3 className="tech-text">SKILLS</h3>
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
                techStack="Reactjs | Material UI | React Router Dom | TMDB | CSS"
                githubLink="netflix-clone"
                demoLink="/rawah96.github.io/netflix-clone"
                image="https://cdn.vox-cdn.com/thumbor/T0YRuZUcXIzNYfl6O_89Rx7yQzo=/39x0:3111x2048/1220x813/filters:focal(39x0:3111x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
                />
            </div>
            <div className="project-box">
                <Projects 
                    projectName="Hulu Clone"
                    techStack="Reactjs | Material UI | React Router Dom | TMDB | CSS"
                    githubLink="hulu"
                    demoLink="/rawah96.github.io/hulu"
                    image="https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg"
                />
            </div>
            <div className="project-box">
                <Projects 
                    projectName="Nike Clone"
                    techStack="React | MaterialUI | React Router Dom | CSS"
                    githubLink="nike-clone"
                    demoLink="nike-clone"
                    image="https://i1.wp.com/sportsfinding.com/wp-content/uploads/2020/02/nike-swoosh-wikipedia.jpg?fit=580%2C350&ssl=1"
                />
            </div>
            <div className="project-box">
                <Projects 
                    projectName="Discord Clone"
                    techStack="React | Redux | MaterialUI | Google Auth | CSS"
                    githubLink="discord"
                    demoLink="discord"
                    image="https://cybernews.com/wp-content/uploads/2020/07/Discord-privacy-tips-that-you-should-use-.jpg"
                />
            </div>
            <div className="project-box">
                <Projects 
                    projectName="Youtube Clone"
                    techStack="React | MaterialUI | React Router Dom | CSS"
                    githubLink="youtube-clone"
                    demoLink="youtube-clone"
                    image="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
                />
            </div>
            <div className="project-box">
                <Projects 
                    projectName="Covid Dashboard"
                    techStack="React | Material UI | React Router Dom | CSS"
                    githubLink="covid-dashboard"
                    demoLink="/rawah96.github.io/covid-dashboard"
                    image="https://www.flaticon.com/svg/static/icons/svg/3017/3017381.svg"
                />
            </div>
            <div className="project-box">
                <Projects 
                    projectName="Capstone | EMS"
                    techStack="React | Material UI | React Router Dom | CSS"
                    githubLink="ems-project"
                    demoLink="helicopter-ems-calculator.herokuapp.com"
                    image="https://www.cityofkyle.com/sites/default/files/styles/gallery500/public/imageattachments/fire/page/4301/ems-image.png?itok=rbKa4cND"
                />
            </div>
            <div className="project-box">
                <Projects 
                    projectName="Mern Store"
                    techStack="React | Redux | Node | Express | MongoDB |  Material UI | React Router Dom | CSS"
                    githubLink="fullstack-store"
                    demoLink="mern-stack-store-project.herokuapp.com"
                    image="https://image.freepik.com/free-vector/pattern-about-shopping_1061-495.jpg"
                />
            </div>
            <div className="project-box">
                <Projects 
                    projectName="PORTFOLIO 0"
                    techStack="React | MaterialUI | React Router Dom | CSS"
                    githubLink="portfolio1"
                    demoLink="portfolio1"
                    image="https://rawah96.github.io/portfolio1/static/media/employee.d7a755dc.svg"
                />
            </div>
            <div className="project-box">
                <Projects 
                    projectName="PORTFOLIO 1"
                    techStack="React | MaterialUI | GreenSock | React Router Dom | CSS"
                    githubLink="portfolio"
                    demoLink="portfolio"
                    image="https://pbs.twimg.com/media/DtLfZEjWoAE8gfB?format=jpg&name=large"
                />
            </div>
            {/* TWITTER  + LinkedIN + AMAZON + whatsapp + facebook + google + 
            dashboard + 
            */}
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