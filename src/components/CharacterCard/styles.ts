import styled from "styled-components";
import type { AppTheme } from "../../theme";

export interface IProps {
	name: string;
	image: string | null;
	jutsu: string[];
	birthdate: string;
	debut: string;
	clan: string;
}

export const Card = styled.div<{ theme: AppTheme }>`
	display: flex;
	gap: 100px;
	padding: 20px;
	cursor: pointer;
	border-radius: 8px;
	transition: all 0.4s ease;
	height: 325px;

	&:hover {
		transform: scale(1.04);
		box-shadow: ${({ theme }) => theme.name === 'dark' ? '0px 0px 8px 0px rgba(255, 255, 255, 0.2)' : '0px 0px 8px 0px rgba(0, 0, 0, 0.2)'};
	}
`;

export const Image = styled.img`
	width: 300px;
	height: 250px;
	border-radius: 14px;
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const Information = styled.div`
	display: flex;
	gap: 3rem;
`;

export const Name = styled.div<{ theme: AppTheme }>`
	color: ${({ theme }) => theme.name === 'dark' ? '#ebeef5' : '#ff8a00'};
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 20px;
`;