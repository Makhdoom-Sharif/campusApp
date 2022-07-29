import { Typography } from '@mui/material';
import * as React from 'react';
import { useSelector } from "react-redux";
import Main from '../MainCards/Main';


const PostedJobs = () => {



    const UserDetails = useSelector((state) => state.user)

    return (
        <div>
            {UserDetails.alljobs.length < 1 ?
                <>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        gutterBottom
                    > You have'nt posted any job</Typography>
                    <img src="https://i.ibb.co/sm1xMwz/applied.png" alt="applied" border="0" />
                </>
                :
                <Main
                    alljobs={UserDetails.alljobs}
                    uid={UserDetails.uid}
                    DialogBox={false}
                    EditModal={true}
                    Title={"Posted Jobs"}
                />

            }   </div>)
}

export default PostedJobs