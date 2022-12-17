import React from 'react';
import './TryAgain.css';

export default function TryAgain({words,characters,wpm, startAgain}) {

  return (
     <div className="try-again-cont">
        <h1>Test Results</h1>

        <div className="result-cont">
            <p>
                <b>Characters:</b>{characters}
            </p>
            <p>
                <b>Words:</b>{words}
            </p>
            <p>
                <b>Speed:</b>{wpm} wpm
            </p>
        </div>
        <div>
            <button onClick={() =>  startAgain()} className='end-button start-again-btn'>
                Re-try
            </button>
        </div>
     </div>
  )
}
