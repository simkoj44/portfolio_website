import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Components/Home.js';
import Projects from './Components/Projects.js';
import GitHubLogo from './Files/github.png';
import LinkedInLogo from './Files/linkedin.png';

const App = () => {

  const navigate = useNavigate();

  return (
    <div className='website'>
      <div className='navBar'>
        <span className='buttons'>
          <button type='button' className='navBarButton' onClick={() => navigate('/')}>Home</button>
          <button type='button' className='navBarButton' onClick={() => navigate('/projects')}>Projects</button>
        </span>
        <span className='logos'>
          <a href='https://www.github.com/simkoj44' target='_blank' rel='noreferrer'> <img className='logoImages' src={GitHubLogo} alt='GitHub Logo' width='50' height='50'/></a>
          <span> </span>
          <a href='https://www.linkedin.com/in/joseph-simko/' target='_blank' rel='noreferrer'> <img className='logoImages' src={LinkedInLogo} alt='LinkedIn Logo' width='50' height='50'/></a>
        </span>
      </div>
      <div className='body'></div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
    </div>
  );
}

export default App;