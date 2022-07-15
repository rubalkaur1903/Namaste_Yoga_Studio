import React from "react";

const MemberSingle = ({member}) => {
    return (
        <div>
            <h2>{member.firstName} {member.lastName}</h2>
        </div>
    )
}

export default MemberSingle;