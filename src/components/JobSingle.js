import React from "react";

const JobSingle = ({ job }) => {
    console.log("job in jobSingle: ", job)
    return (
        <div>
            <h4>{job.title}</h4>
        </div>
    )
}

export default JobSingle;