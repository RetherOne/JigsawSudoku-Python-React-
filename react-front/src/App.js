import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import SingUp from './components/SingUp';



function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/singup" element={<SingUp />} />
            </Routes>
        </div>
    );
}

export default App;
