export default function CurrentYear() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex items-center gap-1">
      <p className="flex items-center gap-1">
        &copy;
        <span>{currentYear}</span>
      </p>
      <p>UkExpress. All Rights Reserved.</p>
    </div>
  );
}
