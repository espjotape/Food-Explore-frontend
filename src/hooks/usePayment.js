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
  const [isQrCodeVisible, setIsQrCodeVisible] = useState(true); 

  const [num, setNum] = useState("");
  const [date, setDate] = useState(""); 
  const [cvc, setCvc] = useState(""); 

  const disableButton = () => {
    setDisabledButton(true);
    setIsCartVisible(false);
    setIsClockVisible(true);
    setIsQrCodeVisible(false);
    setIsApproved(false);
    setPixActive(false);

    setTimeout(() => {
      setIsClockVisible(false);
      setIsApproved(true);
    }, 3000);
  };

  const handleCreatedCart = (orders) => ({
    orderStatus: "🔴 Pendente",
    paymentMethod: pixActive ? "pix" : "creditCard",
    totalPrice: Number(total),
    cart: orders.map((item) => ({
      id: item.id,
      title: item.title,
      quantity: item.quantity,
      price: item.price,
    })),
  });

  const handleDateBlur = () => {
    // Remove qualquer formatação existente para processar os dados
    const cleanDate = date.replace(/\D/g, ""); // Remove caracteres não numéricos
    
    // Verifica se tem exatamente 4 dígitos
    if (cleanDate.length === 4) {
      const formattedDate = `${cleanDate.slice(0, 2)}/${cleanDate.slice(2)}`;
      setDate(formattedDate); // Formata a data
    }
  };

  const handleCardNumberChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    input = input.match(/.{1,4}/g)?.join(" ") || input; // Adiciona espaço a cada 4 dígitos
    setNum(input); // Atualiza o estado com o número formatado
  };

  const validateCardDetails = () => {
    const formattedNum = num.replace(/\D/g, "").match(/.{1,4}/g)?.join(" ") || num;

  // Validação do número do cartão
  if (!formattedNum || formattedNum.trim().length !== 19 || !/^\d{4} \d{4} \d{4} \d{4}$/.test(formattedNum)) {
    alert("Número do cartão inválido. Deve conter exatamente 16 dígitos.");
    return false;
  }

    if (!date || !/^\d{2}\/\d{2}$/.test(date)) {
      alert("Data de validade inválida. Use o formato MM/AA.");
      return false;
    }

    const [month, year] = date.split("/").map(Number);
    const currentYear = new Date().getFullYear() % 100; // Ano em formato AA
    const currentMonth = new Date().getMonth() + 1;

    if (month < 1 || month > 12 || year < currentYear || (year === currentYear && month < currentMonth)) {
      alert("Data de validade está inválida ou o cartão está expirado.");
      return false;
    }

    if (!cvc || cvc.length < 3 || cvc.length > 4 || !/^\d+$/.test(cvc)) {
      alert("CVC inválido. Deve conter 3 ou 4 dígitos.");
      return false;
    }

    return true;
  };

  const validatePayment = (cart) => {
    if (cart.length < 1) {
      navigate(-1);
      alert("Seu carrinho está vazio. Adicione algo antes de continuar.");
      return false;
    }

    if (pixActive) return true;

    return validateCardDetails();
  };

  const handlePayment = async (orders) => {
    setLoading(true);

    if (!validatePayment(orders)) {
      setLoading(false);
      return;
    }

    const newCart = handleCreatedCart(orders);

    try {
      await api.post("/orders", newCart, {
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
    handleDateBlur,
    handleCardNumberChange,
    num,
    setNum,
    date,
    setDate,
    cvc,
    setCvc,
  };
}
