import ContactForm from "../features/contact/ContactForm";
import ContactInfo from "../features/contact/ContactInfo";

export default function Contact() {
  return (
    <main className="my-20 flex">
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
