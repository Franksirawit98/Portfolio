import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ConnectedLines from '../line/Movingline';
import TypewriterEffect from '../Hero/TypewriterEffect' ;
import resume from '../../assets/Sirawit_Resume.pdf'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <ConnectedLines />
        <img src={profile_img} alt='' />
        <h1><span><TypewriterEffect text="I'm Sirawit," speed={250}  /></span>Frontend developer based in Thailand</h1>
        <p>I am a Frontend developer frome Bangkok, Thailand I am truly delighted to have the opportunity to work with all of you</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}></p>Connect With Me</AnchorLink></div>
            <a href={resume} download>
             <div className='hero-resume'>My resume</div>
            </a>
        </div>
    </div>
  )
}

export default Hero
