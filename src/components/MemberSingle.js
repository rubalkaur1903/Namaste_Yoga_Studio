import React from "react";
import '../cssFiles/members.css'

const MemberSingle = ({member}) => {
    return (
        <div className="members-info">
            <img src={member.imageURL} alt="profile photo" className="profile-image" height="250" width="200" />
            <h2 className="members-name" >{member.firstName} {member.lastName}</h2>
            <p className="members-title">{member.title}</p>
        </div>
    )
}

export default MemberSingle;