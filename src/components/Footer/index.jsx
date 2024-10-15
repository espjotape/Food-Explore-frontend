import { Container, Brand, Royalties } from "./styles";

export function Footer() {
  return (
    <Container>
      <Brand>
        <img src="../../../assets/logo.svg" alt="logo" className="logo" />
        <h2>food explorer</h2>
      </Brand>
      <Royalties>© 2024 - Todos os direitos reservados.</Royalties>
    </Container>
  );
}
