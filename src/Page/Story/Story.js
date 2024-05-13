import React from 'react';
import StoryViewer from "../../Components/StoryComponents/StoryViewer";

const Story = () => {
    const story = [{image: 'https://vnn-imgs-f.vgcloud.vn/2018/03/17/20/nhung-nu-than-tuong-goc-hoa-xinh-dep-lan-at-ca-si-goc-han-tai-kpop-1.jpg'},
        {image: 'https://kenh14cdn.com/thumb_w/660/2020/3/9/photo-1-15837335088561354789571.jpeg'},
        {image: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/5/19/911141/Ca-Si-TWICE-Jihyo.jpg'},
        {image: 'https://thegioidienanh.vn/stores/news_dataimages/anhvu/112020/10/21/2623_oquqykx4vme31.jpg'}]
    return (
        <div>
            <StoryViewer stories={story}/>
        </div>
    );
};

export default Story;
