import React, { useRef } from 'react';
import './contact.css';
import LinkedinIcon from '../../assets/linkedin.jpeg';
import GithubIcon from '../../assets/git.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4ij3gas', 'template_upt5agv', form.current, 'qgwNGXsH8HHokHpYI')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Email Sent!")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contactPage">
            <div id='contact'>
                <h1 className='contactPageTitle'> Contact Me</h1>
                <span className='contactDesc'>Please fill out the form to discuss any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name' />
                    <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                    <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>

                    <div className='links'>
                        <a href="https://www.linkedin.com/in/chau-le-71396216b/" target='_blank'>
                            <img src={LinkedinIcon} alt="LinkedIn" className='link' />
                        </a>
                        <a href="https://github.com/chaulee10" target='_blank'>
                        <img src={GithubIcon} alt="Github" className='link' />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;