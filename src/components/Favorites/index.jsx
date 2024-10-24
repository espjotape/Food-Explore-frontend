import { Container, CloseButton } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CaretLeft } from "@phosphor-icons/react";

export function Favorites({ favoriteDishes = [], cartIsOpen, onCloseCart, setFavoriteDishes }) {
  console.log('favoriteDishes:', favoriteDishes);
 
  function handleRemoveFromFavorites(id) {
  const updatedFavoriteDishes = favoriteDishes.filter(dish => dish.id !== id);
  setFavoriteDishes(updatedFavoriteDishes)
 }

 return (
   <Container cartIsOpen={cartIsOpen}>
     <Header />
     <section>
       <CloseButton onClick={onCloseCart}><CaretLeft size={16} /> Meus Pratos Favoritos</CloseButton>
       <div>
       {
        
  favoriteDishes && favoriteDishes.length > 0 ? (
    
    favoriteDishes.map(dish => {
      return (
        <section className="cart" key={dish.id}>
          <img 
            src={imageMapping[dish.title] || dish.image} 
            alt={`Imagem: ${dish.title}`} 
            style={{ width: '70px', height: '70px' }} />
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
  ) : (
    <p>Nenhum prato nos favoritos.</p>
  )
}
       </div>
     </section>
     
     <Footer />
   </Container>
 );
}