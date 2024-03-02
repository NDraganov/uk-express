import { NavLink } from "react-router-dom";
import AnimationPageWrapper from "../../../ui/AnimationPageWrapper";

export default function Privacy() {
  return (
    <AnimationPageWrapper>
      <div className="mx-4 my-10 sm:mx-80">
        <h1 className="text-3xl font-bold dark:text-white">
          UkExpress Privacy Policy
        </h1>
        <p className="py-4 font-light">
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from{" "}
          <NavLink
            className="font-normal underline hover:text-orange-500 dark:text-slate-200 dark:hover:text-cyan-300"
            to="/"
          >
            UkExpress
          </NavLink>
          .
        </p>
        <div>
          <h2 className="py-2 font-semibold dark:text-white">
            WHAT PERSONAL INFORMATION WE COLLECT
          </h2>
          <p className="py-4 font-light">
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device.
          </p>
          <p className="py-4 font-light">
            Additionally, as you browse the Site, we collect information about
            the individual web pages or products that you view, what websites or
            search terms referred you to the Site, and information about how you
            interact with the Site. We refer to this automatically collected
            information as Device Information.
          </p>
          <p className="py-4 dark:text-gray-300">
            We collect Device Information using the following technologies:
          </p>
          <ul className="list-disc py-2 pl-7 font-light">
            <li>
              <span className="font-normal dark:text-slate-300">Cookies</span>{" "}
              are data files that are placed on your device or computer and
              often include an anonymous unique identifier.
            </li>
            <li>
              <span className="font-normal dark:text-slate-300">Log files</span>{" "}
              track actions occurring on the Site, and collect data including
              your IP address, browser type, Internet service provider,
              referring/exit pages, and date/time stamps.
            </li>
          </ul>
          <p className="py-4 font-light">
            Also, when you make a purchase or attempt to make a purchase through
            the Site, we collect certain information from you, including your
            name, billing address, shipping address, payment information
            (including credit card numbers Mention all types of accepted
            payments, email address, and phone number. This is called Order
            Information).
          </p>
          <p className="py-4 font-light">
            By Personal Information in this Privacy Policy, we are talking both
            about Device Information and Order Information.
          </p>
        </div>

        <div>
          <h2 className="py-2 font-semibold dark:text-white">
            HOW DO WE USE YOUR PERSONAL INFORMATION
          </h2>
          <p className="py-4 font-light">
            We use the Order Information that we collect generally to fulfil any
            orders placed through the Site (including processing your payment
            information, arranging for shipping, and providing you with invoices
            and/or order confirmations).
          </p>
          <p className="py-4 dark:text-gray-300">
            Additionally, we use this Order Information to:
          </p>
          <ul className="list-disc py-2 pl-7 font-light">
            <li>Communicate with you.</li>
            <li>Screen our orders for potential risk or fraud.</li>
            <li>
              hen in line with the preferences you have shared with us, provide
              you with information or advertising relating to our products or
              services.
            </li>
          </ul>
          <p className="py-4 font-light">
            We use the Device Information that we collect to help us screen for
            potential risk and fraud (in particular, your IP address), and more
            generally to improve and optimize our Site.
          </p>
        </div>

        <div>
          <h2 className="py-2 font-semibold dark:text-white">
            SHARING YOUR PERSONAL INFORMATION
          </h2>
          <p className="py-4 font-light">
            We share your Personal Information with third parties to help us use
            your Personal Information, as described above.
          </p>
          <p className="py-4 font-light">
            We also use Google Analytics to help us understand how our customers
            use UkExpress. How Google uses your Personal Information.
          </p>
          <p className="py-4 font-light">
            Finally, we may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful requests for information we receive, or to
            otherwise protect our rights.
          </p>
        </div>

        <div>
          <h2 className="py-2 font-semibold dark:text-white">
            BEHAVIOURAL ADVERTISING
          </h2>
          <p className="py-4 font-light">
            We use your Personal Information to provide you with targeted
            advertisements or marketing communications we believe may be of
            interest to you.
          </p>
          <p></p>
        </div>

        <div>
          <h2 className="py-2 font-semibold dark:text-white">YOUR RIGHTS</h2>
          <p className="py-4 font-light">
            If you are a European resident, you have the right to access the
            personal information we hold about you and to ask that your personal
            information is corrected, updated, or deleted. If you would like to
            exercise this right, please contact us.
          </p>
          <p className="pt-4 font-light">
            Additionally, if you are a European resident we note that we are
            processing your information in order to fulfil contracts we might
            have with you (for example if you make an order through the Site),
            or otherwise to pursue our legitimate business interests listed
            above.
          </p>
          <p className="pb-4 font-light">
            Please note that your information will be transferred outside of
            Europe, including to Canada and the United States.
          </p>
        </div>

        <div>
          <h2 className="py-2 font-semibold dark:text-white">DATA RETENTION</h2>
          <p className="py-4 font-light">
            When you place an order through the Site, we will maintain your
            Order Information for our records unless and until you ask us to
            delete this information.
          </p>
        </div>

        <div>
          <h2 className="py-2 font-semibold dark:text-white">MINORS</h2>
          <p className="py-4 font-light">
            The Site is not intended for individuals under the age of{" "}
            <span className="font-bold dark:text-slate-200">18</span>.
          </p>
        </div>

        <div>
          <h2 className="py-2 font-semibold dark:text-white">CHANGES</h2>
          <p className="py-4 font-light">
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
          </p>
          <p className="py-4 font-light">
            If you have questions and/or require more information, do not
            hesitate to{" "}
            <NavLink
              className="font-normal underline hover:text-orange-500 dark:text-slate-200 dark:hover:text-cyan-300"
              to="/contact_us"
            >
              contanct us
            </NavLink>
            .
          </p>
        </div>
      </div>
    </AnimationPageWrapper>
  );
}
