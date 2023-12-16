import React from "react";
import { bool, func } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { StyledInfoIcon } from "./InfoIcon.styled";

const InfoIcon = ({ open, setOpen }) => {
  // let col = open ? "black" : "red";
  return (
    <StyledInfoIcon>
      <FontAwesomeIcon
        icon={faInfoCircle}
        size="2x"
        // color={col}
        onClick={() => setOpen(!open)}
      />
    </StyledInfoIcon>
  );
};
InfoIcon.proptype = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default InfoIcon;
