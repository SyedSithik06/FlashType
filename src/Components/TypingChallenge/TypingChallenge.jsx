import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import './TypingChallenge.css';

export default function TypingChallenge( {
     timeRemaining,
     handleUserInput,
     timerStarted,
     testInfo,
     } ) {
  return (
     <div className="typing-challenge">
        <div className="timer-container">
            <p className="timer">
                00:
                {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}</p>
            <p className="timer-info">
                {!timerStarted && "Start typing to start the test "}
            </p>
        </div>

        <div className="textarea-container">
            <div className="textarea-left">
                <div className="textarea test-paragraph">
                    {/*selectedParagraph*/}
                    {testInfo.map((individualLetterInfo, index)=>{
                            return(
                              <TestLetter 
                                 key={index}
                                 individualLetterInfo={individualLetterInfo}
                            />)
                        })
                    }
                </div>
            </div>
            <div className="textarea-right">
               <textarea
                onChange={(e) => handleUserInput(e.target.value)}
                className='textarea' 
                placeholder='Start Typing  Here...'>
                   
               </textarea>
            </div>
        </div>
     </div>
  );
}
