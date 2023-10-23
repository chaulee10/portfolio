import React from 'react';
import './intro.css';
import pic from '../../assets/pic.jpg';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import Resume from '../../assets/resume.pdf';

//to create a new file, put the file name down, ctl + click on it

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm 
                    <span className='introName'> Chau </span>
                    <br />Website Designer
                </span>
                <p className='introPara'>I am a skilled web designer with experience in creating webs</p>
                <a href={Resume} download="MyResume" target='_blank'>
                    <button className='btn' >
                    <img src= {btnImg} alt="Hire Me" className='btnImg' /> Download CV
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