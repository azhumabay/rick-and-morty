import { Outlet } from "react-router-dom";
import AppHeader from "../Components/AppHeader";
import Container from "../Components/styles/Container.styled";

export default function AppLayout() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
      <AppHeader />
    </>
  );
}
