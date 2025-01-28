import { Navigate, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { usePayment } from "../../hooks/usePayment";

import { Container, CloseButton, CartSection, PaymentCard } from "../Cart/styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

import LogoPix from "../../assets/pix.svg";
import LogoCredito from "../../assets/credito.svg";
import QrCode from "../../assets/qrcode.svg";
import { CaretLeft, Receipt, Clock, CheckCircle } from "@phosphor-icons/react";

const BASE_URL = "http://localhost:3333/files/";

export function Cart() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentMethodSelected, setIsPaymentMethodSelected ] = useState(true)
  const [showPaymentMethods, setShowPaymentMethods] = useState(false); 
  const [pixActive, setPixActive] = useState(false);
  const [creditActive, setCreditActive] = useState(false);
  const [showCart, setShowCart] = useState(true);

  const {
    loading, isFormVisible, isQrCodeVisible, disabledButton, isClockVisible,
    isApproved,
    handlePayment,
    setNum,
    num,
    cvc,
    setCvc,
    setDate,
    date,
    handleDateBlur,
    handleCardNumberChange,
  } = usePayment(total, pixActive, creditActive, orders);

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: "(min-width: 1023px)" });

  useEffect(() => {
    // Exibe os métodos de pagamento automaticamente em resolução desktop
    if (isDesktop) {
      setShowPaymentMethods(true);
      setShowCart(true);
    } else {
      setShowPaymentMethods(false);
      setShowCart(true);
    }
  }, [isDesktop]);

  function handleBack() {
    if (isMobile && showPaymentMethods) {
      setShowPaymentMethods(false); 
      setShowCart(true);
    } else {
      navigate(-1);
    }
  }

  function handleAdvance() {
    if (isMobile) {
      setShowPaymentMethods(true);
    }
    setShowCart(false);
  }

  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("@foodexplorer:cart")) || [];

    const updatedCart = storedCart.map((item) => ({
      ...item,
      image: item.image,
    }));

    localStorage.setItem("@foodexplorer:cart", JSON.stringify(updatedCart));
    setOrders(updatedCart);
    calculateTotal();
  }, []);

  const calculateTotal = () => {
    const storedCart =
      JSON.parse(localStorage.getItem("@foodexplorer:cart")) || [];

    const total = storedCart.reduce((acc, item) => {
      return acc + Number(item.price) * Number(item.quantity);
    }, 0);
    setTotal(total);
  };

  const handleRemoveOrder = (dishId) => {
    const updatedOrders = orders.filter((order) => order.dish_id !== dishId);
    setOrders(updatedOrders);
    localStorage.setItem("@foodexplorer:cart", JSON.stringify(updatedOrders));
    calculateTotal();
  };

  const handlePaymentMethodChange = (method) => {
    console.log("Método de pagamento selecionado:", method);
    setPixActive(method === "pix");
    setCreditActive(method === "credit");
    setIsPaymentMethodSelected(false);
  };
  

  return (
    <Container>
      <Header />
      <section id="content">
        <CloseButton onClick={handleBack}>
          <CaretLeft className="icon" />
          <p>Voltar</p>
        </CloseButton>
         
         <div>
         {showCart && (
        <CartSection>
        <h2>Meu pedido</h2>
         {orders.length > 0 ? (
          <>
            <div className="order-list">
              {orders.map((order) => (
                <section className="cart" key={`${order.dish_id}-${order.title}`}>
                  <img
                    src={`${BASE_URL}${order.image}`}
                    alt={`Imagem de ${order.title}`}
                    style={{ width: "70px", height: "70px" }}
                  />
                  <div className="info">
                    <div className="firstLine" style={{ display: "flex" }}>
                      <h3>
                        {order.quantity}x {order.title}
                      </h3>
                      <p className="price">R$ {Number(order.price).toFixed(2)}</p>
                    </div>
      
                    <button
                      type="button"
                      onClick={() => handleRemoveOrder(order.dish_id)}
                    >
                      <p>Excluir</p>
                    </button>
                  </div>
                </section>
              ))}
            </div>
            <p className="total">
              Total: R$<span>{total.toFixed(2)}</span>
            </p>
            <button id="next" onClick={handleAdvance}>
              Avançar
            </button>
          </>
        ) : (
          <p>Nenhum item no carrinho.</p>
        )}
      </CartSection>
        )}
      
        {showPaymentMethods && (
          <PaymentCard>
            <div className="paymentHeader">
              <h2>Pagamento</h2>
              <nav className="btn">
                <button
                  className={pixActive ? "active" : ""}
                  onClick={() => handlePaymentMethodChange("pix")}
                >
                  <img src={LogoPix} alt="LogoPix" />
                  PIX
                </button>

                <button
                  className={creditActive ? "active" : ""}
                  onClick={() => handlePaymentMethodChange("credit")}
                >
                  <img src={LogoCredito} alt="LogoCartão" />
                  Crédito
                </button>
              </nav>
            </div>

            <div className="methodPayment">
            {paymentMethodSelected && (
              <div className="paymentMessage">
                <p>Selecione uma opção de pagamento</p>
              </div>
            )}

            {isQrCodeVisible && pixActive && (
                <div className="qrcode">
                  <img src={QrCode} alt="QR Code do Pix" />
                  <button
                    id="pixButton"
                    disabled={loading || disabledButton }
                    onClick={() => {
                      handlePayment(orders, "pix");
                    }}
                  > <p>
                    {loading ? "Finalizando pagamento" : "Finalizar pagamento"}
                    </p>
                    </button>
                </div>
            )}
            {isFormVisible && creditActive && (
              <div id="credit">
                <p>Número do Cartão</p>
                <input
                  placeholder="0000 0000 0000 0000"
                  value={num}
                  onChange={handleCardNumberChange}
                />

                <div className="box">
                <div className="valid">
                  <p>Validade</p>
                  <input
                    placeholder="04/25"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onBlur={handleDateBlur}
                  />
                  </div>
                  <div className="cvc">
                  <p>CVC</p>
                    <input
                      placeholder="000"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                  </div>
                  </div>
                
                  <Button
                    title="Finalizar pagamento"
                    onClick={() => {
                      handlePayment(orders, "credit");
                    }}
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
          </PaymentCard>
        )}
         </div>
      </section>
      <Footer />
    </Container>
  );
}
