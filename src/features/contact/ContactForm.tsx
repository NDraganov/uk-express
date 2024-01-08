export default function ContactForm() {
  return (
    <div className="relative w-5/6">
      <img className="h-screen" src="/images/map.jpeg" alt="Map" />
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <form>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <input type="tel" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <textarea />
          </div>
        </form>
      </div>
    </div>
  );
}
