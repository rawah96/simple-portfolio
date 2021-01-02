import React from 'react'
import './Footer.css'
import github from './github.png';
import insta from './instagram.png'
import linkedin from './linkedin.png'
import gmail from './gmail.svg';

function Footer({name}) {
    // get first & last name then redirect to a page and say thank you (name)
    const handleClick = (e) => {
        console.log(e.target.value);
    }
    return (
        <>
        <div className="reach-me">
            <h1 className="contact-title">Reach out to me .. !</h1>

            
            {/* action .. ? */}
            {/* <form className="form">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname" />
                <br />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lname"/>
                <br />
                <textarea placeholder="Send a Message">

                </textarea>
                <br />

                <input className="submit" type="submit" value={document.getElementById('fname')}
                onClick={handleClick}
                />
            </form> */}
        </div>
        <div className="footer">
            <div className="socials">
            <h2 className="web">Around the web</h2>
            <a href="https://www.github.com/rawah96"><img
                    className="git-img"
                    width="15%"src={github} alt="github" /></a>
            <a href="mailto: rawahalsinan@gmail.com"><img 
                    className="insta-img"
                    width="15%" src={gmail} alt="insta" /></a>
            <a href="https://www.linkedin.com/feed/?trk=hb_signin"><img 
                    className="linkedin"
                    width="15%" src={linkedin} alt="linkedin" /></a>          
            {/* <a href="mailto:rawah@pdx.edu"><img 
            className="gmail"
            width="15%" src={gmail} alt="gmail" /></a> */}
            </div>
            <div className="madeby">
                Copyright &copy; With Love by Rawah!
            </div>
            
        </div>
        </>
    )
}

export default Footer
