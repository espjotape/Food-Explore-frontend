import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Food } from "../../components/Food"
import { Section } from "../../components/Section"

import { Container, Content, Banner } from "./styles";

import bannerMb from "../../assets/banner-mobile.png";
import spaguettiGambe from "../../assets/image 3.png";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Banner>
         <img src={bannerMb} alt="Imagem banner" />
         <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
         </div>
        </Banner>
      </Content>
      <Footer />
    </Container>
  );
}
