import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import SingUp from './components/SingUp';
import Game from './components/Game';



function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/singup" element={<SingUp />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </div>
    );
}

export default App;
