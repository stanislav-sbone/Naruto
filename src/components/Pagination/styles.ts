import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    margin: 2rem 0;
`

export const PageButton = styled.button<{ isCurrentPage: boolean; }>`
    padding: 8px 12px;
    border: 1px solid ${(props) => (props.isCurrentPage ? "orange" : "#c6c6c6")};
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    background-color: ${(props) => (props.isCurrentPage ? "orange" : "transparent")};
`

export const ArrowButton = styled.button`
    transition: all 0.5s ease-in-out;
    border-radius: 8px;
    padding: 8px 10px;

    &:hover:not(:disabled) {
        background-color: orange;
        color: #252525;
    }

    &:disabled {
        cursor: not-allowed;
        color: #454545;
    }
`