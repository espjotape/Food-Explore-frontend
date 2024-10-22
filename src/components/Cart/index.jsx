import { Container, CloseButton } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ArrowLeft } from "@phosphor-icons/react";

export function Cart({ cartIsOpen, onCloseCart }) {
  return (
    <Container cartIsOpen={cartIsOpen}>
      <Header />
      <section>
        <CloseButton onClick={onCloseCart}><ArrowLeft size={14} /> Meus Pedidos</CloseButton>
        <div>
          
        </div>
      </section>
      <Footer />
    </Container>
  );
}
