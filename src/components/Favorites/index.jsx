import { Container, CloseButton } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CaretLeft } from "@phosphor-icons/react";

export function Favorites({ favoriteDishes, cartIsOpen, onCloseCart, setFavoriteDishes }) {
  
 function handleRemoveFromFavorites(id) {
   const updatedFavoriteDishes = favoriteDishes.filter(dish => dish.id !== id);
   setFavoriteDishes(updatedFavoriteDishes)
 }

 function handleRemoveFromCart(id) {
  const updatedFavoriteDishes = favoriteDishes.filter(dish => dish.id !== id);
  setCartItems(updatedCartItems);
}
 
 return (
   <Container cartIsOpen={cartIsOpen}>
     <Header />
     <section>
       <CloseButton onClick={onCloseCart}><CaretLeft size={16} /> Meus Pedidos</CloseButton>
       <div>
       {
         favoriteDishes.map(dish => {
           return (
             <section className="cart" key={dish.id}>
               <img 
                 src={imageMapping[dish.title] || dish.image} // Usa a imagem do mapeamento ou a imagem padrão
                 alt={`Imagem: ${dish.title}`} 
                 style={{ width: '70x', height: '70px' }}/>
             
             <div className="info">
               <h3>{dish.title}</h3>
               <button 
               type="button"
               onClick={() => handleRemoveFromFavorites(dish.id)} 
               >
               <p>Remover dos Favoritos</p>
               </button>
             </div>
           </section>
          );
         })
       }
       </div>
     </section>
     
     <Footer />
   </Container>
 );
}