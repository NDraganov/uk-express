import ContactForm from "../features/contact/ContactForm";
import ContactInfo from "../features/contact/ContactInfo";

export default function Contact() {
  return (
    <main className="-mt-10 min-h-screen sm:mt-10 sm:flex">
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
