import { Pagination } from "../Components";
import Search from "../Components/Search";

export default function LocationPage() {
  const pages = 12;

  return (
    <>
      <Search placeholder={"Найти локацию"} />
      <Pagination pages={pages} />
    </>
  );
}
