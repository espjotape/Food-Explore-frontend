import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { api } from "../../services/api";
import { Container, Content, Banner } from "./styles";

import bannerMb from "../../assets/banner-mobile.png";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Food } from "../../components/Food";
import { Section } from "../../components/Section";
import { SideMenu } from "../../components/SideMenu";

export function Home() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  const isCustomer = user?.role === 'customer';

  const [dishes, setDishes] = useState({ meals: [], mainDishes: [], drinks: [] });
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar a busca

  const navigate = useNavigate();

  const handleAddToFavorites = () => navigate("/favorites");
  const handleDetails = (id) => navigate(`/dish/${id}`);

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get("/dishes");
        const meals = response.data.filter((dish) => dish.category === "meal");
        const mainDishes = response.data.filter((dish) => dish.category === "mainDishes");
        const drinks = response.data.filter((dish) => dish.category === "drinks");

        setDishes({ meals, mainDishes, drinks });
      } catch (error) {
        console.error("Erro ao buscar os pratos:", error);
      }
    }
    fetchDishes();
  }, []);

  // Função para filtrar pratos de acordo com a busca
  function filterDishes(category) {
    return category.filter((dish) =>
      dish.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.ingredients.some((ingredient) => {
        const ingredientName = typeof ingredient === 'string' ? ingredient : ingredient.name; // Caso seja um objeto, extraia o nome
        return ingredientName.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  }
 
  return (
    <Container>
      <Header isAdmin={isAdmin} search={setSearchTerm} />
      <SideMenu isAdmin={isAdmin} search={setSearchTerm} />
      <main>
        <Banner>
          <img src={bannerMb} alt="Imagem banner" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>

        <Content>
          <Section title="Refeições" isAdmin={isAdmin}>
            <div className="swiper-background">
              <Swiper slidesPerView="auto" spaceBetween={0} grabCursor={true} loop>
                {filterDishes(dishes.meals).map((dish) => (
                  <SwiperSlide key={dish.id} className="dish-slide">
                    <Food 
                    isAdmin={isAdmin} 
                    isCustomer={isCustomer} 
                    data={dish} 
                    handleDetails={handleDetails}
                    handleAddToFavorites={handleAddToFavorites}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Section>

          <Section title="Sobremesas" isAdmin={isAdmin}>
            <div className="swiper-background">
              <Swiper slidesPerView="auto" spaceBetween={0} grabCursor={true} loop>
                {filterDishes(dishes.mainDishes).map((dish) => (
                  <SwiperSlide key={dish.id} className="dish-slide">
                    <Food 
                    isAdmin={isAdmin} 
                    isCustomer={isCustomer} 
                    data={dish} 
                    handleDetails={handleDetails}
                    handleAddToFavorites={handleAddToFavorites}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Section>

          <Section title="Drinks" isAdmin={isAdmin}>
            <div className="swiper-background">
              <Swiper slidesPerView="auto" spaceBetween={0} grabCursor={true} loop>
                {filterDishes(dishes.drinks).map((dish) => (
                  <SwiperSlide key={dish.id} className="dish-slide">
                    <Food 
                    isAdmin={isAdmin} 
                    isCustomer={isCustomer} 
                    data={dish} 
                    handleDetails={handleDetails}
                    handleAddToFavorites={handleAddToFavorites}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
