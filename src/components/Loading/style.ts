import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
`

export const Container = styled.div`
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Image = styled.img`
    max-width: 350px;
    max-height: 350px;
    margin-bottom: 25px;
    animation: ${float} 2s linear infinite;
`

export const Message = styled.p`
    font-size: 26px;
    font-weight: 600;
    color: #e99f00;
`
 