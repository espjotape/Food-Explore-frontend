import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 172px;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  border: none;
  border-radius: 10px;
  resize: none;
  padding: 16px;
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.WHITE_500};
  }

`