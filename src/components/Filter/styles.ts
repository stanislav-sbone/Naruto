import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    margin-bottom: 25px;
`

export const Search = styled.input`
	outline: none;
	border: 1px solid gray;
	border-radius: 5px;
	padding: 15px 50px;
	width: 100%;
	color: orange;
	font-size: 20px;
	background-color: transparent;

	&:focus {
		border: 1px solid orange;
	}
`;

export const Clear = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    color: orange;
`