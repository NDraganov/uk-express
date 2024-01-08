import Icon from "../../ui/Icon";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <aside className="flex min-h-screen w-2/6 flex-col items-center justify-center py-10">
      <div className="my-4 flex flex-col gap-4">
        <h1 className="text-5xl font-light">Get in touch</h1>
        <p className="flex items-center gap-2">
          <Icon value={{ className: "" }}>
            <FaPhoneAlt />
          </Icon>
          <span>+44 7654321890</span>
        </p>
        <p className="flex items-center gap-2">
          <Icon value={{ className: "" }}>
            <MdEmail />
          </Icon>
          <span>uk-express@gmail.com</span>
        </p>
        <p className="flex items-center gap-2">
          <Icon value={{ className: "" }}>
            <FaLocationDot />
          </Icon>
          <address className="not-italic">
            Wembley Park 306, NE10 6AR, London, UK
          </address>
        </p>
      </div>
    </aside>
  );
}
