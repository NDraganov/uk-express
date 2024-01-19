import FormButton from "../../ui/FormButton";

export default function ContactForm() {
  return (
    <div className="relative sm:w-5/6">
      <img className="h-screen" src="/images/map.jpeg" alt="Map" />
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <form className="w-96 rounded-md bg-white px-6 py-4 dark:bg-slate-800">
          <div className="py-2">
            <label
              className="text-base font-light text-black dark:text-gray-400"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="my-1 w-full rounded-md border border-slate-400 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
            />
          </div>

          <div className="py-2">
            <label
              className="text-base font-light text-black dark:text-gray-400"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="my-1 w-full rounded-md border border-slate-400 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
          </div>

          <div className="py-2">
            <label
              className="text-base font-light text-black dark:text-gray-400"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="my-1 w-full rounded-md border border-slate-400 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Your phone"
            />
          </div>

          <div className="py-2">
            <label
              className="text-base font-light text-black dark:text-gray-400"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="my-1 w-full rounded-md border border-slate-400 p-2 font-light placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:ring-cyan-500 dark:placeholder:text-gray-300 dark:focus:border-cyan-500"
              name="message"
              id="message"
              placeholder="Your message"
            />
          </div>
          <FormButton title="Send" />
        </form>
      </div>
    </div>
  );
}
