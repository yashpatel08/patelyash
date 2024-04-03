import React from 'react'
import next from '../media/next.svg';
import mongodb from '../media/mongodb.png';
import express from '../media/express.png';
import github from '../media/github.svg';
import vscode from '../media/vscode.png';
import communication from '../media/communication.png';
import team from '../media/team.png';
import create from '../media/create.png';

const Skills = () => {
    return (
        <div id='skill'>
            <h2>My Skills</h2>

            <div className='skill-container'>
                <div className='frontend'>
                    <h3>Frontend</h3>
                    <div className='all-cards'>
                        <div className='skillcard'>
                            <i className="fa-brands fa-html5 fa-xl"></i>
                            <small>HTML</small>
                        </div>
                        <div className='skillcard'>
                            <i className="fa-brands fa-css3"></i>
                            <small>CSS</small>
                        </div>
                        <div className='skillcard'>
                            <i className="fa-brands fa-js"></i>
                            <small>JavaScript</small>
                        </div>
                        <div className='skillcard'>
                            <i className="fa-brands fa-react"></i>
                            <small>React</small>
                        </div>

                        <div className='skillcard'>
                            <i className=""><img src={next} alt=''></img></i>
                            <small>NextJs</small>
                        </div>
                    </div>
                </div>
                <div className='backend'>
                    <h3>Backend</h3>
                    <div className='all-cards'>
                        <div className='skillcard'>
                            <i className="fa-brands fa-node-js"></i>
                            <small>NodeJs</small>
                        </div>
                        <div className='skillcard'>
                            <i className=""><img src={express} alt=''></img></i>
                            <small>ExpressJs</small>
                        </div>
                        <div className='skillcard'>
                            <i className=""><img src={mongodb} alt=''></img></i>
                            <small>MongoDB</small>
                        </div>
                    </div>

                    <h3>Development Tools</h3>
                    <div className='all-cards'>
                        <div className='skillcard'>
                            <i className=""><img src={github} alt=''></img></i>
                            <small>GitHub</small>
                        </div>
                        <div className='skillcard'>
                            <i className=""><img src={vscode} alt=''></img></i>
                            <small>VS Code</small>
                        </div>
                    </div>

                </div>
                <div className='professional'>
                    <h3>Professional</h3>
                    <div className='all-cards'>
                        <div className='skillcard'>
                            <i className=""><img src={communication} alt=''></img></i>
                            <small>Comm.</small>
                        </div>
                        <div className='skillcard'>
                            <i ><img src={team} alt=''></img></i>
                            <small>Teamwork</small>
                        </div>
                        <div className='skillcard'>
                            <i ><img src={create} alt=''></img></i>
                            <small>Creativity</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills