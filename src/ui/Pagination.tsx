import { NavLink } from "react-router-dom";

interface PaginationProps {
  totalPages: number | undefined;
  paginate: (number: number) => void;
}

export default function Pagination({ totalPages, paginate }: PaginationProps) {
  const pageNumbers = [];

  if (totalPages !== undefined)
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <NavLink to="!#" onClick={() => paginate(number)}>
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
