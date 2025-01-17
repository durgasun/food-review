import React from 'react';
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
import './Basemodal.css';

// Set the app element for accessibility purposes (ARIA support)
Modal.setAppElement('#root');

const ConfirmationPopup = ({ isOpen, onRequestClose, title, description}) => {
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
           <div className='modal-cm-title'>{title}</div>
           <div className='modal-cm-des'>{description}</div>
           <div className='modal-cm-bottomp-con'>
             <div className='cancel-cm-btn'>Cancel</div>
             <div className='cancel-cm-btn'>Proceed</div>
           </div>
    </Modal>
  );
};

export default ConfirmationPopup;
