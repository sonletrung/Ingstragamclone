import React from 'react';
import {ProfileUse} from "../../Components/ProfileComponets/ProfileUse";
import ReqUserPost from "../../Components/ProfileComponets/ReqUserPost";
const Profile = () => {
    return (
        <div className='px-20'>
           <div className=''>
               <ProfileUse></ProfileUse>
           </div>
            <div>
                <ReqUserPost></ReqUserPost>
            </div>
        </div>
    );
};

export default Profile;