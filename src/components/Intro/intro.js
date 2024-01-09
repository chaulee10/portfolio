import React from 'react';
import './intro.css';
import pic from '../../assets/pic.jpg';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import Resume from '../../assets/resume.pdf';

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm
                    <span className='introName'> Chau </span>
                    <br />Data Analyst
                </span>
                <p className='introPara'>I am a skilled data analyst with experience in analyzing and visualizing data</p>

                <a href={Resume} download="MyResume" target='_blank'>
                    <button className='btn' >
                        <img src={btnImg} alt="Hire Me" className='btnImg' /> Download CV
                    </button>
                </a>
                {/* <div >
                <img class='headshot' src={pic} alt="headshot"/> */}
                {/* </div>    */}

            </div>
        </section>

    )

}

export default Intro