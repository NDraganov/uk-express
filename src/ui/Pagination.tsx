import { NavLink } from "react-router-dom";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
}: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <NavLink to="!#">{number}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
