import React from 'react';
import {useNavigate} from "react-router-dom";

const StoryCride = () => {
    const navigate = useNavigate();
    const handleNavigate =()=>{
        navigate("/story")
    }
    return (
        <div onClick={handleNavigate} className="cursor-pointer flex flex-col items-center">
            <img className="w-16 h-16 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAPB-uh1XbtprgB0hBEVkjQlwa7JTpGDiI-TmiugRDg&s" alt=""/>
            <p>User Name</p>
        </div>
    );
};

export default StoryCride;