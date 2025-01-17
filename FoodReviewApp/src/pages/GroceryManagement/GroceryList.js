import React, { useState } from "react";
import FRHeader from "../../components/common/header/header";
import { useNavigate } from "react-router-dom";
import BottomNavbar from "../../components/common/navbar/Bottomnavbar";
import '../../Assets/css/GroceryList.css';
import StickyButtonRightBtn from "../../components/common/button/StickyBottomRightBtn";
import { SiCodechef } from "react-icons/si";
import AddGroceryPopupComponent from "../../components/Modal/Grocery/AddGrocery";
import { IoFastFoodSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbShoppingBagEdit } from "react-icons/tb";
import EditGroceryPopupComponent from "../../components/Modal/Grocery/EditGrocery";
export default function FRGroceryList() {

    const navigate = useNavigate();
    const [AddItemmodalOpen, setAddItemmodalOpen] = useState(false); 
    const [EditItemmodalOpen, setEditItemmodalOpen] = useState(false); 
    return (
        <div className='pr-main-con'>
            <FRHeader title={'Grocery'}
                backbtn={true}
                clickfun={() => { navigate(-1) }}
            />
            <div className="FR-GP-con">
             <StickyButtonRightBtn
             label={'Add Item'}
             clickfun={()=>{setAddItemmodalOpen(true)}}
             icon={<SiCodechef className="sticky-btn-icon" />}
             />
             <div className="GI-con">
               <div className="GI-con-left">
                <IoFastFoodSharp />
               </div>
               <div className="GI-con-right">
                 <div className="GI-Con-title">Brinjal</div>
                 <div className="GI-Con-Unit">45 kg</div>
               </div>
               <div className="last-div">
               <div className="ED-con" onClick={()=>{setEditItemmodalOpen(true)}}>
               <TbShoppingBagEdit />
               </div>
               <div className="ED-con">
                <RiDeleteBin6Line />
               </div>
               </div>
               
             </div>
             <AddGroceryPopupComponent  modalOpen={AddItemmodalOpen} setModalOpen={setAddItemmodalOpen} />
             <EditGroceryPopupComponent modalOpen={EditItemmodalOpen} setModalOpen={setEditItemmodalOpen} />
            </div>
            <BottomNavbar page={'grocery'}  />
        </div>
    );
}
