import Button from "./Button";

interface ErrorMessageProps {
  userMessage: string;
  errorStatus: string;
  errorMessage: string;
}

export default function ErrorMessage({
  userMessage,
  errorStatus,
  errorMessage,
}: ErrorMessageProps) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-medium text-rose-500">
          Oops, an error has occurred!
        </h1>
        <h2 className="text-xl">{userMessage}</h2>
        <div className="my-10 text-lg font-light">
          <p>
            Status:{" "}
            <span className="text-red-600">{JSON.parse(errorStatus)}</span>
          </p>
          <p>
            Error message: <span className="text-red-600">{errorMessage}</span>
          </p>
        </div>
        <Button title="Try again" onClick={() => window.location.reload} />
      </div>
    </div>
  );
}
