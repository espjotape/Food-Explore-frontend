import { Container } from "./styles";

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={"24px"} />}
      <input {...rest} />
    </Container>
  );
}