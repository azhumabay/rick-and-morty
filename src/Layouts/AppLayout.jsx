import { Outlet } from "react-router-dom";
import AppHeader from "../Components/AppHeader";
import Container from "../Components/styles/Container.styled";
import useSearchStore from "../store/useSearchStore";

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
