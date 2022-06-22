import React, { useState, useRef} from "react";
import {useNavigate} from "react-router"
import {
  Container,
  H1,
  Input,
  Button,
  ContainerItems,
  InputLabel,
  Image,
} from "./styles";
import Burguer from "../../assets/Burguer.png";
import axios from "axios";

function RequestsBurguers() {
  const [requests, setRequests] = useState([]);
  const inputOrder = useRef(); // const requests = [];
  const clientName = useRef(); // const requests = [];
  const navigate = useNavigate()

  async function createNewRequest() {


    if(inputOrder.current.value.length === 0 ){
      alert("Preencha todos os campos")
    }else{
      const { data: newRequest } = await axios.post(
        "http://localhost:3001/requests",
        {
          order: inputOrder.current.value,
          clientName: clientName.current.value,
        }
      );
  
      setRequests([...requests, newRequest]);
      console.log(newRequest);
      navigate("/requests")
    }
   

   

   
  }


  return (
    <Container>
      <Image alt="Logo Burguer" src={Burguer} />
      <ContainerItems>
        <H1>Faça seu Pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Pizza Grande: Calabresa" />
        <InputLabel>Nome</InputLabel>
        <Input ref={clientName} placeholder="Seu nome" />

        <Button onClick={createNewRequest}>Novo Pedido</Button>
      </ContainerItems>
    </Container>
  );
}

export default RequestsBurguers;
