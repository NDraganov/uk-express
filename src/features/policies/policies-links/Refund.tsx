import { NavLink } from "react-router-dom";

export default function Refund() {
  return (
    <div className="mx-80 my-10">
      <h2 className="text-3xl font-bold dark:text-white">
        UkExpress Refund Policy
      </h2>
      <p className="pb-4 pt-2 font-light">
        Thank you for shopping at UkExpress!
      </p>
      <p className="py-4 font-light">
        We offer refund and/or exchange within the first 30 days of your
        purchase, if 30 days have passed since your purchase, you will not be
        offered a refund and/or exchange of any kind.
      </p>

      <div>
        <h3 className="py-2 font-semibold dark:text-white">
          Eligibility for Refunds and Exchanges
        </h3>
        <ul className="list-disc py-2 pl-7 font-light">
          <li className="py-2">
            Your item must be unused and in the same condition that you received
            it.
          </li>
          <li className="py-2">The item must be in the original packaging.</li>
          <li className="py-2">
            To complete your return, we require a receipt or proof of purchase.
          </li>
          <li className="py-2">
            Only regular priced items may be refunded, sale items cannot be
            refunded.
          </li>
          <li className="py-2">
            If the item in question was marked as a gift when purchased and
            shipped directly to you, you will receive a gift credit for the
            value of your return.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="py-2 font-semibold dark:text-white">
          Exchanges <span className="font-light italic">(if applicable)</span>
        </h3>
        <p className="py-4 font-light">
          We only replace items if they are defective or damaged. If you need to
          exchange it for the same item, send us an email at{" "}
          <NavLink
            className="font-normal hover:text-orange-500 dark:text-slate-200 dark:hover:text-cyan-300"
            to="/"
          >
            uk-express@gmail.com
          </NavLink>{" "}
          and send your item to:{" "}
          <address className="font-normal not-italic dark:text-slate-200">
            Wembley Park 306, NE10 6AR, London, UK.
          </address>
        </p>
      </div>

      <div>
        <h3 className="py-2 font-semibold dark:text-white">Exempt Goods</h3>
        <p className="py-4 dark:text-gray-300">
          The following are exempt from refunds:
        </p>
        <ul className="list-disc py-2 pl-7 font-light">
          <li className="py-2">Gift cards</li>
          <li className="py-2">Some health and personal care items</li>
        </ul>
      </div>

      <div>
        <h3 className="py-2 font-semibold dark:text-white">
          Partial refunds are granted{" "}
          <span className="font-light italic">(if applicable)</span>
        </h3>
        <ul className="list-disc py-2 pl-7 font-light">
          <li className="py-2">
            Any item not in its original condition, is damaged or missing parts
            for reasons not due to our error.
          </li>
          <li className="py-2">
            Any item that is returned more than 30 days after delivery.
          </li>
        </ul>
        <p className="py-4 font-light">
          Once your return is received and inspected, we will send you an email
          to notify you that we have received your returned item. We will also
          notify you of the approval or rejection of your refund.
        </p>
        <p className="py-4 font-light">
          If you are approved, then your refund will be processed, and a credit
          will automatically be applied to your credit card or original method
          of payment, within a certain amount of days.
        </p>
      </div>

      <div>
        <h3 className="py-2 font-semibold dark:text-white">
          Late or missing refunds
        </h3>
        <ul className="list-disc py-2 pl-7 font-light">
          <li className="py-2">
            If you have not received a refund yet, first check your bank account
            again. Then contact your credit card company, it may take some time
            before your refund is officially posted.
          </li>
          <li className="py-2">
            If you have done all of this and you still have not received your
            refund yet, please{" "}
            <NavLink
              className="font-normal underline hover:text-orange-500 dark:text-slate-200 dark:hover:text-cyan-300"
              to="/contact_us"
            >
              contanct us
            </NavLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="py-2 font-semibold dark:text-white">Shipping</h3>
        <ul className="list-disc py-2 pl-7 font-light">
          <li className="py-2">
            Please do not send the product back to the manufacturer. It must be
            sent to the following Address{" "}
            <address className="font-normal not-italic dark:text-slate-200">
              Wembley Park 306, NE10 6AR, London, UK.
            </address>
          </li>
          <li className="py-2">
            You will be responsible for paying for your own shipping costs for
            returning your item.
          </li>
          <li className="py-2">
            Shipping costs are non-refundable! If you receive a refund, the cost
            of return shipping will be deducted from your refund.
          </li>
          <li className="py-2">
            Depending on where you live, the time it may take for your exchanged
            product to reach you, may vary.
          </li>
          <li className="py-2">
            Please see, we cannot guarantee that we will receive your returned
            item
          </li>
        </ul>
      </div>
    </div>
  );
}
