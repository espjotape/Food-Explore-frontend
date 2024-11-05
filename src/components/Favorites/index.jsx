import { Container, CloseButton } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CaretLeft } from "@phosphor-icons/react";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Favorites({ cartIsOpen, onCloseCart }) {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [favoriteDishes, setFavoriteDishes] = useState([]);
  const navigate = useNavigate();

  const numeroPedidos = orders.length; 

  const BASE_URL = 'http://localhost:3333/files/';

  // Função para navegar de volta para a Home
  function handleGoHome() {
    navigate("/");
  }

  function handleNavigateToDetails(dishId) {
    navigate(`/details/${dishId}`);
  }

  async function handleRemoveFromFavorites(dishId) {
    try {
      await api.delete(`/favorites/${dishId}`);
      const updatedFavoriteDishes = favoriteDishes.filter(dish => dish.id !== dishId);
      setFavoriteDishes(updatedFavoriteDishes);
    } catch (error) {
     // console.error("Erro ao remover do favoritos:", error);
    }
  }
  


  useEffect(() => {
    async function fetchFavorites() {
      try {
        const response = await api.get('/favorites');
        const favoritesWithFullUrls = response.data.map(dish => ({
          ...dish, image: `${BASE_URL}${dish.image}` 
        }));
        setFavoriteDishes(favoritesWithFullUrls);
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
      }
    }
    fetchFavorites();
  }, []);
  
  

  return (
    <Container cartIsOpen={cartIsOpen}>
      <Header 
      cartIsOpen={cartIsOpen} 
      numeroPedidos={numeroPedidos} 
      cartItems={cartItems}
      />
      <section>
        <CloseButton onClick={handleGoHome}>
          <CaretLeft className="icon"/>
           Meus Pratos Favoritos
        </CloseButton>
        <div>
        <div className="dish-container">
          {favoriteDishes && favoriteDishes.length > 0 ? (
            favoriteDishes.map(dish => (
              <section 
              className="cart" 
              key={dish.id} 
              onClick={() => handleNavigateToDetails(dish.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleNavigateToDetails(dish.id);
                }
              }}
              style={{ cursor: 'pointer' }}
              aria-label={`Ver detalhes de ${dish.title}`}
              >
                <img 
                  src={dish.image} 
                  alt={`Imagem: ${dish.title}`} 
                  style={{ width: '70px', height: '70px' }} 
                />
                <div className="info">
                  <h3>{dish.title}</h3>
                  <button 
                    type="button"
                    onClick={() => handleRemoveFromFavorites(dish.id)} 
                  >
                    <p>Remover dos Favoritos</p>
                  </button>
                </div>
              </section>
            ))
          ) : (
            <p className="nothing">Nenhum prato nos favoritos.</p>
          )}
          </div>
        </div>
      </section>
      <Footer />
    </Container>
  );
}
