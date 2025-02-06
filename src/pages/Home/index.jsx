import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { api } from "../../services/api";
import { Container, Content, Banner } from "./styles";

import bannerMb from "../../assets/banner-mobile.png";

import { CaretLeft } from "@phosphor-icons/react";
import { CaretRight } from "@phosphor-icons/react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Food } from "../../components/Food";
import { Section } from "../../components/Section";
import { SideMenu } from "../../components/SideMenu";

export function Home() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  const isCustomer = user?.role === 'customer';

  const firstSwiperRef = useRef(null);
  const secondSwiperRef = useRef(null);
  const thirdSwiperRef = useRef(null);

  const [dishes, setDishes] = useState({ meals: [], mainDishes: [], drinks: [] });
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar a busca

  const navigate = useNavigate();

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
        setDishes({ meals, mainDishes, drinks });
      }
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

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
                <button className="custom-prev-meals" onClick={() => firstSwiperRef.current?.slidePrev()}>
                  <CaretLeft size={32}/>
                </button>
                <button className="custom-next-meals" onClick={() => firstSwiperRef.current?.slideNext()}>
                <CaretRight size={32}/>
                </button>

                <Swiper 
                  slidesPerView="auto" 
                  spaceBetween={0} 
                  grabCursor={true} 
                  loop={true}
                  ref={firstSwiperRef}
                  onSwiper={(swiper) => (firstSwiperRef.current = swiper)}
                  modules={[Navigation]} // Ativando o módulo Navigation
                  navigation={{ 
                    nextEl: ".custom-next-meals", 
                    prevEl: ".custom-prev-meals" 
                  }}
                >
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
                <div className="gradient-overlay" />
              </div>
          </Section>

          <Section title="Sobremesas" isAdmin={isAdmin}>
            <div className="swiper-background">
              <button className="custom-prev-desserts" onClick={() => secondSwiperRef.current?.slidePrev()}>
                <CaretLeft size={32}/>
              </button>
              <button className="custom-next-desserts" onClick={() => secondSwiperRef.current?.slideNext()}>
              <CaretRight size={32}/>
              </button>

              <Swiper 
                slidesPerView="auto" 
                spaceBetween={0} 
                grabCursor={true} 
                loop={true}
                ref={secondSwiperRef}
                onSwiper={(swiper) => (secondSwiperRef.current = swiper)}
                modules={[Navigation]} // Ativando o módulo Navigation
                navigation={{ 
                  nextEl: ".custom-next-desserts", 
                  prevEl: ".custom-prev-desserts" 
                }}
              >
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
              <div className="gradient-overlay" />
            </div>
         </Section>

          <Section title="Drinks" isAdmin={isAdmin}>
              <div className="swiper-background">
                <button className="custom-prev-drinks" onClick={() => thirdSwiperRef.current?.slidePrev()}>
                  <CaretLeft size={32}/>
                </button>
                <button className="custom-next-drinks" onClick={() => thirdSwiperRef.current?.slideNext()}>
                <CaretRight size={32}/>
                </button>

                <Swiper 
                  slidesPerView="auto" 
                  spaceBetween={0} 
                  grabCursor={true} 
                  loop={true}
                  ref={thirdSwiperRef}
                  onSwiper={(swiper) => (thirdSwiperRef.current = swiper)}
                  modules={[Navigation]} // Ativando o módulo Navigation
                  navigation={{ 
                    nextEl: ".custom-next-drinks", 
                    prevEl: ".custom-prev-drinks" 
                  }}
                >
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
                <div className="gradient-overlay" />
              </div>
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
