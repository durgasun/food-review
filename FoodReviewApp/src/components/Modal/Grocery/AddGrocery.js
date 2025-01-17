
import React, { useState } from "react";
import '../../../Assets/css/profilecreation.css';
import BaseModal from "../Basemodal";
import BasicInput from "../../common/input/profileinput/profileinput";
import SimpleButton from "../../common/button/SimpleButton";
import { MdFileUpload } from "react-icons/md";
import { useFormik } from "formik";
import { AddGloceryValidation } from "../../../validation/validation";
import { GiFoodTruck } from "react-icons/gi";
import BasicSelectInput from "../../common/input/selectinput/SearchSelectInput";

const AddGroceryPopupComponent = ({
  modalOpen,
  setModalOpen,
}) => {
  const [loader, setLoader] = useState(false);
  const formik = useFormik({
    initialValues: {
      gloceryname: null,
      gloceryprofile: null,
      gloceryunit:null,
      gloceryunitcount: null,
    },
    validationSchema: AddGloceryValidation,
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log(values);
      setLoader(true);
      const { gloceryname, gloceryprofile, gloceryunit, gloceryunitcount } = values;
      
      //  try {
      //     const res = await UpdateProfile({
      //        id:userid,
      //        data:{
      //           name:name,
      //           email:email,
      //           bio:bio,
      //           profile:profile
      //        }

      //     });
      //     if (res.status === 200 || 201) {
      //        setLoader(false);
      //        toast.success('Profile Updated Successfully', { id: '001' });
      //        setTimeout(() => {
      //           navigate('/Dashboard');  
      //       }, 2000);
      //     }
      //  } catch (error) {
      //     setLoader(false);
      //     toast.error(error.response.data.message || 'Something Went Wrong');
      //  }
    },
  });

  const handleChange = (e) => {
    formik.handleChange(e);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        formik.setFieldValue('gloceryprofile', reader.result);
      };
    }
  };
  const handleCloseModal = async() => {
    setModalOpen(false);
    formik.resetForm();
    setLoader(false);
  }
  return (
    <div>
      <BaseModal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        title="Add Item"
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="profile-inp-con">
            <div className="profile-inp-img-single-con">
              <div className="profile-img-inp">
                {
                  formik?.values?.gloceryprofile ?
                    <img src={formik?.values?.gloceryprofile} alt="" className="profile-img-img" /> :
                    <GiFoodTruck className="profile-img-ic" />
                }

              </div>
              <div className="profile-img-up-inp" onClick={() => document.getElementById('file-input').click()}>
                <MdFileUpload className="profile-img-up-ic" />
                <span className="profile-img-up-txt">Glocery Img</span>
              </div>
              <input
                id="file-input"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange} // Handle file selection
              />
            </div>

            <BasicInput
              formik={formik}
              formikname={'gloceryname'}
              handleChange={handleChange}
              placeholder={'Glocery Name'}
              label={'Glocery Name'}
              value={formik?.values?.gloceryname}
            />

            <BasicSelectInput
              formik={formik}
              handleChange={(selected) => console.log(selected)}
              formikname="gloceryunit" 
              placeholder="Select a Unit"
              label="Select a Unit"
              options={[
                { value: "", label: "Select Unit" },
                { value: "g", label: "Gram (g)" },
                { value: "mg", label: "Milligram (mg)" },
                { value: "kg", label: "Kilogram (kg)" }, 
                { value: "piece", label: "Piece" } 
              ]}
            />
           <BasicInput
              formik={formik}
              formikname={'gloceryunitcount'}
              handleChange={handleChange}
              placeholder={'Unit Count'}
              label={'Count of the Unit'}
              value={formik?.values?.gloceryunitcount}
            />

            <div className="profile-submit-con">
              <SimpleButton
                btntext={loader ? 'Processing....' : 'Add Glocery'}
              />
            </div>
          </div>
        </form>
      </BaseModal>
    </div>
  );
};

export default AddGroceryPopupComponent;
