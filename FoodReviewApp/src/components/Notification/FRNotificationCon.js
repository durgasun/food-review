import React from "react";
import './FRNotificationCon.css'
export default function FRNotificationComponent({
Readstatus,
icon,
head1,
head2,
des,
time
}) {
    return (
        <div className="FR-NC-Con">
            <div className="FNC-ic-con">
               {icon}
            </div>
            <div className="FNC-middle-con">
                <div className="FNC-head-1">{head1}</div>
                <div className="FNC-head-2">{head2}</div>
                <div className="FNC-head-3">{des}</div>
            </div>
            <div className="FNC-last-con">
                <div className="FNC-minute">{time} </div>
            </div>
            {
             !Readstatus &&  <div className="FNc-Unread-dot" />
           }
        </div>
    )
}