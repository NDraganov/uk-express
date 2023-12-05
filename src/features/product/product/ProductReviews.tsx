import { useGetCommentsQuery } from "../../../api/productsApiSlice";

interface ProductReviewsProps {
  title: string | undefined;
}

export default function ProductReviews({ title }: ProductReviewsProps) {
  const { data: reviews } = useGetCommentsQuery(undefined);

  return (
    <div>
      <p className="text-xl">
        Reviews for{" "}
        <span className="font-semibold dark:text-white">{title}</span>
      </p>
      <ul className="mt-5 flex flex-col gap-4">
        {reviews?.comments.map((review) => (
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
    </div>
  );
}
