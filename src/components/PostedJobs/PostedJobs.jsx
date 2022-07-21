import * as React from 'react';
import { useSelector } from "react-redux";
import Main from '../MainCards/Main';


const PostedJobs = () => {



    const UserDetails = useSelector((state) => state.user)

    return (
        <Main
            alljobs={UserDetails.alljobs}
            uid={UserDetails.uid}
            DialogBox={false}
            EditModal={true}
            Title={"Posted Jobs"}
        />
    )
}

export default PostedJobs