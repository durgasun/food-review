import React from "react";
import FRHeader from "../../components/common/header/header";
import { useNavigate } from "react-router-dom";
import '../../Assets/css/notification.css';
import image1 from "../../Assets/images/testing/biriyani.jpg";
import image2 from "../../Assets/images/testing/chicken_thadoori.jpg";
import image3 from "../../Assets/images/testing/chicken_nodels.jpg";
import image4 from "../../Assets/images/testing/cakes.jpg";
import LRComponent from "../../components/LikedRecipe/LRComponent";
export default function FRLikedRecipe() {

    const navigate = useNavigate();
    const LikedRecipe = [
        {
            "image": image1,
            "time": "20 min",
            "title": "Tasty and Spicy Andhra Style Chicken Biriyani",
            "type": "Easy"
        },
        {
            "image": image2,
            "time": "15 min",
            "title": "Delicious And Tasty Chicken Thandoori",
            "type": "Medium"
        },
        {
            "image": image3,
            "time": "10 min",
            "title": "Healthy and Tasty Noodels",
            "type": "Easy"
        },
        {
            "image": image4,
            "time": "20 min",
            "title": "Rich and Creamy Christmas cake",
            "type": "Hard"
        },

    ]

    return (
        <div className='pr-main-con'>
            <FRHeader title={'Liked Recipe'}
                backbtn={true}
                clickfun={() => { navigate(-1) }}
            />
            <div className="lR-con-div">
                {
                    LikedRecipe?.map((item) => {
                        return (
                            <LRComponent
                                image={item.image}
                                time={item.time}
                                title={item.title}
                                type={item.type}
                            />
                        )
                    })
                }


            </div>


        </div>
    );
}
