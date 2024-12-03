import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export function usePayment(total) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [isClockVisible, setIsClockVisible] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(true);
  const [pixActive, setPixActive] = useState(false); 
  const [isQrCodeVisible, setIsQrCodeVisible] = useState(true);  // Novo estado


  // Função para desabilitar o botão e mostrar o processo de pagamento
  const disableButton = () => {
    setDisabledButton(true);
    setIsCartVisible(false);
    setIsClockVisible(true);
    setIsQrCodeVisible(false);
    setIsApproved(false);
    setPixActive(false)

    setTimeout(() => {
      setIsClockVisible(false);
      setIsApproved(true);
    }, 3000);
  };

  // Função para criar o objeto do pedido com base nas informações do carrinho
  const handleCreatedCart = (orders) => {
    return {
      orderStatus: '🔴 Pendente',
      paymentMethod: pixActive ? 'pix' : 'creditCard',
      totalPrice: Number(total),
      cart: orders.map(item => ({
        id: item.id, 
        title: item.title,
        quantity: item.quantity,
        price: item.price,
      }))
    };
  };

  // Função para processar o pagamento
  const handlePayment = async (orders) => {
    setLoading(true);
    
    const newCart = handleCreatedCart(orders);
   
    try {
      const response = await api.post("/orders", newCart, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@foodexplorer:token")}`,
        },
      });
      
      disableButton();
      setTimeout(() => {
        alert("Pedido realizado com sucesso!");
        navigate(-1); 
      }, 4000);
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
      alert("Erro ao criar pedido.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    disabledButton,
    isClockVisible,
    isCartVisible,
    isApproved,
    isQrCodeVisible,
    handlePayment,
  };
}
