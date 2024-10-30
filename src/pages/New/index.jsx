import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section"
import { Textarea } from "../../components/Textarea";
import { FoodItem } from "../../components/FoodItem/index.jsx";
import { Button } from "../../components/Button"

import { api } from "../../services/api.js";

import { useAuth } from "../../hooks/auth"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Content, Img, Form } from "./styles.js"

import { CaretLeft, UploadSimple, CaretDown } from "@phosphor-icons/react"; 


export function New(){
const { user } = useAuth()
 const isAdmin = user?.role === 'admin';
 const isCustomer = user?.role === 'customer';

 const navigate = useNavigate()

 const [title, setTitle] = useState("");
 const [tags, setTags] = useState([]);
 const [image, setImage] = useState(null);
 const [fileName, setFileName] = useState("");
 const [price, setPrice] = useState("");
 const [newTag, setNewTag] = useState("");
 const [loading, setLoading] = useState(false)
 const [category, setCategory] = useState("");
 const [description, setDescription] = useState("");

 function handleAddTag() {
  setTags((prevState) => [...prevState, newTag]);
  setNewTag("");
}

function handleRemoveTag(deleted) {
  setTags((prevState) => prevState.filter((tag) => tag !== deleted));
}

function handleImageChange(event) {
  const file = event.target.files[0];
  if (file) {
    setImage(file);
    setFileName(file.name);
  } else {
    alert("Nenhum arquivo selecionado.");
  }
}

async function handleSubmit() {
  // Validação dos campos
  if (!title) {
    alert("Por favor, digite o nome do prato.");
    return
  }
  if (!image) {
    alert("Por favor, selecione uma imagem.");
    return;
  }
  if (!fileName) {
    alert("Por favor, adicione um nome para o prato.");
    return;
  }
  if (tags.length === 0) {
    alert("Por favor, adicione pelo menos um ingrediente.");
    return;
  }
  if (!price) {
    alert("Por favor, insira um preço.");
    return;
  }
  if (!category) {
    alert("Por favor, selecione uma categoria.");
    return;
  }
  if (!description) {
    alert("Por favor, insira uma descrição.");
    return;
  }
  
  // Lógica para enviar os dados para a API
  const formData = new FormData();
  formData.append("title", title);
  formData.append("image", image);
  formData.append("ingredients", JSON.stringify(tags));
  formData.append("price", price);
  formData.append("category", category);
  formData.append("description", description);
  
  setLoading(true)
  try {
    await api.post("/dishes", formData);
    alert("Prato cadastrado com sucesso!");
    navigate(-1);
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("Não foi possível cadastrar o prato.");
    }
  } finally {
    setLoading(false);
  }
}



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
         <span>{ fileName|| "Selecione uma imagem"}</span>

         <input id="img" type="file" onChange={handleImageChange}/>
        </label>
       </Img>
      </Section>

      <Section title="Nome">
        <input 
        className="name"
        placeholder="Ex: Salada Ceasar"
        type="text" 
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
      </Section>

      <Section title="Categoria">
        <div className="category">
          <label htmlFor="category">
            <select name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">Selecionar</option>
              <option value="meal">Refeição</option>
              <option value="mainDishes">Sobremesa</option>
              <option value="drinks">Bebida</option>
          </select>

          <CaretDown size="24px"/>
        </label>
        </div>
      </Section>

      <Section title="Ingredientes">
        <div className="tags">
        {
        tags.map((tag, index) => (
          <FoodItem
          key={String(index)}
          value={tag}
          onClick={() => handleRemoveTag(tag)}
          />
        ))}
        <FoodItem
          isNew
          placeholder="Adicionar"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onClick={handleAddTag}
        />
        </div> 
      </Section>

      <Section title="Preço">
        <div className="name">
          <input className="inputTag"
          placeholder="R$ 00,00"
          type="number" 
          value={price}
          onChange={e => setPrice(e.target.value)}
          />
        </div>
      </Section>

      <Section title="Descrição">
        <Textarea 
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Section>

      <Button
        title="Salvar alterações"
        onClick={handleSubmit}
        loading={loading}
        />
     </Form>
    </Content>
    <Footer />
  </Container>
 )
}