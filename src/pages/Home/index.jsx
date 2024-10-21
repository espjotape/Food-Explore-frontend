import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Food } from "../../components/Food";
import { Section } from "../../components/Section";

import { Container,Content ,Banner } from "./styles";

import bannerMb from "../../assets/banner-mobile.png";
import spaguettiGambe from "../../assets/image 3.png";
import { useRef, useEffect } from "react";
import { useAuth } from "../../hooks/auth";

export function Home() {
  const { user } = useAuth()
  const isAdmin = user.isAdmin 
  const isCustomer = user.isCustomer

  const swipper1 = useRef(null);
  const swipper2 = useRef(null);
  const swipper3 = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // o valor em porcentagem indica com quanta visibilidade o callback deve ser chamado
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.swiper?.autoplay.start();
        } else {
          entry.target.swiper?.autoplay.stop();
        }
      }
    }, options);

    // Verifica se os elementos não são null antes de observá-los
    if (swipper1.current) observer.observe(swipper1.current);
    if (swipper2.current) observer.observe(swipper2.current);
    if (swipper3.current) observer.observe(swipper3.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container>
      <Header isAdmin={isAdmin}/>
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
          <swiper-container 
          ref={swipper1} 
          slides-per-view="auto" 
          space-between={10} 
          centered-slides="true" 
          grab-cursor="true" 
          autoplay="true" 
          loop="true" 
          >

          <swiper-slide>
            <Food isAdmin={isAdmin} isCustomer={isCustomer} data={{ src: spaguettiGambe, title: "Spaguetti Gambe", description: "Massa fresca com camarões e pesto.", price: "79,97", }} />
          </swiper-slide>
          <swiper-slide>
            <Food isAdmin={isAdmin} isCustomer={isCustomer} data={{ src: spaguettiGambe, title: "Spaguetti Gambe", description: "Massa fresca com camarões e pesto.", price: "79,97", }} />
          </swiper-slide>
          <swiper-slide>
           <Food isAdmin={isAdmin} isCustomer={isCustomer} data={{ src: spaguettiGambe, title: "Spaguetti Gambe", description: "Massa fresca com camarões e pesto.", price: "79,97", }} />
          </swiper-slide>
        </swiper-container>
          </div>
        </Section>

        </Content>
      </main>
      <Footer />
    </Container>
  );
}
