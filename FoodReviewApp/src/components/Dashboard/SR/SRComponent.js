import React from "react";
import './SRComponent.css';
import { IoHeartSharp } from "react-icons/io5";
import { PiPlayDuotone } from "react-icons/pi";
import { IoHeartOutline } from "react-icons/io5";
import { FaComments } from "react-icons/fa6";
export default function SRComponent({
    image,
    title,
    userprofile,
    username,
    likecount,
    reviewcount,
    selfheart,
    videoelement,
    onHeartClick
}) {
    return (
        <div className='SR-con'>
            <div className='SR-top-con'>
                {
                    videoelement &&  
                    <div className='video-play-btn-con'>
                    <PiPlayDuotone className='video-play-btn-ic' />
                     </div>
                }
               
                <img src={image} alt='' className='SR-CV-img' />
            </div>
            <div className='SR-bottom-con'>
                <div className='SR-Topic'>{title}</div>
                <div className='SR-user-con'>
                    <img src={userprofile} alt='' className='SR-profile-img' />
                    <div className='SR-profile-name-con'>
                        <div className='SR-profile-name'>{username}</div>
                        <div className='SR-like-review-con'>
                            <div className='SR-Lr'>
                                <IoHeartSharp className='SR-Lr-ic' />
                                <div className='SR-Lr-count'>{likecount}</div>
                            </div>
                            <div className='SR-Lr'>
                                <FaComments className='SR-Lr-ic SR-R-ic' />
                                <div className='SR-Lr-count'>{reviewcount}</div>
                                {/* <div className='SR-Lr-count'>Reviews</div> */}
                            </div>
                        </div>
                    </div>
                    <div className='SR-Like-Big-con' onClick={onHeartClick}>
                        {
                            selfheart ? <IoHeartSharp className='SR-like-ic-big' /> : <IoHeartOutline className='SR-like-ic-big' />
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}