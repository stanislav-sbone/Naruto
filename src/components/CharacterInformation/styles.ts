import styled from "styled-components";
import type { AppTheme } from "../../theme";

export const Personal = styled.div`
	min-width: 100px;
`

export const Title = styled.div<{ theme: AppTheme }>`
	font-size: 20px;
	font-weight: 600;
	color: #ff8a00;
	margin-bottom: 10px;
`;

export const Information = styled.div`
	font-size: 16px;
	margin-bottom: 15px;
`;
