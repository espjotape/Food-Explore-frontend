import { useState } from "react";

import { MagnifyingGlass } from "@phosphor-icons/react"
import { Container } from "./styles";

import { Input } from "../../components/Input";

export function Search({ search, isDisabled }) {
  return (
    <Container>
      <Input
        placeholder="Busque por pratos ou ingredientes"
        icon={MagnifyingGlass}
        disabled={isDisabled}
        onChange={(e) => search(e.target.value)}
      />
    </Container>
  );
}