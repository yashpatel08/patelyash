import React from 'react'

const Experience = () => {
    return (
        <div className='experience-education' id='education'>
            <h2>Education & Experience</h2>
            <div className="experience-container">
                <div className="education">

                    <i className="fa-solid fa-graduation-cap"></i>
                    <div className='education-content'>
                        <div className="circle"></div>
                        <h3>Government Engineering College - Bhavnagar</h3>
                        <p>July 2021 - May 2025</p>
                        <p>B.E - Bachelor of Engineering in Information Technology</p>
                    </div>

                    <div className='education-content'>
                        <div className="circle"></div>

                        <h3>Dream International School</h3>
                        <p>July 2019 - May 2021</p>
                        <p>HSC - 92pr ( JEE Main ) & ( Advanced Qualifier )</p>

                        <h3>Dream International School</h3>
                        <p>July 2018 - July 2019</p>
                        <p>SSC - 88pr</p>

                    </div>
                </div>

                <div className="experience">
                    <i className="fa-solid fa-briefcase"></i>
                    <div className="circle2"></div>
                    <div className='experience-content'>
                        <h3 className='experience-title'>Intern — Odoo India</h3>
                        <p><strong>Jan 2025 - Present</strong></p>
                        <p>
                            Working as an intern at Odoo India, I actively contribute to the development and enhancement of business applications using the Odoo framework. I’ve gained hands-on experience with Python, PostgreSQL, and XML, and strengthened my understanding of enterprise resource planning systems. Collaborated with cross-functional teams to build real-world solutions and participated in code reviews, debugging, and feature implementations across modules.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience