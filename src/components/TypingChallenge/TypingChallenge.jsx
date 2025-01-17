import React from 'react';
import './TypingChallenge.css';

function TypingChallenge({ timeRemaining, timerStarted, selectedParagraph }) {
    return (
        <>
            <div className="typing-speed-container">
                <div className="timer-container">
                    <div className="timer">
                        00:
                        {timeRemaining >= 10
                            ? timeRemaining
                            : `0${timeRemaining}`}
                    </div>
                </div>
                {/* console.log(tie) */}
                {!timerStarted && (
                    <div className="timer-info">Start typing the test now!</div>
                )}
            </div>

            <div className="text-area-container">
                <div className="text-area-left">
                    <div className="textarea test-paragraph">
                        {selectedParagraph}
                    </div>
                </div>
                <div className="text-area-right">
                    <textarea
                        className="textarea"
                        placeholder="Start Typing Here..."
                    ></textarea>
                </div>
            </div>
        </>
    );
}

export default TypingChallenge;
