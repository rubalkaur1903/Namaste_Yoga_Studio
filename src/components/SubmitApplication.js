import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitApplication = () => {
    const [ fullName, setFullName ] = useState('');
    const [ email, setEmail ] = useState('')
    const [ linkedInURL, setLinkedInURL ] = useState('');
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Congratulations! You have successfully applied for this job!")
        navigate('/jobs')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>Name: </label>
                    <input type='text' placeholder="Full Name" value={fullName} onChange={(e) => {setFullName(e.target.value)}} />
                </fieldset>
                <fieldset>
                    <label>Email: </label>
                    <input type='text' placeholder="Email Address" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                </fieldset>
                <fieldset>
                    <label>LinkedIn: </label>
                    <input type='text' placeholder="LinkedIn URL" value={linkedInURL} onChange={(e) => {setLinkedInURL(e.target.value)}} />
                </fieldset>
                <fieldset>
                    <button type="submit">Submit Application</button>
                </fieldset>
            </form>
        </div>
    )
}

export default SubmitApplication;