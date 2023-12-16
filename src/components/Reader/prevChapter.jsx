import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const StyledButton = styled.button`
    position: fixed;
    bottom: 15%;
    left: 2rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background-color: #00a8fc;
    border: 1px solid transparent;
`;

const PrevChapter = ({disable, go}) => {
    return (
        <StyledButton disabled={disable} onClick={ () => go(prevState => (prevState-1))} >
            <FontAwesomeIcon icon={faArrowLeft} />
        </StyledButton>
    );
}

export default PrevChapter;