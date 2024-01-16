import CloseButton from "./menu-components/CloseButton";
import MobileMenuLink from "./menu-components/MobileMenuLink";

export default function MobileMenu() {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-lime-500 p-5">
      <div className="flex justify-between">
        <p className="text-xl text-slate-100">UkExpress</p>
        <CloseButton />
      </div>
      <nav>
        <ul className="flex flex-col">
          <MobileMenuLink to="/" title="Home" />
          <MobileMenuLink to="/products" title="Products" />
        </ul>
      </nav>
    </div>
  );
}
