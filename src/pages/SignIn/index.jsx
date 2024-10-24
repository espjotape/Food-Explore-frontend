import { Container, Form, Brand } from "./styles"
import logo from "../../assets/logo.svg"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"

export function SignIn(){
 return(
  <Container>
   <Brand>
    <img src={logo} alt="Logo" /> 
   </Brand>
    
   <Form>
    <Section title="Email">
     <Input 
      placeholder="Exemplo: exemplo@exemplo.com"
      type="text"
     />
    </Section>
    <Section title="Senha">
     <Input 
      placeholder="No mínimo 6 caracteres"
      type="password"
     />
    </Section>

    <button type="submit">Entrar</button>
    
    <p>Criar Conta</p>
   </Form>
  </Container>
 )
}