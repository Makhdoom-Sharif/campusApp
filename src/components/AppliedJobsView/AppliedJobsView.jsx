import { Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Main from '../MainCards/Main'

const AppliedJobsView = () => {

    const UserDetails = useSelector((state) => state.user)
    return (
        <div>
            {UserDetails.AppliedJobs.length < 1 ?
                <>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        gutterBottom
                    > You have'nt applied for any job</Typography>
                    <img src="https://i.ibb.co/sm1xMwz/applied.png" alt="applied" border="0" />
                </>
                :

                <Main
                    alljobs={UserDetails.AppliedJobs}
                    uid={UserDetails.uid}
                    DialogBox={false}
                    EditModal={false}
                    Title={"Applied Jobs"} />}
        </div>
    )
}

export default AppliedJobsView