import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Game() {
    const htmlInputs = [];
    const [uncompliteMap, setUncompliteMap] = useState([]);
    for (let i = 0; i < 9; i++) {
            for (let i = 0; i < 9; i++) {
                htmlInputs.push(<input className='box' type="text" inputmode="numeric"/>);
            }
            htmlInputs.push(<br/>);
        }
    
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/game/?level=1')
            .then(response => {
                setUncompliteMap(response.data.uncomplite_map);
            });        
    }, []);

    return (
        <div className='map center'>
            {htmlInputs}
        </div>
    );
}


export default Game;
