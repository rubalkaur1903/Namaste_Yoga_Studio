import React, { useEffect, useState } from "react";
import JobSingle from "./JobSingle";
import { callApi } from "./util";
import '../cssFiles/jobs.css'

const Jobs = () => {
    const [ jobs, setJobs ] = useState([]);
    const fetchJobs = async () => {
        const jobsResp = await callApi({
            url: '/jobs'
        });
        if(jobsResp) setJobs(jobsResp)
    }
    useEffect(() => {
      try {
        fetchJobs();
      } catch (error) {
        console.error(error)
      }
    }, [])
    
    return (
        <div>
            <div className="culture">
                <h1 className="jobs-heading">Join our team!</h1>
                <p className="culture-paragraph">At Namaste Yoga, our team's success and customer satisfaction are our top priorities. As we care about our customers' well-being, we also care about our employees' health care. We are a team of extremely kind, funny and creative people who love helping each other grow.</p>
            </div>
            <div className="jobs-culture-images">
                <img className="culture-image" src="https://www.thestatesman.com/wp-content/uploads/2022/01/yog-2.jpg" alt="yoga work culture" />
                <img className="culture-image" src="https://img.freepik.com/free-vector/organic-flat-illustration-people-meditating_52683-60231.jpg?w=2000" alt="yoga work culture" />
            </div>
            <div className="jobs-div">
                <h1 className="jobs-h1">Job Openings</h1>
                <h2 className="jobs-h2">We cannot wait to meet you. Please click on the job title to submit your application. Good Luck!!</h2>
                <div className="all-jobs">
                    {
                        jobs ?
                        jobs.map(job => {
                            return <JobSingle key={job.id} job={job} />
                        }) :
                        <div className="no-jobs">
                            <h1>We are not hiring right now. Please follow us on Instagram and Twitter to get updates on our Job Openings!</h1>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs;