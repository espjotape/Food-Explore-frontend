import { Container, Form, Brand } from "./styles"
import logo from "../../assets/logo.svg"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"

import { api } from "../../services/api"

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react"

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){ 
    if(!name || !email || !password){
      return alert("Preencha todos os campos")
    }

    api.post("/users", { name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message)
      } else{
        alert("Não foi possivel cadastrar")
      }
    })

  }

  return (
    <Container>
      <Brand>
        <img src={logo} alt="Logo" />
      </Brand>
       <Form>
        <h2>Criar conta</h2>

        <Section title="Seu nome">
          <Input 
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={event => setName(event.target.value)}
          />
        </Section>
  
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
  
        <button type="button" onClick={handleSignUp}>Criar conta</button>
        <Link to="/">
         Já tenho uma conta
        </Link>
        </Form>
    </Container>
  );
  

}