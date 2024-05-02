import React from 'react';
import {TbCircleDashed} from "react-icons/tb";

export const ProfileUse = () => {
    return (
        <div className='py-10 w-full'>
            <div className='flex items-center'>
                <div className='w-[15%]'>
                    <img className='w-32 h-32 rounded-full' src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/3/12/790444/My-Nhan-Redvelvet6.jpg" alt="img"/>
                </div>
                <div className="space-y-5">
                    <div className="flex space-x-10 items-center">
                        <p>Username</p>
                        <button>Edit Profile</button>
                        <TbCircleDashed></TbCircleDashed>
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <span className="font-semibold mr-2">10</span>
                            <span>posts</span>
                        </div>
                        <div>
                            <span className="font-semibold mr-2">5</span>
                            <span>follower</span>
                        </div>
                        <div>
                            <span className="font-semibold mr-2">7</span>
                            <span>following</span>
                        </div>
                    </div>
                    <div>
                        <p className=" font-semibold">Full Name</p>
                        <p className="font-thin text-sm">lol</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

