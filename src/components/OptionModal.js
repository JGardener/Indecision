import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal
    isOpen={!!props.selectedOption}
    // If the user hits ESC, or clicks outside of the modal
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    {/* Button to close the modal */}
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
  )
}

export default OptionModal;