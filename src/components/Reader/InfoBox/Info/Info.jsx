import React from "react";
import PropTypes from "prop-types";
import { StyledInfo } from "./Info.styled";

const Info = ({ open, bookID, name, author, date, number }) => {
    // console.log("a" + date);
    return (
        <StyledInfo open={open}>
            {/* <p>{bookID}</p> */}
            <p>Name of Book: {name} </p>
            <p>Author: {author} </p>
            {/* <p>{date !== "" && date.split('T')[0]} </p> */}
            <p>Number of Chapters: {number} </p>
        </StyledInfo>
    );
};
Info.proptype = {
    open: PropTypes.bool.isRequired,
    date: PropTypes.instanceOf(Date)
};

export default Info;