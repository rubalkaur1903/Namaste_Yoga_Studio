import React from "react";
import { Link } from "react-router-dom";
import '../cssFiles/jobs.css'

const JobSingle = ({ job }) => {
    console.log("job in jobSingle: ", job)
    return (
        <div className="job-single">
            <Link className="job-single-link" to={`/job/${job.id}`}>{job.title}</Link>
        </div>
    )
}

export default JobSingle;