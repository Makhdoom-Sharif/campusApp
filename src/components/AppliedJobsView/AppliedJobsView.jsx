import React from 'react'
import { useSelector } from 'react-redux'
import Main from '../MainCards/Main'

const AppliedJobsView = () => {

    const UserDetails = useSelector((state) => state.user)
    return (
        <div>
            <Main
                alljobs={UserDetails.AppliedJobs}
                uid={UserDetails.uid}
                DialogBox={false}
                EditModal={false}
                Title={"Applied Jobs"} />
        </div>
    )
}

export default AppliedJobsView