import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Container, CloseButton, Payment } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button"

import { CaretLeft, Receipt, Clock, CheckCircle } from "@phosphor-icons/react";
import LogoPix from "../../assets/pix.svg"
import LogoCredito from "../../assets/credito.svg"
import QrCode from "../../assets/qrcode.svg"

import { api } from "../../services/api";
import { usePayment } from "../../hooks/usePayment";

const BASE_URL = 'http://localhost:3333/files/';

export function Cart({ cartIsOpen }) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [pixActive, setPixActive] = useState(false);
  const [creditActive, setCreditActive] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(true)
  
  const { loading, isFormVisible ,isQrCodeVisible ,disabledButton, isClockVisible, isApproved, handlePayment, setNum ,num, cvc, setCvc, setDate, date, handleDateBlur, handleCardNumberChange } = 
    usePayment(total, pixActive, creditActive, orders);

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem("@foodexplorer:cart")) || [];
  
  // Adiciona o caminho completo da imagem
  const updatedCart = storedCart.map(item => ({
    ...item,
    image: item.image
  }));
  
  localStorage.setItem("@foodexplorer:cart", JSON.stringify(updatedCart)); 
  setOrders(updatedCart); // Atualiza o estado com os dados formatados
  calculateTotal();
}, []);
  
  
  const calculateTotal = () => {
    // Recupera os dados do localStorage
    const storedCart = JSON.parse(localStorage.getItem("@foodexplorer:cart")) || [];
  
    // Calcula o total multiplicando preço pela quantidade de cada item
    const total = storedCart.reduce((acc, item) => {
      return acc + (Number(item.price) * Number(item.quantity));
    }, 0);
    setTotal(total);
  };

  const handleRemoveOrder = (dish_id) => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("@foodexplorer:cart") || [])
      
      // Filtra para remover o prato pelo ID
      const updatedCart = storedCart.filter((item) => item.dish_id !== dish_id);
      
      // Atualiza o localStorage e o estado
      localStorage.setItem("@foodexplorer:cart", JSON.stringify(updatedCart));
      setOrders(updatedCart);

      // Atualiza o total do carrinho
      const newTotal = updatedCart.reduce((acc, item) => acc + (Number(item.price) * Number(item.quantity)), 0);
      setTotal(newTotal);

    } catch (error) {
      console.error("Erro ao remover pedido:", error);
    }
  };

  const handlePaymentMethodChange = method => {
    setPixActive(method === "pix");
    setCreditActive(method === "credit");
    setIsCartVisible(false);
  };

  const numeroPedidos = orders.length; 

  return (
    <Container>
      <Header 
        cartIsOpen={cartIsOpen} 
        numeroPedidos={numeroPedidos} 
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
              <section className="cart" key={`${order.id}-${order.title}`}>
                <img 
                  src={`${BASE_URL}${order.image}`} 
                  alt={`Imagem de ${order.title}`} 
                  style={{ width: '70px', height: '70px' }} 
                />
                <div className="info">
                  <div className="firstLine">
                    <h3>{order.quantity}x {order.title}</h3>
                    <p className="price">R$ {Number(order.price).toFixed(2)}</p>
                  </div>
                 
                  <button type="button" onClick={() => handleRemoveOrder(order.dish_id)}>
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
            className={pixActive ? 'active' : ''} 
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
          {isQrCodeVisible && pixActive && (
            <div className="qrcode">
              <img src={QrCode} alt="QR Code do Pix" />
              <Button
              id="pixButton"
              title={loading ? "Finalizando pagamento" : "Finalizar pagamento"}
              disabled={loading || disabledButton}
              icon={Receipt}
              className="finishPaymentButton"  
              onClick={() => {handlePayment(orders, "pix")}}                   
            /> 
            </div>
          )}
          {isFormVisible && creditActive && (
            <div className="credit">
             <div className="input">
              <p>Número do Cartão</p>
              <input 
                placeholder="0000 0000 0000 0000"
                type="text"
                value={num}
                onChange={handleCardNumberChange}
              />
              </div>

             <div className="dados">
              <div className="valid">
                <p>Validade</p>
                <input 
                  placeholder="04/25"
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onBlur={handleDateBlur}
                />
                </div>

                <div className="valid">
                <p>CVC</p>
                <input 
                  placeholder="000"
                  type="number"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
                </div>
            </div>
            <Button
              id="creditButton"
              title={loading ? "Finalizando pagamento" : "Finalizar pagamento"}
              disabled={loading || disabledButton}
              icon={Receipt}
              style={ { height: 56 } }
              className="finishPaymentButton"                                 
              onClick={() => {
                handlePayment(orders,"credit")}}    
            /> 
            </div>
          )}
          {isClockVisible &&
          <div className="clock" id="clock">
              <Clock size={80}/>
              <p>Aguarde: Estamos processando o seu pagamento</p>
          </div>
          }
          {isApproved && 
            <div className="clock" id="clock">
              <CheckCircle size={80}/>
              <p>Pagamento aprovado!</p>
            </div>
          }
        </div>
      </Payment>
      <Footer />
    </Container>
  );
}