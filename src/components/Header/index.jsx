import { Input } from "../Input/index.jsx";
import {
  StyledDivInputHeader,
  StyledHeader,
  StyledHeaderContainer,
} from "./styled.js";
import { GreenButton } from "./../GreenButton/index";
import { Logo } from "./../Logo/index";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Logo />
        <StyledDivInputHeader>
          <Input />
          <GreenButton>Pesquisar</GreenButton>
        </StyledDivInputHeader>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
