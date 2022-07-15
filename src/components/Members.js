import React from "react";
import MemberSingle from "./MemberSingle";

const Members = ({teamMembers}) => {
    return (
        <div>
            <h1>Members</h1>
            {
                teamMembers.map(member => {
                    return <MemberSingle key={member.id} member={member} />
                })
            }
        </div>
    )
}

export default Members;