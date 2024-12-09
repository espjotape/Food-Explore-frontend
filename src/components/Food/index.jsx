import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeartStraight, PencilSimple } from "@phosphor-icons/react";

import { api } from "../../services/api";

import { Container, Title, OrderSection, QuantityControl, OrderButton } from "./styles";

export function Food({ isAdmin, isCustomer, data, handleDetails, handleAddToFavorites, cartItems, setCartItems, ...rest }) {
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

  const handleEdit = () => {
    console.log("Editando prato com ID:", data.id);
    navigate(`/edit/${data.id}`);
  };

  const handleAddToCart = async () => {
    const token = localStorage.getItem("@foodexplorer:token");
    const dishId = data.id;
    const quantityValue = quantity;
  
    // Cria um novo item do carrinho
    const newCartItem = {
      title: data.title,
      quantity: quantityValue,
      price: data.price,
      dish_id: dishId,
    };
  
    // Verifica se o carrinho já existe no localStorage, caso contrário cria um array vazio
    const storedCart = JSON.parse(localStorage.getItem("@foodexplorer:cart")) || [];
  
    // Adiciona o novo item ao carrinho
    storedCart.push(newCartItem);
  
    // Salva o carrinho atualizado no localStorage
    localStorage.setItem("@foodexplorer:cart", JSON.stringify(storedCart));
  
    try {
      const response = await api.post(
        "/orders",
        {
          cart: [newCartItem],
          orderStatus: "pending",
          totalPrice: data.price * quantityValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Pedido adicionado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
    }
  };
  

  return (
    <Container data-iscustomer={isCustomer} {...rest}>
      {isAdmin ? (
        <PencilSimple onClick={handleEdit} />
      ) : (
        <HeartStraight onClick={() => handleAddToFavorites(data)} />
      )}

      <img
        src={data.image ? `${api.defaults.baseURL}/files/${data.image}` : "/default-image.jpg"}
        alt="Img dish"
      />

      <Title onClick={() => handleDetails(data.id)}>
        <h3>{data.title}</h3>
      </Title>

      <p className="description">{data.description}</p>

      <span>R$ {data.price}</span>

      {!isAdmin && (
        <OrderSection>
          <QuantityControl>
            <button type="button" onClick={decreaseQuantity}>
              -
            </button>
            <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
            <button type="button" onClick={increaseQuantity}>
              +
            </button>
          </QuantityControl>
          <OrderButton onClick={handleAddToCart}>Incluir</OrderButton>
        </OrderSection>
      )}
    </Container>
  );
}
