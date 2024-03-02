import ContactForm from "../features/contact/ContactForm";
import ContactInfo from "../features/contact/ContactInfo";
import AnimationPageWrapper from "../ui/AnimationPageWrapper";

export default function Contact() {
  return (
    <AnimationPageWrapper>
      <main className="-mt-10 min-h-screen sm:mt-10 sm:flex">
        <ContactInfo />
        <ContactForm />
      </main>
    </AnimationPageWrapper>
  );
}
