import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt=''/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an aspiring frontend developer with a strong foundation in web technologies and a passion for creating user-friendly and visually appealing interfaces. Through personal projects and self-driven learning, I have developed skills in HTML, CSS, JavaScript, and modern frameworks like React. I am eager to bring my creativity, problem-solving abilities, and dedication to contribute to a team's success and grow in a professional environment.</p>
                    <p>My passion for frontend development is not only reflect but also in the enthusiasm and dedication i bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>React Js</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>HTML</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>CSS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>0</h1>
                <p>YEARS OF EXPERRIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>6+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>4+</h1>
                <p>SKILLS</p>
            </div>
        </div>
    </div>
  )
}

export default About
