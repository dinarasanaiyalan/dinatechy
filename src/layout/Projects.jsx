import React from 'react';
import '../assets/css/project.css';

function Projects() {
    return (
        <div className='project-container'>
            <h1>Completed Projects</h1>
            <div className='project-card'>
                <div className='project'>
                    <h2 style={{color: '#6420AA'}}>Recipe Maker</h2>
                    <h4 style={{marginBottom: '8px'}}>Description of Recipe Maker project... </h4>
                    <p>This project is 
                    designed to people who have problem cooking reciepe uploaded in Social Media 
                    without the proper measurements of ingredient.</p>
                    <ul>
                        <li>Here, Food Content Creators will update their reciepe's ingredient with proper measurements.</li>
                        <li>So, audience and follower's of their respective Content Creators will get their instructions rightfully.</li>
                    </ul>
                </div>
                <div className="project">
                    <h2 style={{color: '#6420AA'}}>Turf Cricket</h2>
                    <h4 style={{marginBottom: '8px'}}>Description of Turf Cricket project...</h4>
                    <p>In this project, now a days Truf Circket is one of the leading activities of people's.
                        So, we build this project to less struggels and issue faced while managing their customer details.
                    </p>
                    <ul>
                        <li>Here, we can update the customer details and manage them in every where.</li>
                        <li>And we can update the closing and opening time, when the best offer's going on.</li>
                    </ul>
                </div>
                <div className="project">
                    <h2 style={{color: '#6420AA'}}>Tour Guide</h2>
                    <h4 style={{marginBottom: '8px'}}>Description of Tour Guide project...</h4>
                    <p>This project is helpfull for people who couldn't afford and 
                        can't able to find the right way or route the destination they are going for vacation, friends trip,
                        honeymoo etc,.
                    </p>
                    <ul>
                        <li>Here, people can find their right and better way out for the destination.</li>
                        <li>It avoid major troubles faced by the traveller's along through their way.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects