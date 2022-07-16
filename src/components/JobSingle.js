import React from "react";
import { Link } from "react-router-dom";
import '../cssFiles/jobs.css'

const JobSingle = ({ job }) => {
    return (
        <div className="job-single">
            <Link className="job-single-link" to={`/job/${job.id}`}>{job.title}</Link>
            <p className="job-single-url">{job.jobURL}</p>
        </div>
    )
}

export default JobSingle;