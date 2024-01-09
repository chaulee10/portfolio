import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className='workstitle'>My Portfolio</h2>

            <div className='worksImgs'>
                <p><a href="https://github.com/chaulee10/Walmart_EDA/blob/main/Walmart_EDA.ipynb">
                    <img src={Portfolio1} alt="walmart.png" className='worksImg' />
                </a>
                    <h3>Walmart Analysis</h3>
                </p>

                <p><a href="https://github.com/chaulee10/EDAs/blob/main/tweet/tweet.ipynb">
                    <img src={Portfolio2} alt="tweet" className='worksImg' />
                </a>
                    <h3>Tweet Analysis</h3>
                </p>

                <p><a href="https://github.com/chaulee10/EDAs/blob/main/911/911.ipynb">
                    <img src={Portfolio3} alt="911.png" className='worksImg' />
                </a>
                    <h3>911 Analysis</h3>
                </p>

                <p><a href="https://public.tableau.com/app/profile/chau.le1001/viz/Finance_17046676804770/OVERVIEW">
                    <img src={Portfolio4} alt="visualization1.png" className='worksImg' />
                </a>
                    <h3>Finance Visualization</h3>
                </p>

                <p><a href="https://public.tableau.com/app/profile/chau.le1001/viz/HRanalysis_17010192887080/HRAnalyticsDashboard">
                    <img src={Portfolio5} alt="visualization2.png" className='worksImg' />
                </a>
                    <h3>Car Sales Visualization</h3>
                </p>

            </div>


            {/* <button className='worksBtn'>See More</button> */}
        </section>
    )
}

export default Works;