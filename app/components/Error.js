import React from 'react';

export default function ErrorWall() {
    return (
        <div className="errorwall">
            <div className="errorwall-container">
                <p>Error 503</p>
                <p>Service unavailable!</p>
                <p>The server is not able to process the latest news at the moment. Please try again later.</p>
            </div>
        </div>
    );
}