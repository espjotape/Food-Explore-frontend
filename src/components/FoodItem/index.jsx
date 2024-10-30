import { Plus, X } from "@phosphor-icons/react";
import { Container } from "./styles";

export function FoodItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <Plus /> : <X />}
      </button>
    </Container>
  );
}
