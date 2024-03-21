import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import GlobalStyles from "../styles/GlobalStyles";

const Main = styled.main`
  background-color: var(--color-slate-500);
  padding: 4rem 4.8rem 6.4rem;
  flex-grow: 1;
  overflow: scroll;
`;

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;

  position: relative;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  gap: 3.2rem;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <GlobalStyles />

      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
