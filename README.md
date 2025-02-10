# 🍽️ Food Explorer

## Sobre o projeto
A aplicação **Food Explorer** é um cardápio digital desenvolvido para um restaurante fictício. Com ele, os usuários podem visualizar pratos, adicionar ao carrinho, favoritar, filtrar e realizar pedidos.

## 🚀 Tecnologias utilizadas

### **Front-end**
- HTML
- CSS
- JavaScript
- React.js
- Vite.js
- Axios
- Phosphor Icons
- Swiper
- Styled Components
- React-responsive

### **Back-end**
- Node.js
- Express
- Knex
- SQLite
- bcryptjs
- jsonwebtoken
- multer
- Nodemon

## 🛠️ Requisitos para rodar o projeto

- Node.js instalado
- npm ou yarn instalado

## 📂 Como rodar o projeto localmente

### **Clonando o repositório**
```bash
# Clone o repositório do front-end
git clone git@github.com:espjotape/Food-Explore-frontend.git

# Clone o repositório do back-end
git clone git@github.com:espjotape/Food-Explore-backend.git
```

### **Instalando dependências**
```bash
# Acesse o diretório do front-end
cd Food-Explore-frontend
npm install

# Acesse o diretório do back-end
cd ../Food-Explore-backend
npm install
```

### **Executando a aplicação**
```bash
# Rodando o backend
cd Food-Explore-backend
npm run dev

# Em outro terminal, rodando o frontend
cd ../Food-Explore-frontend
npm run dev
```
A aplicação estará disponível no navegador em `http://localhost:5173/`.

## 🎯 Funcionalidades
- **Autenticação:** Login e Cadastro
- **Gerenciamento de pratos:**
  - Cadastrar pratos
  - Editar pratos
  - Excluir pratos
  - Mostrar pratos cadastrados
  - Mostrar detalhes do prato
- **Sistema de favoritos:**
  - Favoritar prato
  - Remover prato dos favoritos
  - Mostrar pratos favoritos
- **Carrinho de compras:**
  - Adicionar prato ao carrinho
  - Realizar o pagamento por PIX ou Cartão de Crédito
- **Filtragem:**
  - Filtrar pratos cadastrados
- **Logout**

## 👥 Perfis de Usuário

O Food Explorer conta com dois tipos de usuários: administradores e clientes. Você pode criar sua própria conta ou utilizar as credenciais abaixo para testar a aplicação:

🔧 Administrador

📧 E-mail: admin@email.com 🔑 Senha: admin123  
Os administradores possuem controle total sobre o cardápio, podendo cadastrar, editar e remover pratos, além de gerenciar outras configurações do sistema.

👤 Cliente

📧 E-mail: user@email.com 🔑 Senha: user123  
Os clientes podem navegar pelo cardápio, visualizar informações detalhadas dos pratos, favoritar seus preferidos, adicionar itens ao carrinho e realizar pedidos.
