import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { IoHomeOutline } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { TbShoppingBagSearch } from "react-icons/tb";
import { FaShop } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import './Bottomnavbar.css';

export default function BottomNavbar({ page }) {
    const navigate = useNavigate(); // Use useNavigate inside the component

    return (
        <div className='FD-bottom-navbar'>
            <div className="FD-BN-icon-con">
                <IoHomeOutline 
                    className={`${page === "Home" ? "FD-BN-ic Active" : "FD-BN-ic"}`} 
                    onClick={() => { navigate('/dashboard'); }} 
                />
            </div>
            <div className="FD-BN-icon-con">
                <TbShoppingBagSearch 
                    className={`${page === "search" ? "FD-BN-ic Active" : "FD-BN-ic"}`} 
                />
            </div>
            <div className="FD-plus-con">
                <LuPlus className="FD-plus-ic" />
            </div>
            <div className="FD-BN-icon-con">
                <FaShop 
                    className={`${page === "shop" ? "FD-BN-ic Active" : "FD-BN-ic"}`} 
                />
            </div>
            <div className="FD-BN-icon-con">
                <IoCalendarOutline 
                    className={`${page === "calendar" ? "FD-BN-ic Active" : "FD-BN-ic"}`} 
                />
            </div>
        </div>
    );
}
