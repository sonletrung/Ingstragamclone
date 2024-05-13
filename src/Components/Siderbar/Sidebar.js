import React, {useState} from 'react';
import { IoReorderFourSharp } from "react-icons/io5";
import {mainu} from "./SiderbarConfig"
import {useNavigate} from "react-router-dom";
import CreatePostModal from "../Post/CreatePostModal";
import {useDisclosure} from "@chakra-ui/react";
import SearchComponent from "../SearchComponenets/SearchComponent";
const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [activeTab,setActiveTab] = useState();
    const navigate = useNavigate();
    const [isSearchVisible,setIsSearchVisible]=useState(false);
    const handleTabClick = (title) =>{
        setActiveTab(title);
        if (title === "Profile") {
            navigate("/username");
        } else if (title === "Home") {
            navigate("/");
        } else if (title === "Create") {
            onOpen();
        } else if (title === "Search") {
            setIsSearchVisible(true);
            console.log(setIsSearchVisible);
        } else {
            setIsSearchVisible(false);
            console.log(setIsSearchVisible);
        }
    }
    return (
        <div className='sticky top-0 h-[100vh]'>
            <div className="flex flex-col justify-between h-full px-10">
                {<div>
                    <div className="pt-10">
                        <img className='w-40' src="https://i.imgur.com/zqpwkLQ.png" alt=""/>
                    </div>
                    <div className="mt-10 py-2">
                        {mainu.map((item) => (
                            <div onClick={() => handleTabClick(item.title)}
                                 className="flex items-center sb-5 cursor-pointer text-lg">
                                {activeTab === item.title ? item.activeIcon : item.icon}
                                <p className={`${activeTab === item.title ? "font-bold" : "font-semi-bold"}`}>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>}
                <div className='flex items-center cursor-pointer pb-10'>
                    <IoReorderFourSharp className='text-2xl'/>
                    {activeTab !== "Search" && <p className='ml-5'>More</p>}
                </div>
            </div>
            <CreatePostModal onClose={onClose} isOpen={isOpen}/>
            {isSearchVisible && <SearchComponent/>}
        </div>
    );
};

export default Sidebar;