import { useState } from "react";
import { HeartStraight, PencilSimple } from "@phosphor-icons/react"

import { Container, Title, OrderSection, QuantityControl, OrderButton } from "./styles"

export function Food ({ data, isCustomer ,isAdmin , ...rest}) {
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

   <img src={data.src} alt="Img dish"/>

   <Title>
    <h2>{data.title}</h2>
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