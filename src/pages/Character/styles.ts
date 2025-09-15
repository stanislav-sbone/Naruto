import styled from "styled-components";
import type { AppTheme } from "../../theme";


export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 4rem 0;
`

export const Button = styled.button`
    font-size: 18px;
    align-self: flex-start;
    transition: color 0.4s ease;
    text-decoration: underline;

    &:hover {
        color: #ff8a00;
    }
`

export const Image = styled.img`
    width: 400px;
    height: 350px;
    margin-bottom: 1rem;
`

export const PersonalInfo = styled.div`
    margin-top: 1rem;
    align-self: baseline;
`

export const Information = styled.div`
    display: flex;
    gap: 2.5rem;
`

export const Name = styled.h3<{ theme: AppTheme }>`
    color: ${({ theme }) => theme.name === 'dark' ? '#ebeef5' : '#ff8a00'};
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 20px;
`

export const Title = styled.div`
	font-size: 20px;
    font-weight: 600;
	color: #ff8a00;
	margin-bottom: 10px;
`

export const Relative = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

export const Description = styled.div`
    span {
        text-transform: capitalize;
    }
`
export const FamilyMember = styled.span`
    transition: color 0.4s ease-in-out;

    &:hover {
        color: #ff8a00
    };
`