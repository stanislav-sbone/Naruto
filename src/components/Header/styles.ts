import styled from "styled-components";

export const HeaderBar = styled.header`
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
`;

export const Logo = styled.img`
    max-width: 180px;
    cursor: pointer;
`

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    column-gap: 5rem;
`
export const Link = styled.button`
    transition: color 0.4s ease;
    font-weight: 600;

    &:hover {
        color: #ff8a00;
    }
`
