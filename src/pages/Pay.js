import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "92%",
    height: "300px",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#F2F0EA",
  },
};

function Pay() {
  const [modalIsOpen, setIsOpen] = React.useState(true);
  return (
    <div className="home-container">
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <img
            src="https://www.starbucks.in/assets/icon/Group%20566.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center">
            You have not sign up yet, so you are not able to buy and pay for any
            product from Starbuck site. First You have to create the account and
            then verify mail.
          </p>
          <Link to="/">
            <div className="modal-close-btn">Close</div>
          </Link>
        </div>
        <div className="flex justify-end">
          <img src="https://www.starbucks.in/assets/icon/Group45.svg" alt="" />
        </div>
      </Modal>
    </div>
  );
}

export default Pay;
