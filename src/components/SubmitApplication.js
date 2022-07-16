import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../cssFiles/submitApplication.css'

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
        <div className="submission-form-page">
            <h1 className="submission-form-heading">Please Enter Your Info Below!</h1>
            <form 
                className="submission-form"
                onSubmit={handleSubmit} >
                    <div className="input">
                        <fieldset className="input-name">
                            <label className="submission-label-name">Name: </label>
                            <input className="submission-input-name" required type='text' placeholder="Full Name" value={fullName} onChange={(e) => {setFullName(e.target.value)}} />
                        </fieldset>
                        <fieldset className="input-email">
                            <label className="submission-label-email">Email: </label>
                            <input className="submission-input-email" required type='text' placeholder="Email Address" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                        </fieldset>
                        <fieldset className="input-linkedin">
                            <label className="submission-label-linkedin">LinkedIn: </label>
                            <input className="submission-input" required type='text' placeholder="LinkedIn URL" value={linkedInURL} onChange={(e) => {setLinkedInURL(e.target.value)}} />
                        </fieldset>
                        <fieldset className="submission-button">
                            <button type="submit">Submit Application</button>
                        </fieldset>
                    </div>
            </form>
        </div>
    )
}

export default SubmitApplication;