import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeartStraight, PencilSimple } from "@phosphor-icons/react";
import { api } from "../../services/api";
import { Container, Title, OrderSection, QuantityControl, OrderButton } from "./styles";

export function Food({ isAdmin, isCustomer, data, handleDetails, handleAddToCart, handleAddToFavorites, ...rest }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  async function handleInclude() {
    try {
      // Cria um objeto com as informações do prato e a quantidade
      const itemToAdd = {
        id: data.id,
        title: data.title,
        price: data.price,
        image: data.image,
        quantity: quantity, // Adiciona a quantidade
      };

      // Adiciona o prato ao carrinho
      handleAddToCart(itemToAdd); // Supondo que handleAddToCart atualiza o estado do carrinho

      console.log(`Opa adicionou o item ${data.title} ao carrinho com quantidade ${quantity}`);
    } catch (error) {
      console.error("Erro ao adicionar item ao carrinho:", error);
      alert("Houve um erro ao adicionar o item ao carrinho. Tente novamente.");
    }
  }

  function handleEdit() {
    console.log('Editando prato com ID:', data.id);
    navigate(`/edit/${data.id}`);
  }

  return (
    <Container {...rest}>
      {isAdmin ? (
        <PencilSimple onClick={handleEdit} />
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
