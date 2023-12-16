import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background-color: #00a8fc;
    // color: white;
    border: 1px solid transparent;
`;

const UserIcon = () => {
    return (
        <StyledButton>
            <FontAwesomeIcon icon={faUser} />
        </StyledButton>
    );
};

export default UserIcon;