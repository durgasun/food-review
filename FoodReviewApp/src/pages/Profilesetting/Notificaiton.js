import React from "react";
import FRHeader from "../../components/common/header/header";
import { useNavigate } from "react-router-dom";
import '../../Assets/css/notification.css';
import FRNotificationComponent from "../../components/Notification/FRNotificationCon";
import { getIconByType, getRelativeTime } from "../../helperfunction/formatfunciton";

export default function FRNotification() {

    const navigate = useNavigate();
    const notifications = [
        {
            id: 1,
            readStatus: false,
            head1: 'New Follower',
            head2: 'Yeay you got new follower!',
            des: 'Nararaya Susanti has followed you',
            iconType: 'newFollower',
            timestamp: new Date().getTime() - 60 * 1000, // 1 minute ago
        },
        {
            id: 2,
            readStatus: false,
            head1: 'Bookmark Added',
            head2: 'You saved a new bookmark!',
            des: 'You bookmarked the article "React Essentials."',
            iconType: 'bookmark',
            timestamp: new Date().getTime() - 2 * 60 * 60 * 1000, // 2 hours ago
        },
        {
            id: 3,
            readStatus: false,
            head1: 'Liked Post',
            head2: 'Someone liked your post!',
            des: 'Sarah liked your recent post.',
            iconType: 'like',
            timestamp: new Date().getTime() - 24 * 60 * 60 * 1000, // 1 day ago
        },
        {
            id: 4,
            readStatus: false,
            head1: 'New Review',
            head2: 'A new review is here!',
            des: 'James left a review on your product.',
            iconType: 'newReview',
            timestamp: new Date().getTime() - 5 * 60 * 60 * 1000, // 5 hours ago
        },
        {
            id: 5,
            readStatus: false,
            head1: 'Review Liked',
            head2: 'Your review got a like!',
            des: 'Lara liked your review on the book "Atomic Habits."',
            iconType: 'reviewLike',
            timestamp: new Date().getTime() - 15 * 60 * 1000, // 15 minutes ago
        },
    ];
    return (
        <div className='pr-main-con'>
            <FRHeader title={'Notification'}
                backbtn={true}
                clickfun={() => { navigate(-1) }}
                custombutton={
                    <div className="clear-container">
                        Clear
                    </div>
                }
            />
            <div className="notification-container">
                {notifications.map((notification) => (
                    <FRNotificationComponent
                        key={notification.id}
                        Readstatus={notification.readStatus}
                        head1={notification.head1}
                        head2={notification.head2}
                        des={notification.des}
                        icon={getIconByType(notification.iconType)}
                        time={getRelativeTime(notification.timestamp)}
                    />
                ))}
            </div>
            <div className="FR-Notificaiton-bottom-con">
                <div className="FR-NBC-MAAR">Mark All as Read</div>
            </div>


        </div>
    );
}
