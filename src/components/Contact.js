import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xitsyxk",
        "template_c6o8646",
        e.target,
        "SsPDxBPGWiWRatgMj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); 
        },
        (error) => {
          console.log(error.text);
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
    e.target.reset();
  };


    return (
        <div className='contact-container' id='contact'>
            <h3 className='contact-title'>Contact Me</h3>

            <div className='contact-items'>
                <div className='contact-input'>
                    <form onSubmit={sendEmail} className='contact-form'>
                        <input className='c-input' placeholder='Name' name="from_name" required></input>
                        <input className='c-input' placeholder='Email' name="email_id" required></input>
                        <textarea className='c-input' id='c-textarea' placeholder='Message' name="message" required></textarea>
                        <input className='send' type="submit" value="Send" disabled={isSubmitting} /> 
                        {stateMessage && <p>{stateMessage}</p>}
                    </form>
                </div>
                <div className='personal-info'>
                    <div className='personalinfo'>

                        <i class="fa-solid fa-location-dot"></i>
                        <div className='p-detail'>
                            <p className='p-main'>Address</p>
                            <p className='p-sub'>Dhoraji,Gujarat,India</p>
                        </div>
                    </div>


                    <div className='personalinfo'>
                        <i class="fa-regular fa-envelope"></i>
                        <div className='p-detail'>
                            <p className='p-main'>Email</p>
                            <p className='p-sub'>pateljyash0808@gmail.com</p>
                        </div>
                    </div>

                    <div className='personalinfo'>
                        <i class="fa-solid fa-phone"></i>
                        <div className='p-detail'>
                            <p className='p-main'>Contact No.</p>
                            <p className='p-sub'>+91 9429578803</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact