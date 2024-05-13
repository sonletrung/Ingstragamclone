import React, {useState} from 'react';
import {Button, Modal, ModalBody,  ModalContent, ModalOverlay,} from "@chakra-ui/react";
import {FaPhotoVideo} from "react-icons/fa";
import "./CreatePostModal.css"
import {GrEmoji} from "react-icons/gr";
import {GoLocation} from "react-icons/go";

const CreatePostModal = ({onClose,isOpen}) => {
    const [isDragOver,setIsDragOver]=useState(false);
    const [file,setFile]=useState();
    const [caption,setCaption]=useState("");
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/")) {
            setFile(droppedFile);
        }
    }

    const handleDragOver=(event)=>{
        event.preventDefault();
        event.dataTransfer.dropEffect='copy';
        setIsDragOver(true);
    }
    const handleDragLave=()=>{
        setIsDragOver(false)
    }
    const handleOnchange=(e)=>{
        const file=e.target.files[0];
        if(file && (file.type.startsWith("image/") || file.type.startsWith("video/"))){
            setFile(file);
        }
        else {
            setFile(null);
            alert("please select an image or video")
        }
    }
    const handleCationChanges=(e) =>{
        setCaption(e.target.value);
    }
    return (
        <div>
            <Modal size='4xl' onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <div className='flex justify-between py-1 px-10 items-center'>
                        <p>Create New Post</p>
                        <Button className='inline-flex' variant={'ghost'} size='sm' colorScheme={'blue'}>
                            Share
                        </Button>
                    </div>
                    <hr/>
                    <ModalBody>
                    <div className='h-[70vh] justify-between pb-5 flex'>
                        <div className='w-[50%]'>
                            {!file && <div onDrop={handleDrop}
                                 onDragOver={handleDragOver}
                                 onDragLeave={handleDragLave}
                                 className='drag-drop h-full'
                            >
                                <div>
                                    <FaPhotoVideo className='text-3xl'/>
                                    <p>Drag Photo or video </p>
                                </div>
                                <label htmlFor='file-upload' className='custom-file-upload'> Select From Computer</label>
                                <input type='file' id='file-upload' accept='image/*,video/*' onChange={handleOnchange}/>
                            </div>}
                            {file && <img className='max-h-full' src={URL.createObjectURL(file)} alt=''/>}

                        </div>
                        <div className='w-[1px] border-2 h-full'></div>
                        <div className='w-[50%]'>
                            <div  className='flex items-center px-2 '>
                                <img className='w-9 h-9 rounded-full' src='https://img2.thuthuatphanmem.vn/uploads/2019/01/04/hinh-co-gai-xinh-dep-de-thuong_025104709.jpg' alt=''/>
                                <p className='font-semibold ml-4'> user name</p>
                            </div>
                            <div className='px-2'>
                                <textarea placeholder='write a caption' className='captionInput' name='caption' id='' rows='8' onChange={handleCationChanges}/>
                            </div>
                            <div className='flex justify-between px-2'>
                                <GrEmoji/>
                                <p className='opacity-70'>{caption?.length} /2,200</p>
                            </div>
                            <hr/>
                            <div className='flex p-2 justify-between items-center'>
                                <input className='locationInput' type='text' placeholder='location' name='location'/>
                                <GoLocation className='text-black'/>
                            </div>
                        </div>
                    </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default CreatePostModal;