import React from 'react';
import './about.css';
import Education from '../../assets/education.png';

const About = () => {
    return (
       
        <section id="about">
          <div class="">
            <p class="section__text__p1">Get To Know More</p>
            <h1 class="title">About Me</h1>
          </div>
          
          <div class="aboutContainer">      
            <div class="detailsContainer">
              <img class="icon" src={Education} alt="Education icon"/>
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree<br /></p>
            </div>
            
            <div class="textContainer">
              <p>
                <span className='textDesc'>I have extensive experience in creating visually appealing and user-friendly websites. My expertise lies in utilizing 
                various design tools and programming languages to develop websites that meet
                 the specific needs and requirements of clients. I am dedicated to delivering 
                 high-quality designs that not only enhance the online presence of businesses 
                 but also provide a seamless user experience. I am confident in my ability to effectively communicate and
                  collaborate with clients to ensure their vision is accurately translated into a 
                  functional and aesthetically pleasing website.</span>

              </p>
            </div>
         
          </div>
      </section>


    )
}

export default About;