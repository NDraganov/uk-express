import ContactForm from "../features/contact/ContactForm";
import ContactInfo from "../features/contact/ContactInfo";

export default function Contact() {
  return (
    <main className="mt-20 flex h-screen">
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
