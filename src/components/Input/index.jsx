import { StyledInput } from "./styled";

export const Input = ({ setFilter }) => {
  return (
    <>
      <StyledInput
        placeholder="Digitar Pesquisa"
        nama="Search"
        onChange={(event) => setFilter(event.target.value)}
      />
    </>
  );
};
