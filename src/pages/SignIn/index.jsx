import { Container, Form, Brand } from "./styles"
import logo from "../../assets/logo.svg"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth.jsx";
import { useState } from "react";

export function SignIn(){
 const [ email, setEmail ] = useState("")
 const [ password, setPassword ] = useState("")

 const { signIn } = useAuth()
 
 async function handleSignIn(){
   await signIn({ email, password})
 }

return (
  <Container>
    <Brand>
      <img src={logo} alt="Logo" />
    </Brand>
     <Form>
        <h2>Faça Login</h2>

      <Section title="Email">
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com"
            type="text"
            onChange={event => setEmail(event.target.value)}
          />
      </Section>
      
      <Section title="Senha">
          <Input 
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={event => setPassword(event.target.value)}
          />
      </Section>

      <button type="button" onClick={handleSignIn}>Entrar</button>
      <Link to="/register">
        Criar Conta
      </Link>
      </Form>
  </Container>
);

}