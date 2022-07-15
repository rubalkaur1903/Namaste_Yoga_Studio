import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../cssFiles/app.css'

import {
    Members,
    Home,
    Navbar,
    Jobs
} from '../components'
import { callApi } from "./util";

const App = () => {
    const [ teamMembers, setTeamMembers ] = useState([]);
    const [ jobs, setJobs ] = useState([])
    console.log("teamMembers: ", teamMembers)
    console.log("jobs: ", jobs)

    const fetchTeamMembers = async () => {
        const membersResp = await callApi({
            url: '/team_members'
        });
        console.log("membersResp: ", membersResp)
        if(membersResp) setTeamMembers(membersResp)
        return membersResp;
    }

    const fetchJobs = async () => {
        const jobsResp = await callApi({
            url: '/jobs'
        });
        console.log("jobsResp", jobsResp);
        if(jobsResp) setJobs(jobs)
    }

    useEffect(() => {
        try {
            fetchTeamMembers();
        } catch (error) {
            console.error(error);
        }
    }, [])

    useEffect(() => {
        try {
            fetchJobs();
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
                    <Route exact path="/jobs" element={<Jobs jobs={jobs} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;