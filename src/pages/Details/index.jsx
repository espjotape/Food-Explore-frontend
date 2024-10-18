import { useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";

import { CaretLeft } from "@phosphor-icons/react"

import { Container, Content, Ingredients, IngredientButton, SaladImage, OrderSection ,QuantityControl, OrderButton } from "./styles";
export function Details() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 25.0;

  // Funções para incrementar e decrementar a quantidade.
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Container>
      <Header />
      <Content>
      <button type="button">
          <CaretLeft color="#FFF"/>
          <p>voltar</p>
        </button>

        <SaladImage src="../../assets/Mask group (1).png" alt="Salada Ravanello" />
        <h1>Salada Ravanello</h1>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
    
        <Ingredients>
        <IngredientButton>alface</IngredientButton>
        <IngredientButton>cebola</IngredientButton>
        <IngredientButton>pão naan</IngredientButton>
        <IngredientButton>pepino</IngredientButton>
        <IngredientButton>rabanete</IngredientButton>
        <IngredientButton>tomate</IngredientButton>
      </Ingredients>

      <OrderSection>
        <QuantityControl>
          <button type="button" onClick={decreaseQuantity}>-</button>
          <span>{ quantity < 10 ? `0${quantity}` : quantity }</span> {/* Exibe a quantidade */}
          <button type="button" onClick={increaseQuantity}>+</button>
        </QuantityControl>
        <OrderButton>pedir · R$ {(pricePerItem * quantity).toFixed(2)}</OrderButton>
      </OrderSection>

      </Content>
      <Footer />
    </Container>
  );
}
