import { Container, CloseButton } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CaretLeft } from "@phosphor-icons/react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const BASE_URL = 'http://localhost:3333/files/';

export function Orders({ cartIsOpen, cartItems = [], handleRemoveFromCart }) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get("/orders");
        console.log("Dados pedidos:", response.data);
        const ordersWithFullUrls = response.data.map((order) => ({
          ...order,
          image: `${BASE_URL}${order.image}`,
        }));
        setOrders(ordersWithFullUrls);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    }
    fetchOrders();
  }, []);
  

  return (
    <Container>
      <Header cartIsOpen={cartIsOpen} />
      <section>
        <CloseButton onClick={handleBack}>
          <CaretLeft size={16} />
          Meus Pedidos
        </CloseButton>
        <div>
          {orders.length > 0 ? (
            orders.map((order) => (
              <section className="cart" key={order.id}>
                <img 
                  src={order.image} 
                  alt={order.items.length > 0 ? `Imagem de ${order.items[0].title}` : "Imagem desconhecida"} 
                  style={{ width: '70px', height: '70px' }} 
                />
                <div className="info">
                  <h3>{order.items.length > 0 ? order.items[0].title : "Item desconhecido"}</h3>
                  <button type="button">
                    <p>Remover dos Favoritos</p>
                  </button>
                </div>
              </section>
            ))
          ) : (
            <p>Nenhum pedido encontrado.</p>
          )}
        </div>
      </section>
      <Footer />
    </Container>
  );
}
