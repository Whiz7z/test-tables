import React from "react";
import {
  FaSortNumericDownAlt,
  FaSortNumericUpAlt,
  FaSortAlphaDownAlt,
  FaSortAlphaUpAlt,
} from "react-icons/fa";
import "../styles/SortingBtn.css";

type Props = {
  state: "descended" | "ascended" | string | null;
  onClick: () => void;
  numeric: boolean;
};

const SortingBtn = ({ state, onClick, numeric }: Props) => {
  let content;
  if (numeric) {
    {
      state === "descended"
        ? (content = <FaSortNumericDownAlt />)
        : (content = <FaSortNumericUpAlt />);
    }
  } else if (!numeric) {
    {
      state === "descended"
        ? (content = <FaSortAlphaDownAlt />)
        : (content = <FaSortAlphaUpAlt />);
    }
  }

  return (
    <div className="btn-container" onClick={() => onClick()}>
      {content}
    </div>
  );
};

export default SortingBtn;
