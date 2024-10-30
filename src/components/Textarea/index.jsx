import { Container } from "./styles"

export function Textarea({ value, ...rest }) {
  return (
    <Container value={value} {...rest} />
  );
}
