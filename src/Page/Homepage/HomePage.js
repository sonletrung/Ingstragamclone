import React from 'react';
import StoryCride from "../../Components/Story/StoryCride";
import HomeRight from "../../Components/HomeRight/HomeRight"
const HomePage = () => {
    return (
        <div>
            <div>
                <div className="w-[44%] px-10">
                    <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full">
                        {[1,1,11].map((item=><StoryCride/>))}
                    </div>
                </div>
                <div>
                    POst
                </div>
            </div>
            <div>
                <HomeRight></HomeRight>
            </div>
        </div>
    );
};

export default HomePage;