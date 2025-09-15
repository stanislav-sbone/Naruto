import styled from "styled-components";
import type { AppTheme } from "../../theme";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    margin: 2rem 0;
`

export const PageButton = styled.button<{ $isCurrentPage: boolean, theme: AppTheme }>`
    padding: 8px 12px;
    border: 1px solid ${({$isCurrentPage}) => ($isCurrentPage ? "#ff8a00" : "#c6c6c6")};
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.name === 'dark' ? 'white' : '#252525'};
    background-color: ${({$isCurrentPage}) => ($isCurrentPage ? "#ff8a00" : "transparent")};
`

export const ArrowButton = styled.button<{ theme: AppTheme }>`
    transition: all 0.5s ease-in-out;
    border-radius: 8px;
    padding: 8px 10px;

    &:hover:not(:disabled) {
        background-color: #ff8a00;
        color: #252525;
    }

    &:disabled {
        cursor: not-allowed;
        color: ${({ theme }) => theme.name === 'dark' ? '#454545' : '#aaaaaa'};
    }
`