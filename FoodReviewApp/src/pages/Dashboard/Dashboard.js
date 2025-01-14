import React, { useEffect, useRef, useState } from 'react';
import noprofile from '../../Assets/images/Dashboard/noprofile.jpg';
import { PiBell, PiChefHatDuotone } from "react-icons/pi";
import '../../Assets/css/dashboard.css';
import image1 from "../../Assets/images/testing/biriyani.jpg";
import image2 from "../../Assets/images/testing/chicken_thadoori.jpg";
import image3 from "../../Assets/images/testing/chicken_nodels.jpg";
import image4 from "../../Assets/images/testing/cakes.jpg";
import image5 from "../../Assets/images/testing/chikengravy.jpg";
import image6 from "../../Assets/images/testing/sambarsadam.jpg";
import image7 from "../../Assets/images/testing/venpongal.jpg";
import image8 from "../../Assets/images/testing/girl1.jpg";
import image9 from "../../Assets/images/testing/girl2.jpg";
import image10 from "../../Assets/images/testing/profile2.jpg";
import image11 from "../../Assets/images/testing/seasonal.jpg";
import image12 from "../../Assets/images/testing/cakes1.jpg";
import image13 from "../../Assets/images/testing/dailyfood.jpg";
import image14 from "../../Assets/images/testing/drinks.jpg";
import { COLORS } from '../../Assets/constants/Color';
import CookieBookComponent from '../../components/Dashboard/CookieBook/CookieBookComponent';
import FDHeader from '../../components/Dashboard/FDHeaderCon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { formatLargeNumber } from '../../helperfunction/formatfunciton';
import SRComponent from '../../components/Dashboard/SR/SRComponent';
import { data, useNavigate, useNavigation } from "react-router-dom";
import FCatComponent from '../../components/Dashboard/FCat/FCatComponent';
import { profilebyid } from '../../api';
import BottomNavbar from '../../components/common/navbar/Bottomnavbar';

export default function Dashboard() {
    const swiperRef = useRef(null);
    const navigate=useNavigate();
    const [pageloader,setpageloader]=useState(false);
    const Cookiebookdata = [
        { id: 0, image: image1, likecount: 10, noofrecepie: 70, title: 'Hyderabad Biryani', description: 'Hyderabad Biryani is a flavorful rice dish celebrated for its rich spices, tender meat, and iconic taste.' },
        { id: 1, image: image2, likecount: 140, noofrecepie: 5, title: 'Chicken Tandoori', description: 'Chicken Tandoori is a smoky, spiced, and grilled chicken dish marinated in yogurt and aromatic spices.' },
        { id: 2, image: image3, likecount: 1200, noofrecepie: 20, title: 'Chicken Noodles', description: 'Chicken Noodles is a delicious stir-fry dish made with tender chicken and flavorful noodles, combined with colorful vegetables and savory sauces.' },
        { id: 3, image: image4, likecount: 600, noofrecepie: 10, title: 'Christmas Cake', description: 'Christmas Cake is a rich, spiced fruit cake filled with dried fruits, nuts, and flavors of cinnamon, nutmeg, and rum, perfect for the holiday season.' },
    ]
    const [Featuredreceipedata, setFeaturedreceipedata] = useState([
        { id: 0, image: image5, likecount: 1000, noofreviews: 20, userprofile: image8, username: 'Roshini', title: 'Spicy Andhra Style Chicken Gravy', mylike: false, video: true },
        { id: 1, image: image6, likecount: 200, noofreviews: 10, userprofile: image9, username: 'Gayathri', title: 'Kovil Style Sambar Sadam Recipe', mylike: false, video: false },
        { id: 2, image: image7, likecount: 20, noofreviews: 15, userprofile: image10, username: 'Sri Selva Ganapathi Temple', title: 'Kovil Style Ven Pongal Recipe', mylike: false, video: false },

    ]);
    const Categorydata=[
        {id:0,image:image11,name:'Seasonal'},
        {id:1,image:image12,name:'Cakes'},
        {id:2,image:image13,name:'Everyday'},
        {id:3,image:image14,name:'Drinks'}
    ]
    const [currentpage, setCurrentPage] = useState(1);
    const [profiledata,setprofiledata]=useState(null);
    const toggleWishlist = (id) => {
        setFeaturedreceipedata(prevData => 
            prevData.map(item => 
                item.id === id ? { ...item, mylike: !item.mylike } : item
            )
        );
    };
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
        setpageloader(true);
        await getuserdata();
     } catch (error) {
      console.log(error); 
     }
     finally{
        setpageloader(false);
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
        <div className='dashboard-con'>
            <div className='dash-header-con'>
                <div className='profile-con'>
                    <img src={profiledata?.profile} alt='' className='dash-profile' onClick={()=>{navigate('/ProfileSetting')}} />
                    <div className='profile-name-con'>
                        <div className='profile-nac-1'>Hi {profiledata?.name}</div>
                        <div className='profile-nac-2'>{profiledata?.bio}</div>
                    </div>
                    <div className='notification-con' onClick={()=>{navigate('/Notification')}}>
                        <div className='noti-count-con'>1</div>
                        <PiBell className='notification-nav' />
                    </div>
                </div>
            </div>
            <div className='FD-main-container'>
                {
                    Cookiebookdata?.length > 0 &&
                    (
                        <div className='FD-Cookbook-con'>

                            <FDHeader
                                title={'Cookbooks'}
                                secondbtn={`${currentpage} / ${Cookiebookdata?.length}`}
                            />
                            <Swiper
                                ref={swiperRef}
                                modules={[Pagination]}
                                pagination={{ clickable: true }}
                                className="CookieBookSwiper"
                                onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex + 1)}
                            >
                                {
                                    Cookiebookdata?.map((item) => {
                                        return (
                                            <SwiperSlide>
                                                <CookieBookComponent
                                                    image={item?.image}
                                                    icon={<PiChefHatDuotone size={55} color={COLORS.primary} />}
                                                    title={item?.title}
                                                    Description={item?.description}
                                                    nooflikes={formatLargeNumber(item?.likecount)}
                                                    noofrecepie={formatLargeNumber(item?.noofrecepie)}
                                                />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>

                        </div>
                    )
                }
                {
                    Featuredreceipedata?.length > 0 &&
                    (
                        <div className='Featured-recepie'>
                            <div className='FR-heading-con'>
                                <FDHeader 
                                  title={'Featured Community Recipes'}
                                  secondbtn={'See All'}
                                  clickable={true}
                                  clickfun={()=>{}}
                                />
                                <div className='Fr-Des'>Get lots of recipe inspiration from the community</div>
                            </div>
                            <div className='FR-content-con'>
                                {
                                    Featuredreceipedata?.map((item) => {
                                        return (
                                            <SRComponent
                                                image={item?.image}
                                                title={item.title}
                                                username={item.username}
                                                userprofile={item.userprofile}
                                                likecount={formatLargeNumber(item.likecount)}
                                                reviewcount={formatLargeNumber(item.noofreviews)}
                                                selfheart={item.mylike || false}
                                                videoelement={item.video}
                                                onHeartClick={() => toggleWishlist(item.id)}
                                            />
                                        )
                                    })
                                }

                            </div>

                        </div>
                    )
                }
                {
                    Categorydata?.length > 0 &&
                    (
                        <div className='Featured-recepie'>
                            <div className='FR-heading-con'>
                                <FDHeader 
                                  title={'Categories'}
                                  secondbtn={'See All'}
                                  clickable={true}
                                  clickfun={()=>{}}
                                />
                            </div>
                            <div className='FCat-content-con'>
                              {
                                Categorydata?.map((item)=>{
                                  return(
                                    <FCatComponent name={item.name} image={item.image} clickfun={()=>{console.log(item.id)}} />
                                  )
                                })
                              }
                            </div>

                        </div>
                    )
                    
                }


            </div>
            <BottomNavbar page={'Home'}  />
        </div>
    )
}