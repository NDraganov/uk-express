import { NavLink } from "react-router-dom";

export default function TermsAndContions() {
  return (
    <div className="mx-80 my-10">
      <h1 className="text-3xl font-bold dark:text-white">
        UkExpress Terms and Conditions Policy
      </h1>
      <div>
        <p className="py-4 font-light">
          Welcome to UkExpress These terms and conditions outline the rules and
          regulations for the use of UkExpress’s Website.
        </p>
        <p className="flex gap-2 py-2 font-light">
          UkExpress is located at:{" "}
          <address className="font-normal not-italic dark:text-slate-200">
            Wembley Park 306, NE10 6AR, London, UK
          </address>
        </p>
      </div>

      <div>
        <p className="py-4 font-light">
          By accessing this website we assume you accept these terms and
          conditions in full. Do not continue to use UkExpress’s website if you
          do not accept all of the terms and conditions stated on this page.
        </p>
        <p className="py-4 font-light">
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and any or all Agreements:
          Client, You and Your refers to you, the person accessing this website
          and accepting the Company’s terms and conditions. The Company,
          Ourselves, We, Our and Us, refers to our Company. Party, Parties, or
          Us, refers to both the Client and ourselves, or either the Client or
          ourselves.
        </p>
        <p className="py-4 font-light">
          All terms refer to the offer, acceptance and consideration of payment
          necessary to undertake the process of our assistance to the Client in
          the most appropriate manner, whether by formal meetings of a fixed
          duration, or any other means, for the express purpose of meeting the
          Client’s needs in respect of provision of the Company’s stated
          services/products, in accordance with and subject to, prevailing law
          of United Kingdom and European Union.
        </p>
        <p className="py-4 font-light">
          Any use of the above terminology or other words in the singular,
          plural, capitalisation and/or he/she or they, are taken as
          interchangeable and therefore as referring to same.
        </p>
      </div>

      <div>
        <h2 className="py-2 font-semibold dark:text-white">Cookies</h2>

        <p className="py-4 font-light">
          We employ the use of cookies. By using UkExpress’s website you consent
          to the use of cookies in accordance with UkExpress’s privacy policy.
          Most of the modern day interactive websites use cookies to enable us
          to retrieve user details for each visit.
        </p>
        <p className="py-4 font-light">
          Cookies are used in some areas of our site to enable the functionality
          of this area and ease of use for those people visiting. Some of our
          affiliate / advertising partners may also use cookies.
        </p>
      </div>

      <div>
        <h2 className="py-2 font-semibold dark:text-white">License</h2>
        <p className="py-4 font-light">
          Unless otherwise stated, UkExpress and/or its licensors own the
          intellectual property rights for all material on UkExpress.
        </p>

        <p className="py-4 font-light">
          All intellectual property rights are reserved. You may view and/or
          print pages from (Add URL) for your own personal use subject to
          restrictions set in these terms and conditions.
        </p>

        <p className="py-4 dark:text-gray-300">You must not:</p>
        <ul className="list-disc py-2 pl-7 font-light">
          <li>
            Republish material from{" "}
            <NavLink
              className="font-normal underline hover:text-orange-500 dark:text-slate-200 dark:hover:text-cyan-300"
              to="/"
            >
              UkExpress
            </NavLink>
            .
          </li>
          <li>
            Sell, rent or sub-license material from{" "}
            <NavLink
              className="font-normal underline hover:text-orange-500 dark:text-slate-200 dark:hover:text-cyan-300"
              to="/"
            >
              UkExpress
            </NavLink>
            .
          </li>
          <li>
            Reproduce, duplicate or copy material from{" "}
            <NavLink
              className="font-normal underline hover:text-orange-500 dark:text-slate-200 dark:hover:text-cyan-300"
              to="/"
            >
              UkExpress
            </NavLink>
            .
          </li>
          <li>
            Redistribute content from UkExpress (unless content is specifically
            made for redistribution).
          </li>
        </ul>
      </div>

      <div>
        <h2 className="py-2 font-semibold dark:text-white">Disclaimer</h2>

        <p className="py-4 font-light">
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website (including, without limitation, any warranties
          implied by law in respect of satisfactory quality, fitness for purpose
          and/or the use of reasonable care and skill).
        </p>

        <p className="py-4 dark:text-gray-300">
          Nothing in this disclaimer will:
        </p>

        <ul className="list-disc py-2 pl-7 font-light">
          <li>
            Limit or exclude our or your liability for death or personal injury
            resulting from negligence.
          </li>
          <li>
            Limit or exclude our or your liability for fraud or fraudulent
            misrepresentation.
          </li>
          <li>
            Limit any of our or your liabilities in any way that is not
            permitted under applicable law.
          </li>
          <li>
            Or exclude any of our or your liabilities that may not be excluded
            under applicable law.
          </li>
        </ul>

        <p className="py-4 dark:text-gray-300">
          The limitations and exclusions of liability set out in this Section
          and elsewhere in this disclaimer:
        </p>

        <ul className="list-disc py-2 pl-7 font-light">
          <li>are subject to the preceding paragraph; and</li>
          <li>
            govern all liabilities arising under the disclaimer or in relation
            to the subject matter of this disclaimer, including liabilities that
            arise in contract, tort (including negligence) and for breach of
            statutory duty.
          </li>
        </ul>

        <p className="py-4 font-light">
          To the extent that the website and the information and services on the
          website are provided free of charge, we will not be liable for any
          loss or damage of any nature.
        </p>
      </div>
    </div>
  );
}
