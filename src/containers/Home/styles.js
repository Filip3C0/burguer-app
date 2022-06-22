import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a10;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerItems = styled.div`
  width: 342px;
  display: flex;
  flex-direction: column;

  
  
`;

export const Image = styled.img`
  width: 242px;
  height: 254px;
  margin-top:11px;
`;
export const H1 = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  
`;

export const InputLabel = styled.text`
  color: #fff;
  margin-top: 50px;
  padding-left: 15px;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  height: 58px;
  outline: none;
  border: none;
  color: #fff;
  padding-left: 15px;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
`;

export const Button = styled.button`
  width: 342px;
  border-radius: 14px;
  height: 58px;
  margin-top: 30px;
  background-color: #d93856;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #fff;
  &:hover{
    opacity: 0.8;
    letter-spacing: 1px;
    transition: .3s ease-in-out;
  }
  &:active{
    opacity: 0.6;
  }
`;



