import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section"
import { Input } from "../../components/Input/index.jsx";

import { useAuth } from "../../hooks/auth"

import { Container, Content, Img, Form } from "./styles.js"

import { CaretLeft, UploadSimple, CaretDown } from "@phosphor-icons/react"; 


export function New(){
const { user } = useAuth()
 const isAdmin = user?.role === 'admin';
 const isCustomer = user?.role === 'customer';

 return(
  <Container>
    <Header isAdmin={isAdmin} />
    <Content>
     <button type="button">
      <CaretLeft color="#FFF" />
      <p>voltar</p>
     </button>
     <h1>Novo prato</h1>

     <Form>
      <Section title="Imagem do prato">
       <Img>
        <label htmlFor="img">
         <UploadSimple size="24px"/>
         <span>Selecione uma imagem</span>

         <input id="uploadImg" type="file"/>
        </label>
       </Img>
      </Section>

      <Section title="Nome">
        <input 
        className="name"
        placeholder="Ex: Salada Ceasar"
        type="text" />
      </Section>

      <Section title="Categoria">
        <div className="category">
          <label htmlFor="category">
            <select name="category" id="category">
              <option value="">Selecionar</option>
              <option value="">Refeição</option>
              <option value="">Sobremesa</option>
              <option value="">Bebida</option>
          </select>

          <CaretDown size="24px"/>
        </label>
        </div>
      </Section>

    
     </Form>
    </Content>
    <Footer />
  </Container>
 )
}