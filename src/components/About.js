import React from 'react'
import aimg from './about.png'
const About = () => {
    return (
        <div className='About' id='about'>
            <h1 className='about-title'>About Me</h1>
            <div className='about-item'>
                <div className='about1'>
                    <p>Get To Know Me !</p>
                    <p>My name's Patel Yash. I'm a full-stack web-developer . I am doing B.E. in Information Technology at Government Engineering College - Bhavnagar, love exploring new technologies in the field of Web Development and always try to adapt to it.I believe in the concept of continuous learning by regularly upgrading my skills and enhancing my knowledge.I have learned MERN stack, data structures, algorithms, and soft skills. And besides coding, I love traveling, singing and cooking As a developer, my hunger for learning has drastically increased. And I want to centralize my skills and learning for enhancement of an organization and more of it, to enhance my career.</p>
                    <p>I build web apps with a focus on React, Redux, JavaScript. I enjoy turning complex problems into simple and beautiful designs.</p>

                </div>
                <div className='about2'>
                    <img className='about-img' src={aimg} alt='about-img' />
                </div>
            </div>
        </div>
    )
}

export default About