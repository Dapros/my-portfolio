
export default function Contact() {
  return (
    <section className="mb-10 px-4 scroll-mt-24" id="contact">
      <div className="flex flex-col items-center justify-around lg:flex-row">
        <form
          className="flex flex-col gap-8 w-full lg:w-2/5 backdrop:blur-2xl p-8 rounded-xl bg-2"
        >
          <div>
            <h3 className="uppercase font-bold text-sm lg:text-lg">Let's talk</h3>
            <h1 className="font-extrabold text-3xl md:text-4xl lg:text-6xl text-secondary pb-1">Contact.</h1>
            <hr className="h-1 my-2 bg-primary border-none w-28 rounded-xl" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="yname" className="pb-2 text-xl">Your name</label>
            <input 
              type="text" 
              id="yname"
              name="name"
              placeholder="How can I tell you?"
              className="p-2 bg-theme rounded-lg outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="yemail" className="pb-2 text-xl">Your email</label>
            <input 
              type="email" 
              id="yemail"
              name="email"
              placeholder="What's your email"
              className="p-2 bg-transparent bg-theme rounded-lg outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="ymessage" className="pb-2 text-xl">Message</label>
            <textarea 
              name="message" 
              id="ymessage"
              placeholder="Write your message here..."
              className="p-2 bg-transparent bg-theme rounded-lg outline-none min-h-32 max-h-72"
            ></textarea>
          </div>

          <div className="">
            <button
              type="submit"
              className="py-2 px-4 w-full font-bold border rounded-lg cursor-pointer border-gradient-1"
            >
              Send Message
            </button>
          </div>
          
        </form>

        <div>
          <img 
            src="/public/Character3dElement.png"
            className="hidden w-3/4 mx-auto lg:block"
          />
        </div>
      </div>
    </section>
  )
}
