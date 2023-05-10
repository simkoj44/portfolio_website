import React from 'react';
import '../Styles/Home.css';
import Resume from '../Files/resume.pdf';


const Home = () => {

  return (
    <div className='home'>
      <h1 className='title'>Joseph Simko</h1>
      <h2 className='subtitle'>Full Stack Software Engineer</h2>
      <p className='about'>Software engineer looking to leverage 4+ years of problem solving and consulting skills from the field of financial advising. Self-taught developer with experience creating a full stack web application and proficiency with multiple programming languages and frameworks. Highly organized and dependable with a proven track record of flourishing in a team environment.</p>
      <a href={Resume} target='_blank' rel='noreferrer'>Resume</a>
      <a href='mailto:joseph.simko.14@gmail.com'>Email</a>
    </div>
  );
}

export default Home;