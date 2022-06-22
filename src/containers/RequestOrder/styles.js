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


export const Button = styled.button`
  width: 342px;
  border-radius: 14px;
  height: 58px;
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.14);
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

export const Request = styled.ul`
  display: flex;
  flex-direction: column;


`
export const RequestLabel = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  list-style: none;
  border: none;
  outline: none;
  margin-top: 20px;
  gap: 20px;
  padding: 10px ;
 
  p{
    font-size: 20px;
    line-height: 28px;
    color: #fff;
    padding-top:10px;
  }
  button{
    background: none;
    border: none;
    cursor: pointer;
  }
  img{
   
  }

`

export const P = styled.p`
  font-weight: 700;

`

