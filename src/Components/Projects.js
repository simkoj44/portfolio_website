import React from 'react';
import '../Styles/Projects.css';
import Screenshot1 from '../Files/screenshot1.png';
import Screenshot2 from '../Files/screenshot2.png';
import Screenshot3 from '../Files/screenshot3.png';

// Subcomponent of App
// This component displays of list of projects with screenshots and links to each website
// Flexboxes are used for responsive formatting

const Projects = () => {

  return (
    <div className='projects'>
      <h1 className='header'>Projects</h1>
      <div className='projectContainer'>
        <div className='descriptionContainer'>
          <div className='description'>
            <h1 className='subheader'>Mixed Drink Menu</h1>
            <div className='content'>
              <p><strong>Technologies: </strong>HTML, CSS, JavaScript, React.js, MongoDB, MongoDB Realm</p>
              <p>Mixed Drink Menu is a full stack web application. The primary function of the app is it allows users to select the items (ingredients and tools) that they have available for mixing cocktails from several groups of checkboxes. After selecting the items and submitting the form, the app generates three pieces of output:</p>
              <ol>
                <li>A list of all cocktails the user is able to make, based on their available ingredients.</li>
                <li>A list of the top recommended items that the user does not have. These items are those that will most quickly allow the user to make new cocktails (cocktails where the user is only 1 or 2 items away)</li>
                <li>A list of all nearly available drinks (where the users is only missing 1 or 2 items) along with what item needs to be acquired to make each drink.</li>
              </ol>
              <p>As long as the user is able to make at least 1 drink, the app also offers the ability to generate a print-friendly menu of all available cocktails and a print-friendly list of instructions on how to make each drink.</p>
            </div>
          </div>
        </div>
        <div className='screenshotContainer'>
          <div className='screenshot'>
            <a href='https://www.mixeddrinkmenu.com' target='_blank' rel='noreferrer'><img src={Screenshot1} alt='Screenshot from website'></img></a>
          </div>
          <div className='screenshot'>
            <a href='https://www.mixeddrinkmenu.com' target='_blank' rel='noreferrer'><img src={Screenshot2} alt='Screenshot from website'></img></a>
          </div>
          <div className='screenshot'>
            <a href='https://www.mixeddrinkmenu.com' target='_blank' rel='noreferrer'><img src={Screenshot3} alt='Screenshot from website'></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;