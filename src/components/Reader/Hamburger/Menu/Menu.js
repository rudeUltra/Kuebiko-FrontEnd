// Menu.js
import React from "react";
import { bool, func } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, chapters, setChapterNo }) => {
  return (
    <StyledMenu open={open}>
      {/* {chapters && chapters.forEach((element, index) => (
        <button onClick={() => setChapterNo(index)}>{ element["Chapter"]}</button>
      ))} */}
      {/* {chapters && chapters.forEach((element, index) => {
        // console.log(element, ", ", index);
        return(<button onClick={() => setChapterNo(index)}>{element["Chapter"]}</button>);
      })} */}
      <button onClick={() => setChapterNo(0)}>Chapter 1</button>
      <button onClick={() => setChapterNo(1)}>Chapter 2</button>
      <button onClick={() => setChapterNo(2)}>Chapter 3</button>
      <button onClick={() => setChapterNo(3)}>Chapter 4</button>
      <button onClick={() => setChapterNo(4)}>Chapter 5</button>
      <button onClick={() => setChapterNo(5)}>Chapter 6</button>
      <button onClick={() => setChapterNo(6)}>Chapter 7</button>
      <button onClick={() => setChapterNo(0)}>Chapter 8</button>
      <button onClick={() => setChapterNo(0)}>Chapter 9</button>
      <button onClick={() => setChapterNo(0)}>Chapter 10</button>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  setChapterNo: func.isRequired,
};

export default Menu;
