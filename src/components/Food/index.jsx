import { useState } from "react";
import { HeartStraight, PencilSimple } from "@phosphor-icons/react"

import { api } from "../../services/api"

import { Container, Title, OrderSection, QuantityControl, OrderButton } from "./styles"

export function Food ({ data, isCustomer, handleDetails ,isAdmin , ...rest}) {
 const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
 
 return(
  <Container {...rest}>
   {
    isAdmin ?
    <PencilSimple /> : <HeartStraight />
   }

   <img src={`${api.defaults.baseURL}/files/${data.image}`}  alt="Img dish"/>

   <Title
    onClick={() => handleDetails(data.id)} 
   >
    <h3>{data.title}</h3>
   </Title>

   <span>R$ {data.price}</span>

   {
    !isAdmin &&
    <OrderSection>
        <QuantityControl>
          <button type="button" onClick={decreaseQuantity}>-</button>
          <span>{ quantity < 10 ? `0${quantity}` : quantity }</span>
          <button type="button" onClick={increaseQuantity}>+</button>
        </QuantityControl>
        <OrderButton>Incluir</OrderButton>
      </OrderSection>
   }
  </Container>
 )
}