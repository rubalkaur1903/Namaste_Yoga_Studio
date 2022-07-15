import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
    Members,
    Home
} from '../components'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path="/team_members" element={<Members />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;