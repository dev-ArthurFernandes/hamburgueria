import { Header } from "./components/Header";
import { useState, useEffect } from "react";
import { Container } from "./components/Container/styled.js";
import { Filter } from "./components/Filter";
import { StyledSection } from "./components/Section/styled";
import { Cart } from "./components/Cart/index";
import { BurguerList } from "./components/BurguerList";
import { api } from "./services/api";
import { ItemName } from "./components/BurguerList/BurguerCards/styled";

function App() {
  const [filter, setFilter] = useState("");
  const [itens, setItens] = useState([]);
  const [cartItens, setCartItens] = useState([]);

  useEffect(() => {
    async function getItens() {
      try {
        const response = await api.get("products");
        setItens(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getItens();
  }, []);

  let total = 0;

  if (cartItens) {
    cartItens.forEach((item) => {
      console.log(item);
      total += Number(item.price);
    });
  }

  return (
    <>
      <Header setFilter={setFilter} />
      <main
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Container>
          <StyledSection>
            {filter && <Filter filter={filter} setFilter={setFilter} />}
            <BurguerList
              itens={itens}
              setCartItens={setCartItens}
              filter={filter}
            />
          </StyledSection>
          <StyledSection>
            <Cart
              cartItens={cartItens}
              setCartItens={setCartItens}
              total={total}
            />
          </StyledSection>
        </Container>
      </main>
    </>
  );
}

export default App;
