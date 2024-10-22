import APP_PATH from "../const/router";
import {
  Ellipsis,
  PaginationItem,
  PaginationList,
} from "./styles/Pagination.styled";

export default function Pagination({ path, pages, currentPage }) {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const currentPageNumber = Number(currentPage);

    pageNumbers.push(currentPageNumber);
    if (currentPageNumber - 1) {
      if (currentPageNumber - 2) {
        pageNumbers.unshift("...");
        pageNumbers.unshift(1);
        pageNumbers.unshift("<");
      }
    }

    if (currentPageNumber + 1 <= pages) {
      pageNumbers.push("...");
      pageNumbers.push(pages);
      pageNumbers.push(">");
    }

    return pageNumbers;
  };

  return (
    <PaginationList>
      {getPageNumbers().map((page, index) => {
        if (page === "...") {
          return <Ellipsis key={index}>...</Ellipsis>;
        } else if (page === "<") {
          return (
            <PaginationItem
              key={index}
              to={`${path}/?page=${Number(currentPage) - 1}`}
              $active={page === Number(currentPage)}
            >
              {page}
            </PaginationItem>
          );
        } else if (page === ">") {
          return (
            <PaginationItem
              key={index}
              to={`${path}/?page=${Number(currentPage) + 1}`}
              $active={page === Number(currentPage)}
            >
              {page}
            </PaginationItem>
          );
        } else {
          return (
            <PaginationItem
              key={index}
              to={`${path}/?page=${page}`}
              $active={page === Number(currentPage)}
            >
              {page}
            </PaginationItem>
          );
        }
      })}
    </PaginationList>
  );
}
