import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';

function ChallengeSection() {
  return (
    <div className="challenge-section-container">
      <h1 data-aos="fade-down" className='challenge-section-header'>
        Take a speed test now!
      </h1>
      <TestContainer words={4} characters={16} wpm={25}/>
    </div>
  )
}

export default ChallengeSection