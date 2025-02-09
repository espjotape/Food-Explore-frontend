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

 const isDisabled = !image || !title || !price || tags.length === 0 || !category || !description;

 function handleBack(){
  navigate(-1)
 }

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


function validator() {
  if (isDisabled) {
    alert("Por favor, preencha todos os campos obrigatórios.")
    return false
  }validator
  return true
}

async function handleSubmit() {
  const passedValidation = validator();

  if(passedValidation){
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
}

return(
  <Container>
    <Header isAdmin={isAdmin} />
    <Content>
     <button type="button" onClick={handleBack}>
      <CaretLeft color="#FFF" />
      <p>voltar</p>
     </button>
     <h1>Adicionar prato</h1>
  
     <Form>
      <div className="firstLine">
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
              <select name="category" id="category" value={category || ""} onChange={e => setCategory(e.target.value)}>
                <option value="">Selecionar</option>
                <option value="meal">Refeição</option>
                <option value="mainDishes">Sobremesa</option>
                <option value="drinks">Bebida</option>
            </select>

            <CaretDown size="24px"/>
          </label>
          </div>
        </Section>
      </div>

      <div className="secondLine">
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
        <div className="price">
          <input className="inputPrice"
          placeholder="R$ 00,00"
          type="number" 
          value={price}
          onChange={e => setPrice(e.target.value)}
          />
        </div>
      </Section>
      </div>
     
      <Section title="Descrição">
        <Textarea 
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
      </Section>

      <div className="button">
         <Button
           className="save"
           title="Salvar alterações"
           onClick={handleSubmit}
           disabled={isDisabled}
           />
      </div>
     </Form>
    </Content>
    <Footer />
  </Container>
 )
}