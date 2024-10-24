import { useState } from "react";
import { HeartStraight, PencilSimple } from "@phosphor-icons/react";
import { api } from "../../services/api";
import { Container, Title, OrderSection, QuantityControl, OrderButton } from "./styles";

export function Food({ data, isCustomer, handleAddToCart, handleDetails, handleAddToFavorites, isAdmin, ...rest }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  async function handleInclude() {
    console.log(`Opa adicionou o item ${data.name}`);
    handleAddToCart(data, quantity);
  }

  return (
    <Container {...rest}>
      {isAdmin ? (
        <PencilSimple />
      ) : (
        <HeartStraight onClick={() => handleAddToFavorites(data)} />
      )}

      <img
        src={data.image ? `${api.defaults.baseURL}/files/${data.image}` : '/default-image.jpg'}
        alt="Img dish"
      />

      <Title onClick={() => handleDetails(data.id)}>
        <h3>{data.title}</h3>
      </Title>

      <span>R$ {data.price}</span>

      {!isAdmin && (
        <OrderSection>
          <QuantityControl>
            <button type="button" onClick={decreaseQuantity}>-</button>
            <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
            <button type="button" onClick={increaseQuantity}>+</button>
          </QuantityControl>
          <OrderButton onClick={handleInclude}>Incluir</OrderButton>
        </OrderSection>
      )}
    </Container>
  );
}
