import React from 'react';
import './TestContainer.css';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';

// Here we have to do conditional rendering among
// TryAgain.jsx
// TypingChallengeContainer.jsx

function TestContainer({
    para,
    words,
    character,
    wpm,
    timeRemaining,
    timerStarted,
}) {

    return (
        <>
            <div className="test-container">
                {timeRemaining > 0 ? (
                    <div className="typing-challenge-container">
                        <TypingChallengeContainer
                            words={words}
                            characters={character}
                            wpm={wpm}
                            para={para}
                            timeRemaining={timeRemaining}
                            timerStarted={timerStarted}
                        />
                    </div>
                ) : (
                    <div className="try-again-container">
                        <TryAgain
                            words={words}
                            characters={character}
                            wpm={wpm}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

export default TestContainer;
