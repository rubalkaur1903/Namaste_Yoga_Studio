import React from "react";
import JobSingle from "./JobSingle";

const Jobs = ({ jobs }) => {
    console.log("jobs in Jobs: ", jobs)
    return (
        <div>
            <h1>Jobs</h1>
            <div>
                {
                    jobs.map(job => {
                        return <JobSingle key={job.id} job={job} />
                    })
                }
            </div>
        </div>
    )
}

export default Jobs;