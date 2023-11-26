import React from 'react';

export default function Contact(props) {
    return (
        <section className="contact" id="contact">

            <div className="Contactform">
                <div className="cont">
                    <h1 className="contact-header"> Contact Form </h1>
                    <section id="contact">
                        <div className="contactform-items">
                            <form>
                                <ul>
                                    <br />
                                    <li>
                                        <input type="text" id="input-name" className="contact-item" placeholder="Name" required />
                                    </li>

                                    <br/>

                                        <br/>

                                            <li><input type="email" id="input-email" className="contact-item" placeholder="Email" /></li>
                                            <br/>

                                                <br/>
                                                    <li><input type="text" id="input-subject" className="contact-item" placeholder="Subject" /></li>
                                                    <br/>

                                                        <br/>
                                                        <li>
                                                            <textarea type="text" id="input-message" className="contact-item" placeholder="Message"></textarea>
                                                            </li>
                                                                
                                                            <br/>
                                                                <br/>
                                                                    <button id="submit" type="submit" value="SEND">
                                                                        <a href="mailto:pateljyash0808@gmail.com" className="send">
                                                                            <i className="fa fa-paper-plane" id="plane"></i><span className="send-text"> SEND</span>
                                                                        </a>
                                                                    </button>

                                </ul>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}