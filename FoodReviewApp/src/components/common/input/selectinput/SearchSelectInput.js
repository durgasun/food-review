import React from "react";
import Select from "react-select";
import "../profileinput/profileinput.css"; // Adjust path as needed
import InputErrMsg from "../errors/InputErr"; // Adjust path as needed

export default function BasicSelectInput({
  formik,
  handleChange,
  formikname,
  placeholder,
  label,
  options,
}) {
  // Handle change from react-select and update Formik
  const handleSelectChange = (selectedOption) => {
    formik.setFieldValue(formikname, selectedOption); // Set selected option in Formik
    if (handleChange) handleChange(selectedOption); // Custom callback if provided
  };

  // Get selected value for react-select
  const getSelectedOption = () => formik.values?.[formikname] || null;
  return (
    <div className="single-profile-con">
      <div className="SPC-inp">
        <Select
          options={options}
          placeholder={placeholder}
          value={getSelectedOption()}
          onChange={handleSelectChange}
          classNamePrefix={
            formik?.touched?.[formikname] && formik?.errors?.[formikname]
              ? "select-err" // Add error styling class
              : "select-basic" // Add default styling class
          }
          defaultValue={formik?.values?.[formikname]?.value || ''}
        />
      </div>
      {/* Display error message if validation fails */}
      {formik.touched?.[formikname] && formik.errors?.[formikname] && (
        <InputErrMsg errtxt={formik.errors[formikname]?.value || "Invalid selection"} />
      )}
    </div>
  );
}
