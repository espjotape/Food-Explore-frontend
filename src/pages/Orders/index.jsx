import { Container, CloseButton } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { CaretLeft } from "@phosphor-icons/react";

import { api } from "../../services/api"; 

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Orders({ cartIsOpen, cartItems = [], handleRemoveFromCart }) { 
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return (
    <Container>
      <Header cartIsOpen={cartIsOpen} />
      <section>
        <CloseButton onClick={handleBack}><CaretLeft size={16} /> Meus Pedidos</CloseButton>
        <div>
          {Array.isArray(cartItems) && cartItems.length > 0 ? (
            cartItems.map((cart, index) => (
              <section className="cart" key={`${cart.id}-${index}`}>
                <img 
                  src={cart.image} 
                  alt={`Imagem: ${cart.title}`} 
                  style={{ width: '70px', height: '70px' }}
                />
                <div className="info">
                  <h3>{cart.title}</h3>
                  <p>Preço: R$ {cart.price ? Number(cart.price).toFixed(2) : '0.00'}</p>
                  <button 
                    type="button"
                    onClick={() => handleRemoveFromCart(cart.id)} 
                  >
                    <p>Remover do Carrinho</p>
                  </button>
                </div>
              </section>
            ))
          ) : (
            <p>Seu carrinho está vazio.</p>
          )}
        </div>
    
        <h3>Total do Carrinho: R$ </h3>
        <button type="button" onClick={() => alert('Finalizando pedido...')}>Finalizar Pedido</button>
      </section>
      <Footer />
    </Container>
  );
}
