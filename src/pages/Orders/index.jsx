import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Container, CloseButton } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

import { CaretLeft } from "@phosphor-icons/react";

import { api } from "../../services/api";

const BASE_URL = 'http://localhost:3333/files/';

export function Orders({ cartIsOpen }) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get("/orders");
        const ordersWithFullUrls = response.data.map((order) => ({
          ...order,
          image: `${BASE_URL}${order.image}`,
        }));
        setOrders(ordersWithFullUrls);
        calculateTotal(ordersWithFullUrls);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    }
    fetchOrders();
  }, []);

  const calculateTotal = (orders) => {
    const totalValue = orders.reduce((acc, order) => {
      const orderTotal = order.items.reduce((itemAcc, item) => {
        return itemAcc + (Number(item.quantity) * Number(order.totalPrice));
      }, 0);
      return acc + orderTotal;
    }, 0);
    setTotal(totalValue);
  };

  const handleRemoveOrder = async (orderId) => {
    try {
      await api.delete(`/orders/${orderId}`);
      const updatedOrders = orders.filter((order) => order.id !== orderId);
      setOrders(updatedOrders);
      calculateTotal(updatedOrders);
    } catch (error) {
      console.error("Erro ao remover pedido:", error);
    }
  };

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
                  <button type="button" onClick={() => handleRemoveOrder(order.id)}>
                    <p>Remover do Pedido</p>
                  </button>
                </div>
              </section>
            ))
          ) : (
            <p>Nenhum pedido encontrado.</p>
          )}
        </div>
        <p className="total">Total: R$<span>{total.toFixed(2)}</span></p>
      </section>
      <Footer />
    </Container>
  );
}
