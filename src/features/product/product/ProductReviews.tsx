import { useState } from "react";
import { useGetCommentsQuery } from "../../../api/productsApiSlice";
import { Pagination } from "flowbite-react";

interface ProductReviewsProps {
  title: string | undefined;
  setState: (arg: boolean) => void;
}

export default function ProductReviews({
  title,
  setState,
}: ProductReviewsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: comments } = useGetCommentsQuery(undefined);

  const reviewsPerPage = 10;

  const totalPages =
    comments?.comments.length && comments.comments.length / reviewsPerPage;

  const indexOfLastPost = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastPost - reviewsPerPage;
  const currentReviews = comments?.comments.slice(
    indexOfFirstReview,
    indexOfLastPost,
  );
  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-xl">
          Reviews for{" "}
          <span className="font-semibold dark:text-white">{title}</span>
        </p>
        <button
          className="font-light underline hover:cursor-pointer hover:text-slate-500 dark:hover:text-gray-300"
          onClick={() => setState(false)}
        >
          hide reviews
        </button>
      </div>
      <ul className="mt-5 flex flex-col gap-4">
        {currentReviews?.map((review) => (
          <li
            className="rounded-sm border border-slate-300 p-4 dark:border-gray-500"
            key={review.id}
          >
            <div className="flex items-center justify-start gap-4">
              <img
                className="w-8 rounded-full"
                src="/default-user.jpg"
                alt="user"
              />
              <p className="font-medium dark:text-white">
                {review.user.username}
              </p>
            </div>
            <div className="px-12 py-2">
              <p className="font-light text-slate-500 dark:text-gray-400">
                {review.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
}
