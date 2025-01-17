import React from 'react';
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
import './Basemodal.css';

// Set the app element for accessibility purposes (ARIA support)
Modal.setAppElement('#root');

const BaseModal = ({ isOpen, onRequestClose, title, children }) => {
  const customStyles = {
    
    overlay: {
      backgroundColor: '#fffafa80',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel={title || "Modal"}
    >
      <div className='modal-title-con'>
           <div className='modal-title'>{title}</div>
        <button
          className='Modal-close'
          onClick={onRequestClose}
        >
         <IoCloseSharp />
        </button>
      </div>
      <div className='modal-main-con'>
        {children}
      </div>
    </Modal>
  );
};

export default BaseModal;
