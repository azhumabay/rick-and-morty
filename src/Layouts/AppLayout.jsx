import { Outlet } from "react-router-dom";
import AppHeader from "../Components/AppHeader";
import Search from "../Components/Search";
import Container from "../Components/styles/Container.styled";

export default function AppLayout() {
  return (
    <>
      <Container>
        <Search />
        <Outlet />
      </Container>
      <AppHeader />
    </>
  );
}
