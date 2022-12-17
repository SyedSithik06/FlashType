import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';

export default function TypingChallengeContainer({ 
        selectedParagraph,
        words,
        characters,
        wpm,
        timeRemaining,
        timerStarted,
        testInfo,
        handleUserInput
}) {
      
  return (
    <div className='typing-challenge-container'>
         {/* Details Section */}
          <div className="details-container">
            {/* words typed */}
            <ChallengeDetailsCard cardName="Words" cardValue={words} />
          
            {/* character Typed */}
            <ChallengeDetailsCard cardName="Characters" cardValue={characters} />

            {/* speed */}
            <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            
          </div>
         {/*Challenge Section */}

         <div className="typewritter-container">
            <TypingChallenge
                   selectedParagraph={selectedParagraph}
                   timeRemaining={timeRemaining}
                   timerStarted={timerStarted}
                   testInfo={testInfo}
                   handleUserInput = {handleUserInput}
             />
         </div>
        </div>
  )
}
