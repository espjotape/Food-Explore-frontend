import { Container, Box, Identidade, Logo, Notification, Orders } from "./styles"
import { List, Receipt } from "@phosphor-icons/react"

import { useState } from "react"

export function Header(){
 const [numeroPedidos, setNumeroPedidos ] = useState(1)

 return(
  <Container>
   <Box>
    <List color="#fff" size={22}/>

    <Identidade>
     <Logo/>
     <h1>food explorer</h1>
    </Identidade>

    <Orders>
      <Receipt color="#fff" size={24} />
       {/* Exibir a bolinha de notificações */}
       {numeroPedidos > 0 && <Notification>{numeroPedidos}</Notification>}
    </Orders>
   </Box>
  </Container>
 )
} 