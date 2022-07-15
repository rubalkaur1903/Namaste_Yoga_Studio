import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../cssFiles/app.css'

import {
    Members,
    Home,
    Navbar
} from '../components'
import { callApi } from "./util";

const App = () => {
    const [ teamMembers, setTeamMembers ] = useState([]);
    console.log("teamMembers: ", teamMembers)

    const fetchTeamMembers = async () => {
        const membersResp = await callApi({
            url: '/team_members'
        });
        console.log("membersResp: ", membersResp)
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
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;