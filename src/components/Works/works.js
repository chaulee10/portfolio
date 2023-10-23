import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className='workstitle'>My Portfolio</h2>
            <span className='worksDesc'>I have extensive experience in creating visually appealing and user-friendly websites. My expertise lies in utilizing various design tools and programming languages to develop websites that meet the specific needs and requirements of clients. I am dedicated to delivering high-quality designs that not only enhance the online presence of businesses but also provide a seamless user experience. I am confident in my ability to effectively communicate and collaborate with clients to ensure their vision is accurately translated into a functional and aesthetically pleasing website.</span>
            <div className='worksImgs'>
                <img src={Portfolio1} alt="img1" className='worksImg' />
                <img src={Portfolio2} alt="img2" className='worksImg' />
                <img src={Portfolio3} alt="img3" className='worksImg' />
                <img src={Portfolio4} alt="img4" className='worksImg' />
            </div>
            {/* <button className='worksBtn'>See More</button> */}
        </section>
    )
}

export default Works;