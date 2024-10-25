import { Container, CloseButton } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CaretLeft } from "@phosphor-icons/react";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Favorites({ cartIsOpen, onCloseCart }) {
  const [favoriteDishes, setFavoriteDishes] = useState([]);
  const navigate = useNavigate();

  const BASE_URL = 'http://localhost:3333/files/';

  // Função para navegar de volta para a Home
  function handleGoHome() {
    navigate("/");
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
      <Header />
      <section>
        <CloseButton onClick={handleGoHome}>
          <CaretLeft size={16} /> Meus Pratos Favoritos
        </CloseButton>
        <div>
          {favoriteDishes && favoriteDishes.length > 0 ? (
            favoriteDishes.map(dish => (
              <section className="cart" key={dish.id}>
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
            <p>Nenhum prato nos favoritos.</p>
          )}
        </div>
      </section>
      <Footer />
    </Container>
  );
}
