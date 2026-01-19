import { useForm } from 'react-hook-form'
import { useState } from "react"
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import { userInputs } from '../types'
import Error from '../components/Error'


export default function Contact() {

  // const formRef = useRef<HTMLFormElement>(null)

  const { register, handleSubmit, formState: {errors}, reset } = useForm<userInputs>()

  const [loading, setLoading] = useState(false)

  const userData = ( data : userInputs ) => {
    setLoading(true)

    emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE, 
      {
        from_name: data.name,
        to_name: 'Sergio Romero | Dapros',
        from_email: data.email,
        to_email: 'sergiodrp70@gmail.com',
        message: data.message
      },
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false)
      toast('Thank you. I will get back to you as soon as possible.', {
        type: 'success',
        className: 'toasty-custom'
      })

      reset()
    }, (error) => {
      setLoading(false)
      console.log(error)
      toast('Something went wrong...', {
        type: 'error',
        className: 'toasty-custom'
      })
    })
  }

  return (
    <section className="mb-10 px-4 scroll-mt-24" id="contact">
      <div className="flex flex-col items-center justify-around lg:flex-row">
        <form
          noValidate
          onSubmit={handleSubmit(userData)}
          className="flex flex-col bg-surface border border-primary/30 gap-8 w-full lg:w-9/12 backdrop:blur-2xl p-8 rounded-xl animate-shadow-orbit-2"
        >
          <ToastContainer/>
          <div>
            <h3 className="uppercase font-bold font-body text-sm lg:text-lg">Let's talk</h3>
            <h1 className="font-extrabold font-display text-3xl md:text-4xl lg:text-6xl text-primary pb-1">Contact.</h1>
            <hr className="h-1 my-2 bg-accent border-none w-28 rounded-xl" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="yname" className="pb-2 text-xl font-body">Your name</label>
            <input 
              type="text" 
              id="yname"
              placeholder="How can I tell you?"
              className="p-2 bg-background rounded-lg outline-none"
              {...register('name', {
                required: 'please enter your name',
              })}
            />
            {errors.name && (
              <Error>{errors.name?.message}</Error>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="yemail" className="pb-2 text-xl font-body">Your email</label>
            <input 
              type="email" 
              id="yemail"
              placeholder="What's your email"
              className="p-2 bg-background rounded-lg outline-none"
              {...register('email', {
                required: 'please enter your email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email'
                }
              })}
            />
            {errors.email && (
              <Error>{errors.email?.message}</Error>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="ymessage" className="pb-2 text-xl font-body">Message</label>
            <textarea
              id="ymessage"
              placeholder="Write your message here..."
              className="p-2 bg-background rounded-lg outline-none min-h-32 max-h-72"
              {...register('message', {
                required: 'please write me something'
              })}
            ></textarea>
            {errors.message && (
              <Error>{errors.message?.message}</Error>
            )}
          </div>

          <div className="">
            <button
              type="submit"
              className="py-2 px-4 w-full font-bold border hover:text-primary transition-colors duration-300 rounded-lg cursor-pointer"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          
        </form>

        <div className='w-full relative -z-10 overflow-hidden'>
          <div className="nebula-bg-small" />
          <img 
            src="/assets/Sergio-Contact.png"
            className="mx-auto mt-10 max-w-11/12"
          />
        </div>
      </div>
    </section>
  )
}
