import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export function usePayment(total, pixActive, creditActive) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [isClockVisible, setIsClockVisible] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(true);
  const [isQrCodeVisible, setIsQrCodeVisible] = useState(true); 
  const [isFormVisible, setIsFormVisible] = useState(true)

  const [num, setNum] = useState("");
  const [date, setDate] = useState(""); 
  const [cvc, setCvc] = useState(""); 

  const disableButton = () => {
    setDisabledButton(true);
    setIsCartVisible(false);
    setIsClockVisible(true);
    setIsQrCodeVisible(false);
    setIsApproved(false);

    setTimeout(() => {
      setIsClockVisible(false);
      setIsApproved(true);
    }, 2000);
  };

  const handleCreatedCart = (orders) => ({
    orderStatus: "🔴 Pendente",
    paymentMethod: pixActive ? "pix" : "creditCard",
    totalPrice: Number(total),
    cart: orders.map((item) => ({
      dish_id: item.dish_id,
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
      alert("Data de validade inválida. Certifique-se de usar o formato MM/AA.");
      return false
    }

    const [month, year] = date.split("/").map(Number);
    // Verificar se o mês está entre 1 e 12
    if (month < 1 || month > 12) {
      alert("Mês inválido. Use um valor entre 01 e 12.");
      return false;
    }
  
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Últimos 2 dígitos do ano
    const currentMonth = currentDate.getMonth() + 1;

    // Verificar se a data é no passado
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      alert("O cartão está expirado. Verifique a data de validade.");
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

    if (pixActive) {
      return true;
    }
  
    // Se o Crédito estiver ativo, valida os detalhes do cartão
    if (creditActive) {
      return validateCardDetails();
    }
  
    alert("Nenhuma forma de pagamento selecionada.");
    return false;

    return validateCardDetails();
  };

  const handlePayment = async (orders, paymentType) => {
    setLoading(true);
    console.log(`vc clicou no pagamento do tipo ${paymentType} `)
    
    if (!validatePayment(orders)) {
      setLoading(false);
      return;
    }
    setIsFormVisible(false)

    const newCart = handleCreatedCart(orders);
    try {
      await api.post("/orders", {...newCart, paymentType }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@foodexplorer:token")}`,
        },
      });
      
      disableButton();
      setTimeout(() => {
        alert("Pedido realizado com sucesso!");
        handleResetCart();
        navigate(-1); 
      }, 4000);
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
      alert("Erro ao criar pedido.");
    } finally {
      setLoading(false);
    }
  };

  
  async function handleResetCart() {
    localStorage.removeItem("@foodexplorer:cart");
}

  return {
    loading,
    disabledButton,
    isClockVisible,
    isCartVisible,
    isQrCodeVisible: pixActive,
    isFormVisible: creditActive,
    isApproved,
    isQrCodeVisible,
    isFormVisible,
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
