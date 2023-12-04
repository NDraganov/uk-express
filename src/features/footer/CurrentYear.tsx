export default function CurrentYear() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p>
        &copy;
        <span>{currentYear}</span>
      </p>
    </div>
  );
}
