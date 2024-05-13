import React from 'react';
import {Modal, ModalBody, ModalContent,  ModalOverlay} from "@chakra-ui/react";
import {BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots} from "react-icons/bs";
import CommentCard from "./CommentCard";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {RiSendPlaneLine} from "react-icons/ri";
import './CommentCard.css'
const CommentModal = ({onClose,isOpen,isPostLiked,isSaved,handleisPostliked,handleSavePost}) => {

    return (
        <div>
            <Modal size='5xl' onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className='flex h-[75vh] '>
                            <div className='w-[45%] flex flex-col justify-center'>
                                <img className='max-h-full w-full' src='https://cdn.24h.com.vn/upload/3-2023/images/2023-07-09/Than-hinh-muot-muon-muot-cua-gai-xinh-xu-Han-co-trieu-fan-han-kyung-1688907525-217-width1440height1728.jpeg' alt=''/>
                            </div>
                            <div className=' w-[50%] pl-10'>
                                <div className='flex justify-between items-center py-5'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full'
                                                 src='https://duhocsunny.edu.vn/wp-content/uploads/2023/02/Ve-dep-diu-dang-cua-gai-Han-Quoc.jpg'
                                                 alt=''/>
                                        </div>
                                        <div className="ml-2">
                                            <p>user Name</p>
                                        </div>
                                    </div>
                                    <BsThreeDots/>
                                </div>
                                <hr/>
                                <div className='comment'>
                                    {[1,1,1,1,1].map(()=><CommentCard/>)}
                                </div>
<div className='absolute bottom-0 w-[50%]'>
    <div className='flex justify-between items-center w-full  py-4'>
        <div className='flex items-center space-x-2'>
            {isPostLiked ?
                <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-700' onClick={handleisPostliked}/> :
                <AiOutlineHeart className='text-xl hover:opacity-50 cursor-pointer'
                                onClick={handleisPostliked}/>}
            <FaRegComment className='text-xl hover:opacity-50 cursor-pointer'/>
            <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
        </div>
        <div className='cursor-pointer'>
            {isSaved ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer text-yellow-400' onClick={handleSavePost}></BsBookmarkFill> :
                <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost}/>}
        </div>
    </div>
    <div className='w-full py-2 '>
        <p>10 likes</p>
        <p className='opacity-50 text-sm'>1 day ago</p>
    </div>
    <div className='boder border-t w-full'>
        <div className="flex w-full items-center px-5 ">
            <BsEmojiSmile/>
            <input className='commentInputs' type='text' placeholder='add comments'/>
        </div>
    </div>
</div>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default CommentModal;