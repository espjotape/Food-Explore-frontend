import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Container, CloseButton, Payment } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button"

import { CaretLeft, Receipt } from "@phosphor-icons/react";
import LogoPix from "../../assets/pix.svg"
import LogoCredito from "../../assets/credito.svg"
import QrCode from "../../assets/qrcode.svg"

import { api } from "../../services/api";

const BASE_URL = 'http://localhost:3333/files/';

export function Cart({ cartIsOpen }) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  
  const [isCartVisible, setIsCartVisible] = useState(true);
  const [pixActive, setPixActive] = useState(false);
  const [creditActive, setCreditActive] = useState(false);
  const [loading, setLoading] = useState(false);

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
        return itemAcc + (Number(item.price) * Number(item.quantity));
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
  
      const updatedCartItems = cartItems.filter(item => item.id !== orderId);
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  
      const newTotalItems = updatedCartItems.reduce((acc, item) => acc + item.quantity, 0);
     
      setCartItems(updatedCartItems); 
    } catch (error) {
      console.error("Erro ao remover pedido:", error);
    }
  };


  const handlePaymentMethodChange = (method) => {
    if (method === 'pix') {
      setPixActive(true);
      setCreditActive(false); 
      setIsCartVisible(false);  
    } else if (method === 'credit') {
      setPixActive(false);  
      setCreditActive(true);
      setIsCartVisible(false);  
    }
  };
 
  
  const numeroPedidos = orders.length; 

  return (
    <Container>
      <Header 
        cartIsOpen={cartIsOpen} 
        numeroPedidos={numeroPedidos} 
        cartItems={cartItems}
      />
      <section>
        <CloseButton onClick={handleBack}>
          <CaretLeft className="icon" />
          Meus Pedidos
        </CloseButton>
        <div>
        <div className="dish-container">
          {orders.length > 0 ? (
            orders.map((order) => (
              <section className="cart" key={order.id}>
                <img 
                  src={order.image}
                  alt={`Imagem de ${order.title}`} 
                  style={{ width: '70px', height: '70px' }} 
                />
                <div className="info">
                  <div className="firstLine">
                    <h3>{order.quantity}x {order.title}</h3>
                    <p className="price">R$ {Number(order.price).toFixed(2)}</p>
                  </div>
                 
                  <button type="button" onClick={() => handleRemoveOrder(order.id)}>
                    <p>Excluir</p>
                  </button>
                </div>
              </section>
            ))
          ) : (
            <p>Nenhum item no carrinho.</p>
          )}
        </div>

        </div>
        <p className="total">Total: R$<span>{total.toFixed(2)}</span></p>
      
        <Button className="next" title="Avançar"/>
      </section>

      <Payment>
        <div className="paymentHeader">
          <h2>Pagamento</h2>

          <nav className="btn" >
            <button 
            className={pixActive === true ? 'active' : ''} 
            onClick={() => handlePaymentMethodChange('pix')}
            >
              <img src={LogoPix} alt="LogoPix" />
              PIX
            </button>

            <button  
            className={creditActive ? 'active' : ''} 
            onClick={() => handlePaymentMethodChange('credit')}
            >
              <img src={LogoCredito} alt="LogoCartão" />
              Crédito
            </button>
          </nav>
        </div>

        <div className="methodPayment">
          {
            isCartVisible &&
            <div>
              <p>Selecione uma forma de pagamento acima!</p>
            </div>
          }
          {pixActive && (
            <div className="qrcode">
              <img src={QrCode} alt="QR Code do Pix" />
            </div>
          )}
          {creditActive && (
            <div className="credit">
             <div className="input">
              <p>Número do Cartão</p>
              <input 
                placeholder="0000 0000 0000 0000"
                type="number"
              />
              </div>

             <div className="dados">
              <div className="valid">
                <p>Validade</p>
                <input 
                  placeholder="04/25"
                  type="number"
                />
                </div>

                <div className="valid">
                <p>CVC</p>
                <input 
                  placeholder="000"
                  type="number"
                />
                </div>
            </div>
            <Button
              title={loading ? "Finalizando pagamento" : "Finalizar pagamento"}
              disabled={loading}
              icon={Receipt}
              style={ { height: 56 } }
              className="finishPaymentButton"                                 
            /> 
            </div>
          )}
        </div>
      </Payment>
      <Footer />
    </Container>
  );
}