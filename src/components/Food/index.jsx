import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeartStraight, PencilSimple } from "@phosphor-icons/react";

import { api } from "../../services/api";

import { Container, Title, OrderSection, QuantityControl, OrderButton } from "./styles";

export function Food({isAdmin, isCustomer, data, handleDetails, handleAddToCart ,handleAddToFavorites, cartItems, setCartItems , ...rest}) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate()

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  async function handleAddDishToCart(data, quantity) {
    try {
      const { id, title, price, image } = data;
      const priceFormatted = quantity * Number(price.replace(',', '.'));
      const order = { id, title, price: priceFormatted, image, quantity };
  
      const orderExists = cartItems.some((userOrder) => userOrder.title === order.title);
      
      if (orderExists) {
        return alert("Esse item já está no carrinho");
      }
  
      const token = localStorage.getItem("@foodexplorer:token");
  
      // Calcular o totalPrice incluindo o novo item
      const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + priceFormatted;
  
      const response = await api.post("/orders", {
        cart: [...cartItems, order], // Se o backend espera um 'items', troque 'cart' por 'items'
        orderStatus: "em preparo",
        totalPrice,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // Atualizar o estado do carrinho apenas após a resposta do backend
      setCartItems((prevItems) => [...prevItems, order]);
      alert("Item adicionado ao carrinho");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível adicionar o item ao carrinho");
      }
    }
  }
  

  function handleEdit() {
  console.log('Editando prato com ID:', data.id);
  navigate(`/edit/${data.id}`);
  }

  return (
    <Container {...rest}>
      {isAdmin ? (
        <PencilSimple onClick={handleEdit}/> 
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
          <OrderButton onClick={() => handleAddDishToCart(data, quantity)}>Incluir</OrderButton>
        </OrderSection>
      )}
    </Container>
  );
}
