import React from 'react'
import '../assets/css/home.css'
import myself from '../assets/img/Me.jpg'

function Home() {
    return (
        <div className='header-container'>
            <div className="portfolio-cards">
                <div className="card text-card">
                    <h5>Hello, <br /> <span className='name'>Dinagaran L</span></h5>
                    <p>a Software Engineer</p>
                </div>
                <div className="card image-card">
                    {/* <img className='img-myself' src={myself} alt="Dinagaran L" /> */}
                </div>
            </div>
            <div className='about-me'>
                <p className='services'>Services</p>
                <div className='underline'></div>
                <h2>What actually <br /> I Love to do</h2>
                <div className='card-container'>
                    <div className='card-design'>
                        <div className='card-header-design'>
                            {/* <img src="" alt="Backend Developer" /> */}
                            <h3 style={{ color: '#6420AA' }}>Backend Developer</h3>
                        </div>
                        <p style={{ color: 'grey' }}>Proficient in Java and its ecosystem, with a deep understanding of data structures and algorithms.
                            Adept at designing and implementing scalable and efficient backend services, optimizing for time and space complexities.
                            Experienced in developing complex logical services, leveraging design patterns and best practices.</p>
                    </div>
                    <div className='card-design'>
                        <div>
                            {/* <img src="" alt=" Frontend Developer" /> */}
                            <h3 style={{ color: '#6420AA' }}>Frontend Developer</h3>
                        </div>
                        <p style={{ color: 'grey' }}>Skilled in building dynamic and visually appealing user interfaces with React.js and JSP.
                            Proficient in crafting responsive and mobile-friendly websites that deliver seamless user experiences.
                            Passionate about staying up-to-date with the latest frontend technologies and design trends.</p>
                    </div>
                    <div className='card-design'>
                        <div>
                            {/* <img src="" alt="Mentor" /> */}
                            <h3 style={{ color: '#6420AA' }}>Mentor</h3>
                        </div>
                        <p style={{ color: 'grey' }}>Dedicated to nurturing and guiding new team members through effective onboarding and mentorship.
                            Skilled in assigning tasks, providing clear instructions, and resolving doubts to ensure seamless knowledge transfer.
                            Adept at facilitating productive stand-up meetings, fostering collaboration and timely issue resolution.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home