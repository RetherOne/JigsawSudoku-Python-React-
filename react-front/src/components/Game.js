import React from 'react';


function Game() {
    const htmlInputs = [];

    for (let i = 0; i < htmlInputs.length; i++) {
        htmlButtons.push(<input type="text" inputmode="numeric" readonly="readonly"/>);
    }

    return (
        <div>
            {htmlInputs}
        </div>
    );
}


export default Game;
