import { Container, CloseButton } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CaretLeft } from "@phosphor-icons/react";

import spaghettiImage from '../../assets/spaghettiCarbonara.png'
import saladaMollaImage from '../../assets/Salada Molla.png'
import torradasDeParmaImage from '../../assets/Torradas de Parma.png'
import spaguettiGambeImage from '../../assets/Spaguetti Gambe.png'
import boloDeDamascoImage from '../../assets/Bolo damasco.png'
import prugnaPieImage from '../../assets/Prugna pie.png'
import macaronsImage from '../../assets/Macarons.png'
import peachyPastrieImage from '../../assets/Peachy pastrie.png'
import teDautunnoImage from '../../assets/Tedautunno.png'
import expressoImage from '../../assets/Expresso.png'
import PomoBourbon from '../../assets/Pomo bourbon.png'
import sucoDeMaracuja from '../../assets/Suco de Maracujá.png'

const imageMapping = {
  'Spaghetti Carbonara': spaghettiImage,
  'Spaguetti Gambe': spaguettiGambeImage,
  'Torradas de Parma' : torradasDeParmaImage,
  'Salada Molla' : saladaMollaImage,
  'Bolo de Damasco' : boloDeDamascoImage,
  'Prugna Pie': prugnaPieImage,
  'Macarons': macaronsImage,
  'Peachy Pastrie': peachyPastrieImage,
  'Tè dAutunno': teDautunnoImage,
  'Expresso': expressoImage,
  'Pomo Bourbon' : PomoBourbon,
  'Suco de Maracuja' : sucoDeMaracuja,
};

export function Cart({ cartIsOpen, onCloseCart, cartItems, setCartItems }) {
  
  function handleRemoveFromFavorites(id) {
    const updatedCartItems = cartItems.filter(cart => cart.id !== id);
    setCartItems(updatedCartItems); 
  }
  
  return (
    <Container cartIsOpen={cartIsOpen}>
      <Header />
      <section>
        <CloseButton onClick={onCloseCart}><CaretLeft size={16} /> Meus Pedidos</CloseButton>
        <div>
        {
          cartItems.map(cart => {
            return (
              <section className="cart" key={cart.id}>
                <img 
                  src={imageMapping[cart.title] || cart.image} // Usa a imagem do mapeamento ou a imagem padrão
                  alt={`Imagem: ${cart.title}`} 
                  style={{ width: '70x', height: '70px' }}/>
              
              <div className="info">
                <h3>{cart.title}</h3>
                <button 
                type="button"
                onClick={() => handleRemoveFromFavorites(cart.id)} 
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
