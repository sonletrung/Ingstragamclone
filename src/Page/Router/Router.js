import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../Homepage/HomePage"
import Sidebar from "../../Components/Siderbar/Sidebar";
const Router = () => {
    return (
        <div>
            <div className="flex">
                <div className='w-[20%] border border-l-slate-500'>
                    <Sidebar></Sidebar>
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<HomePage />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Router;