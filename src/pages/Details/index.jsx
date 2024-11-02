import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; 

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { CaretLeft } from "@phosphor-icons/react";

import { Container, Content, Ingredients, IngredientButton, SaladImage, OrderSection, QuantityControl, OrderButton } from "./styles";

export function Details({ isAdmin }) {
  const [data, setData] = useState(null); 
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 25.0;

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${id}`); 
        setData(response.data); 
      } catch (error) {
        console.error("Erro ao buscar os detalhes do prato:", error);
      }
    }
    fetchDish();
  }, [id]);

  function handleBack() {
    navigate(-1);
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Header />
      <div className="button">
        <button type="button" onClick={handleBack}>
          <CaretLeft color="#FFF" />
          <p>voltar</p>
        </button>
      </div>
      <Content>
        <SaladImage src={`${api.defaults.baseURL}/files/${data.image}`} alt={data.title} />
        <div className="info">
          <h1>{data.title}</h1>
          <p>{data.description}</p>

          <Ingredients>
            {data.ingredients.map((ingredient) => (
              <IngredientButton key={ingredient.id}>{ingredient.name}</IngredientButton>
            ))}
          </Ingredients>

          {!isAdmin ? (
            <button className="btnEdit" type="button" onClick={() => navigate(`/edit/${id}`)}>Editar</button>
          ) : (
            <OrderSection>
              <QuantityControl>
                <button type="button" onClick={decreaseQuantity}>-</button>
                <span>{quantity < 10 ? `0${quantity}` : quantity}</span> 
                <button type="button" onClick={increaseQuantity}>+</button>
              </QuantityControl>
              <OrderButton>pedir · R$ {(pricePerItem * quantity).toFixed(2)}</OrderButton>
            </OrderSection>
          )}
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
