import React from 'react';
import '../Styles/Home.css';
import Resume from '../Files/resume.pdf';
import Photo from '../Files/image.jpg';

// Subcomponent of App
// This component displays some personal information along with links to my resume and email.

const Home = () => {

  return (
    <div className='home'>
      <h1 className='title'>About</h1>
      <div className='container'>
        <h2 className='about'>Hi! My name is Joe Simko and I am Northern Virginia-based software engineer and former financial planner. I have experience with web development and creating a full stack application. Most of the work I've done is with React.js and PHP, but I am always happy to learn a new language or framework.</h2>
        <p className='skills'><strong className='listHeader'>Skills</strong>: JavaScript, PHP, Python, React.js, MySQL, HTML, CSS, Node.js, MongoDB, Git, GitHub, full stack development, web development, relational databases</p>
      </div>
      <div className='links'>
        <a href={Resume} target='_blank' rel='noreferrer'>Resume</a>
        <span className='divider'> </span>
        <a href='mailto:joseph.simko@protonmail.com'>Email</a>
      </div>
      <div className='photoContainer'>
        <img className='photo' src={Photo} alt='Headshot'></img>
      </div>
    </div>
  );
}

export default Home;