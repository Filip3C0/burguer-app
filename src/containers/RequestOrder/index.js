import React, { useState, useEffect } from "react";
import {
  Container,
  H1,
  Button,
  ContainerItems,
  Image,
  Request,
  RequestLabel,
  P,
} from "./styles";
import Requests from "../../assets/Requests.png";
import Trash from "../../assets/trash.svg";
import axios from "axios";
import { useNavigate} from "react-router";

function RequestOrders() {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate()
  useEffect(()=> {
    async function fectchRequests(){
      const {data: newRequestOrder} = await axios.get("http://localhost:3001/requests")

      setRequests(newRequestOrder)
    }

    fectchRequests()
  },[])

  async function deleteRequest(requestId) {
    await axios.delete(`http://localhost:3001/requests/${requestId}`)

    const newRequest = requests.filter((request) => request.id !== requestId);
    setRequests(newRequest);
  }

  function goBackPage(){
    navigate("/")
  }
  return (
    <Container>
      <Image alt="Logo Burguer" src={Requests} />
      <ContainerItems>
        <H1>Pedidos</H1>
      
       

        <ul>
          {requests.map((request) => (
            <RequestLabel key={request.id}>
              <Request>
                <p>{request.order}</p> <P>{request.clientName}</P>
              </Request>

              <button onClick={() => deleteRequest(request.id)}>
                <img src={Trash} alt="Lata de Lixo" />
              </button>
            </RequestLabel>
          ))}
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItems>
    </Container>
  );
}

export default RequestOrders;
