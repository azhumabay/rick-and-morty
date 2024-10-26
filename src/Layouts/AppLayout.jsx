import { Outlet } from "react-router-dom";

import Container from "../components/styled/Container.styled";
import useSearchStore from "../store/useSearchStore";
import { AppHeader } from "../components";

export default function AppLayout() {
  const { isSearchOpen } = useSearchStore();

  return (
    <>
      <Container>
        <Outlet />
      </Container>
      {!isSearchOpen && <AppHeader />}
    </>
  );
}
