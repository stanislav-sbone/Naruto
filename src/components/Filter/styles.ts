import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`

export const Search = styled.input`
	outline: none;
	border: 1px solid gray;
	border-radius: 5px;
	padding: 15px 50px;
	width: 100%;
	color: #ff8a00;
	font-size: 20px;
	background-color: transparent;

	&:focus {
		border: 1px solid #ff8a00;
	}
`;

export const Clear = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    color: #ff8a00;
`