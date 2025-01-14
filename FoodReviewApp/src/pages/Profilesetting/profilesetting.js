import React, { useEffect, useState } from "react";
import FRHeader from "../../components/common/header/header";
import { useNavigate} from "react-router-dom";
import noprofile from '../../Assets/images/Dashboard/noprofile.jpg';
import '../../Assets/css/profilesetting.css';
import PRInfo from "../../components/profilesetting/PRinfo";
import PRICnav from "../../components/profilesetting/PRICnav";
import { IoHeartOutline } from "react-icons/io5";
import { PiBell} from "react-icons/pi";
import FDHeader from "../../components/Dashboard/FDHeaderCon";
import PRGnnav from "../../components/profilesetting/PRGnnav";
import { LiaUserEditSolid } from "react-icons/lia";
import { profilebyid } from "../../api";
export default function FRProfileSetting() {
   const [loader, setLoader] = useState(false);
   const [profiledata,setprofiledata]=useState(null);
   const navigate = useNavigate();
   const userid=localStorage.getItem('userid');
    useEffect(()=>{
     if(!userid){
        navigate('/login');
        return;
     }
    callpageloadfunction();
    },[])
   const callpageloadfunction=async()=>{
     try {
        await getuserdata();
     } catch (error) {
      console.log(error); 
     }
     finally{
     }
   }
    const getuserdata=async()=>{
        try {
            const res = await profilebyid(userid);
            if (res.status === 200 || 201) {
              setprofiledata(res?.data?.data);
            }
          } catch (error) {
            console.log(error)
          }
    }

   return (
      <div className='pr-main-con'>
         <FRHeader title={'Profile Setting'} 
         backbtn={true}
         clickfun={()=>{navigate(-1)}}
         />
         <div className="ps-setting-con">
            <PRInfo 
               name={profiledata?.name}
               email={profiledata?.email}
               image={profiledata?.profile}
               onclickfun={null}
               />
               <div className="PR-IC-nav-con">
                <PRICnav 
                name={'Liked Recipe'}
                onclickfun={()=>{navigate('/likedrecipe')}}
                icon={<IoHeartOutline className="PR-IC" />}
                />
                <PRICnav 
                name={'Notifications'}
                onclickfun={()=>{navigate('/Notification')}}
                icon={<PiBell className="PR-IC" />}
                />
                <PRICnav 
                name={'Edit Profile'}
                onclickfun={()=>{navigate('/ProfileEdit')}}
                icon={<LiaUserEditSolid className="PR-IC" />}
                />
               </div>
              <div className="PR-general-con">
                  <FDHeader title={'General'} />
                  <div className="PR-Gn-nav-con">
                    <PRGnnav name={'About'} goicon={true} onclickfun={()=>{}} />
                    <PRGnnav name={'Help & Support'} goicon={true} onclickfun={()=>{}} />
                    <PRGnnav name={'Rate Us'} goicon={true} onclickfun={()=>{}} />
                    <PRGnnav name={'Logout'} onclickfun={()=>{localStorage.clear();navigate('/login')}} />
                  </div>
              </div>
         </div>
      </div>
   );
}
