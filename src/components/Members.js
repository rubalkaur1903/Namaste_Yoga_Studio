import React from "react";
import MemberSingle from "./MemberSingle";
import '../cssFiles/members.css'

const Members = ({teamMembers}) => {
    return (
        <div>
            <h1 className="members-heading" >Amazing Namaste Yoga Family</h1>
            <div className="members-container">
                {
                    teamMembers.map(member => {
                        return <MemberSingle key={member.id} member={member} />
                    })
                }
            </div>
        </div>
    )
}

export default Members;