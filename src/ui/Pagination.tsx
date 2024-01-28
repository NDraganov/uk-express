import { Link } from "react-router-dom";

interface PaginationProps {
  totalPages: number | undefined;
  currentPage: number;
  paginate: (number: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  paginate,
}: PaginationProps) {
  const pageNumbers = [];

  if (totalPages !== undefined)
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

  return (
    <nav className="my-4 flex items-center justify-center">
      <ul className="flex items-center last:border-r last:border-r-gray-300 dark:last:border-r-gray-500">
        {pageNumbers.map((page) => (
          <Link to="#" onClick={() => paginate(page)}>
            <li
              className={`flex h-10 w-14 items-center justify-center border border-r-0 border-gray-300 font-light hover:bg-slate-100 dark:border-gray-500 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-white ${
                page == currentPage
                  ? "bg-cyan-50 text-cyan-600 dark:bg-slate-700 dark:text-white"
                  : ""
              }`}
              key={page}
            >
              {page}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
