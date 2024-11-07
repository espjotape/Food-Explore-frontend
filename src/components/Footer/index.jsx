import { Container, Brand, Royalties } from "./styles";

import logo from "../../assets/logo-footer.svg"

export function Footer() {
  return (
    <Container>
      <Brand>
        <img src={logo} alt="logo" />
      </Brand>
      <Royalties>© 2024 - Todos os direitos reservados.</Royalties>
    </Container>
  );
}
