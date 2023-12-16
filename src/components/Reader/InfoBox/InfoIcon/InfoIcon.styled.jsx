import styled from "styled-components";

export const StyledInfoIcon = styled.button`
position: fixed;
top: 15%;
right: 2rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
color: #00a8fc;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;

&:focus {
  outline: none;
}
`;
