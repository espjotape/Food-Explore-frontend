import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section"
import { Textarea } from "../../components/Textarea";
import { FoodItem } from "../../components/FoodItem/index.jsx";
import { Button } from "../../components/Button"

import { useAuth } from "../../hooks/auth"
import { useState } from "react";

import { Container, Content, Img, Form } from "./styles.js"

import { CaretLeft, UploadSimple, CaretDown } from "@phosphor-icons/react"; 


export function New(){
const { user } = useAuth()
 const isAdmin = user?.role === 'admin';
 const isCustomer = user?.role === 'customer';

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
  const file = event.target.files[0]
  setImage(file)
  fileName(file.name)
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
         <span>Selecione uma imagem</span>

         <input id="uploadImg" type="file" onChange={handleImageChange}/>
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
            <select name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">Selecionar</option>
              <option value="">Refeição</option>
              <option value="">Sobremesa</option>
              <option value="">Bebida</option>
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
        />
     </Form>
    </Content>
    <Footer />
  </Container>
 )
}