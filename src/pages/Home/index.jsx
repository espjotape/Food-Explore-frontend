import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Food } from "../../components/Food";
import { Section } from "../../components/Section";

import { api } from "../../services/api";
import { Container, Content, Banner } from "./styles";

import bannerMb from "../../assets/banner-mobile.png";

import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export function Home() {
  const { user } = useAuth();
  const isAdmin = user.isAdmin;
  const isCustomer = user.isCustomer;
  const [dishes, setDishes] = useState({ meals: [], mainDishes: [], drinks: [] });
  
  const swipperMeals = useRef(null);
  const swipperMainDishes = useRef(null);
  const swipperDrinks = useRef(null);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // Se o elemento está visível, inicia a autoplay do Swiper se o ref não for nulo
          entry.target.swiper?.autoplay.start();
        } else {
          // Se o elemento não está visível, para a autoplay do Swiper se o ref não for nulo
          entry.target.swiper?.autoplay.stop();
        }
      }
    }, options);
    
    observer.observe(swipperMeals.current);
    observer.observe(swipperMainDishes.current);
    observer.observe(swipperDrinks.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get("/dishes");
       
        const meals = response.data.filter((dish) => dish.category === "meal");
        const mainDishes = response.data.filter((dish) => dish.category === "mainDishes");
        const drinks = response.data.filter((dish) => dish.category === "drinks");
        
        setDishes({ meals, mainDishes, drinks });
       // console.log(response.data);
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
      <Header isAdmin={isAdmin} />
      <main>
        <div>
          <Banner>
            <img src={bannerMb} alt="Imagem banner" />
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Banner>
        </div>

        <Content>
          <Section title="Refeições" isAdmin={isAdmin}>
            <div className="swiper-background">
              {(
                <Swiper 
                ref={swipperMeals} 
                slidesPerView="auto" 
                spaceBetween={0} 
                grabCursor={true} 
                loop={true}
              >
              {
              dishes.meals.map((dish) => (
                <SwiperSlide key={String(dish.id)} style={{ width: '225px' }}>
                  <Food 
                  isAdmin={isAdmin} 
                  isCustomer={isCustomer} 
                  data={dish} 
                  handleDetails={handleDetails}
                  />
               </SwiperSlide>
               ))}
             </Swiper>  
              )}
            </div>
          </Section>

          <Section title="Sobremesas" isAdmin={isAdmin}>
            <div className="swiper-background">
              {(
                <Swiper 
                ref={swipperMainDishes} 
                slidesPerView="auto" 
                spaceBetween={0} 
                grabCursor={true} 
                loop={true}
              >
              {
              dishes.mainDishes.map((dish) => (
                <SwiperSlide key={String(dish.id)} style={{ width: '225px' }}>
                  <Food 
                  isAdmin={isAdmin} 
                  isCustomer={isCustomer} 
                  data={dish} />
               </SwiperSlide>
               ))}
             </Swiper>  
              )}
            </div>
          </Section>

          <Section title="Drinks" isAdmin={isAdmin}>
            <div className="swiper-background">
              {(
                <Swiper 
                ref={swipperDrinks} 
                slidesPerView="auto" 
                spaceBetween={0} 
                grabCursor={true} 
                loop={true}
              >
              {
              dishes.drinks.map((dish) => (
                <SwiperSlide key={String(dish.id)} style={{ width: '225px' }}>
                  <Food 
                  isAdmin={isAdmin} 
                  isCustomer={isCustomer} 
                  data={dish} 
                  handleDetails={handleDetails}
                  />
               </SwiperSlide>
               ))}
             </Swiper>  
              )}
            </div>
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
