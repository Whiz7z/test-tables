import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MdOutlineArrowBack
        onClick={() => navigate(-1)}
        height={"40px"}
        width={"40px"}
        style={{ cursor: "pointer", width: "40px", height: "40px" }}
      />
    </div>
  );
};

export default BackBtn;
