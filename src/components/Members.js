import React from "react";
import MemberSingle from "./MemberSingle";
import '../cssFiles/members.css'

const Members = ({teamMembers}) => {
    return (
        <div>
            <h1 className="members-heading" >Amazing Namaste Yoga Family</h1>
            <div className="members-container">
                {
                    teamMembers.length > 0 ?
                    teamMembers.map(member => {
                        return <MemberSingle key={member.id} member={member} />
                    }) :
                    <div>
                        <h1>Please check out our social media to know more about our Namaste Yoga Family!</h1>
                    </div>
                }
            </div>
        </div>
    )
}

export default Members;