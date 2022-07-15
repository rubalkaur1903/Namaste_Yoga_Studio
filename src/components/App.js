import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../cssFiles/app.css'

import {
    Members,
    Home,
    Navbar,
    Jobs,
    SubmitApplication
} from '../components'
import { callApi } from "./util";

const App = () => {
    const [ teamMembers, setTeamMembers ] = useState([]);

    const fetchTeamMembers = async () => {
        const membersResp = await callApi({
            url: '/team_members'
        });
        if(membersResp) setTeamMembers(membersResp)
        return membersResp;
    }

    useEffect(() => {
        try {
            fetchTeamMembers();
        } catch (error) {
            console.error(error);
        }
    }, [])

    return (
        <BrowserRouter>
            <div className="header">
                <Navbar />
            </div>
            <div>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path="/team_members" element={<Members teamMembers={teamMembers} />} />
                    <Route exact path="/jobs" element={<Jobs />} />
                    <Route exact path='/job/:id' element={<SubmitApplication />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;