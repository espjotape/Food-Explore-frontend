import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import { Container, Content, Banner } from "./styles";

import bannerMb from "../../assets/banner-mobile.png";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Food } from "../../components/Food";
import { Section } from "../../components/Section";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

export function Home() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  const isCustomer = user?.role === 'customer';

  const [dishes, setDishes] = useState({ meals: [], mainDishes: [], drinks: [] });
  
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [numeroPedidos, setNumeroPedidos] = useState(0);
  const [bannerSrc, setBannerSrc] = useState(bannerMb)
  
  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  async function handleAddToFavorites(dish) {
    try {
      const token = localStorage.getItem("@foodexplorer:token"); 
      const response = await api.post(
        '/favorites',
        { dish_id: dish.id },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert(response.data.message);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.error);
      } else {
        console.warn("Um erro ocorreu ao tentar adicionar aos favoritos.");
      }
    }
  }

  useEffect(() => {
    // Função para buscar os itens do carrinho
    const fetchCart = () => {
        // Lógica para buscar o carrinho
    };
    fetchCart();
  }, []);

  useEffect(() => {
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setNumeroPedidos(totalItems); 
  }, [cartItems]); 

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get("/dishes");
       
        const meals = response.data.filter((dish) => dish.category === "meal");
        const mainDishes = response.data.filter((dish) => dish.category === "mainDishes");
        const drinks = response.data.filter((dish) => dish.category === "drinks");
        
        setDishes({ meals, mainDishes, drinks });
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.error("Nenhum prato encontrado.");
          setDishes({ meals: [] });
        } else {
          console.error("Erro ao buscar os pratos:", error);
        }
      }
    }
    fetchDishes();
  }, []);

  return (
    <Container>
      <Header 
        isAdmin={isAdmin} 
        numeroPedidos={numeroPedidos}
        cartIsOpen={cartIsOpen}
        cartItems={cartItems}
        setCartIsOpen={setCartIsOpen}
      />
      <main>
        <div>
          <Banner>
            <img src={ bannerSrc} alt="Imagem banner" />
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Banner>
        </div>

        <Content>
          <Section title="Refeições" isAdmin={isAdmin}>
            <div className="swiper-background">
              <Swiper
                slidesPerView="auto" 
                spaceBetween={0} 
                grabCursor={true} 
                loop={dishes.meals.length > 2}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
              >
                {dishes.meals.map((dish) => (
                  <SwiperSlide key={String(dish.id)} className="dish-slide">
                    <Food 
                      isAdmin={isAdmin} 
                      isCustomer={isCustomer} 
                      data={dish} 
                      handleDetails={handleDetails}
                      handleAddToFavorites={handleAddToFavorites}
                      cartItems={cartItems} 
                      setCartItems={setCartItems} 
                    />
                  </SwiperSlide>
                ))}
              </Swiper> 
              <div className="gradient-overlay" />
            </div>
          </Section>

          <Section title="Sobremesas" isAdmin={isAdmin}>
            <div className="swiper-background" >
              <Swiper 
                slidesPerView="auto" 
                spaceBetween={0} 
                grabCursor={true} 
                loop={dishes.meals.length > 2}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
              >
                {dishes.mainDishes.map((dish) => (
                  <SwiperSlide key={String(dish.id)} className="dish-slide">
                    <Food 
                       isAdmin={isAdmin} 
                       isCustomer={isCustomer} 
                       data={dish} 
                       handleDetails={handleDetails}
                       handleAddToFavorites={handleAddToFavorites}
                       cartItems={cartItems} 
                       setCartItems={setCartItems} 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>  
              <div className="gradient-overlay" />
            </div>
          </Section>

          <Section title="Drinks" isAdmin={isAdmin}>
            <div className="swiper-background">
              <Swiper 
                slidesPerView="auto" 
                spaceBetween={0} 
                grabCursor={true} 
                loop={dishes.meals.length > 2}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
              >
                {dishes.drinks.map((dish) => (
                  <SwiperSlide key={String(dish.id)} className="dish-slide">
                    <Food 
                       isAdmin={isAdmin} 
                       isCustomer={isCustomer} 
                       data={dish} 
                       handleDetails={handleDetails}
                       handleAddToFavorites={handleAddToFavorites}
                       cartItems={cartItems} 
                       setCartItems={setCartItems} 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>  
              <div className="gradient-overlay" />
            </div>
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
