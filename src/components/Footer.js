import React from 'react';

export default function Footer(props) {
    return (
        <footer className="fullsection">

            <div className="footer">
                <div className="main-div">
                    <a className="uselink">Usefull Links</a>
                    <div>
                        <ul>
                            <li><a href="#Home" className="footerlinks">Home</a></li>
                            <li><a href="#Experience" className="footerlinks">Experience</a></li>
                            <li><a href="#Skill" className="footerlinks">Skills</a></li>
                            <li><a href="#contact" className="footerlinks">Contact</a></li>
                            <li><a href="#DM" className="footerlinks">DM</a></li>
                        </ul>
                    </div>
                </div>



                <section className="sociallinks" id="sociallinks">
                    <a className="socialmedia">Social Media</a>
                    <div className="footerlinks">
                        <ul>
                            <li><a href="https://www.facebook.com/profile.php?id=1000019689933083" className="ffacebook" target="_blank">
                                Facebook</a>
                            </li>

                            <li><a href="https://instagram.com/patel.yash__?igshid=YmMyMTA2M2Y=" className="finstagram" target="_blank">
                                Instagram</a>
                            </li>
                            <li><a href="https://twitter.com/YashPat42562354?t=MaqSnvfCpz9jXdkq18J9Tw&s=09" className="ftwitter"
                                target="_blank">
                                Twitter</a>
                            </li>

                            <li><a href="https://github.com/yashpatel08" className="fgithub" target="_blank">
                                Github</a>
                            </li>
                            <li><a className='flinkedin' href='https://www.linkedin.com/in/yash-patel-ab2740225/' target='_blank'>
                                Linkedin</a>
                            </li>
                        </ul>
                    </div>
                </section>


                <div className="drop-mail">
                    <a>Have any question or want to talk with me ?<br /> You can easily connect with me <br />via email at <a
                        className="mail" href="mailto:pateljyash0808@gmail.com">pateljyash0808@gmail.com</a><br /> or feel
                        free to
                        drop a message in the form!</a>
                </div>
            </div>
            <div className="sign">
            <a className="last">Made with 💖 By Yash Patel</a>
            </div>

        </footer>

    );
}