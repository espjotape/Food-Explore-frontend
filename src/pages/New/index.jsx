import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section"

import { useAuth } from "../../hooks/auth"

import { Container, Content, Img, Form } from "./styles.js"

import { CaretLeft, UploadSimple  } from "@phosphor-icons/react"; 


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
        </label>
       </Img>
      </Section>
     </Form>
    </Content>
    <Footer />
  </Container>
 )
}