import styled from "styled-components";

export const StyledInfo = styled.nav`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  background: white;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 80vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 19%;
  right: 0;
  transition: transform 0.3s ease-in-out;
  // overflow-y: scroll;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  p {
    font-size: 1.5rem;
    // text-transform: uppercase;
    padding: 1rem 0;
    // font-weight: bold;
    letter-spacing: 0.25rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;