import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { FormEvent, ChangeEvent } from "react"



export default  function Contact() {

  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value})
  }


  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_nr0bh0h', 
      'template_4xi3zaf',
      {
        from_name: form.name,
        to_name: 'Sergio',
        from_email: form.email,
        to_email: 'sergiodrp70@gmail.com',
        message: form.message,
      },
      'p2vWn7fzXRvAOZlBw'
    )
    .then(() => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert('Something went wrong.')
    })
  }

  
  return (
    <>
      <section id="contact">
        <div className="flex flex-col items-center justify-around lg:flex-row">
          <form action="" 
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 text-white w-full lg:w-2/5 bg-[#313134] p-8 rounded-md">
              
            <div>
              <h2 className="flex justify-start pb-5 text-2xl font-bold md:text-4xl">Contact me</h2>
              <hr className="h-1 mb-5 bg-white border-none w-28 rounded-xl" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="yname" className="pb-2 text-xl">Your name</label>
              <input 
                type="text" 
                id="yname"
                name="name"
                value={form.name} 
                onChange={handleChange}
                placeholder="How can I tell you?"
                className="p-2 bg-transparent border border-white rounded-md outline-none"
                />
              </div>
                
              <div className="flex flex-col">
                <label htmlFor="yemail" className="pb-2 text-xl">Your email</label>
                <input 
                type="email" 
                id="yemail"
                name="email" 
                value={form.email} 
                onChange={handleChange}
                placeholder="What’s your email?"
                className="p-2 bg-transparent border border-white rounded-md outline-none"
                />
              </div>
                
              <div className="flex flex-col">
                <label htmlFor="ymessage" className="pb-2 text-xl">Message</label>
                <textarea 
                name="message"
                id="ymessage"
                value={form.message} 
                onChange={handleChange}
                placeholder="Write your message here..."
                className="p-2 bg-transparent border border-white rounded-md outline-none min-h-32"
                ></textarea>
              </div>
                
              <button 
                type="submit"
                className="py-2 font-bold border border-white rounded-md"  
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div>
              <img src="../../public/Character3dElement.png"
                className="hidden w-3/4 mx-auto lg:block"
              />
            </div>

            </div>
          </section>
    </>
  )
}
