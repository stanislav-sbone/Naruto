import styled from "styled-components";
import type { AppTheme } from "../../theme";

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
`

export const Card = styled.div<{ theme: AppTheme }>`
	display: flex;
	gap: 100px;
	padding: 20px;
	cursor: pointer;
	border-radius: 8px;
	transition: all 0.4s ease;
	height: 340px;

	&:hover {
		transform: scale(1.04);
		box-shadow: ${({ theme }) => theme.name === 'dark' ? '0px 0px 8px 0px rgba(255, 255, 255, 0.2)' : '0px 0px 8px 0px rgba(0, 0, 0, 0.2)'};
	}
`;

export const Image = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 14px;
`

export const Name = styled.div<{ theme: AppTheme }>`
	color: ${({ theme }) => theme.name === 'dark' ? '#ebeef5' : '#ff8a00'};
	font-size: 36px;
	font-weight: 600;
	margin-bottom: 20px;
`;

export const Title = styled.div<{ theme: AppTheme }>`
	font-size: 24px;
	font-weight: 600;
	color: #ff8a00;
	margin-bottom: 15px;
`;

export const Information = styled.div`
	font-size: 18px;
	margin-bottom: 15px;
`;
