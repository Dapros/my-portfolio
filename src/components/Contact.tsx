import { useForm } from 'react-hook-form'
import { useState } from "react"
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import { userInputs } from '../types'
import Error from './Error'


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
          className="flex flex-col gap-8 w-full lg:w-2/5 backdrop:blur-2xl p-8 rounded-xl bg-2"
        >
          <ToastContainer/>
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
              placeholder="How can I tell you?"
              className="p-2 bg-theme rounded-lg outline-none"
              {...register('name', {
                required: 'please enter your name',
              })}
            />
            {errors.name && (
              <Error>{errors.name?.message}</Error>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="yemail" className="pb-2 text-xl">Your email</label>
            <input 
              type="email" 
              id="yemail"
              placeholder="What's your email"
              className="p-2 bg-transparent bg-theme rounded-lg outline-none"
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
            <label htmlFor="ymessage" className="pb-2 text-xl">Message</label>
            <textarea
              id="ymessage"
              placeholder="Write your message here..."
              className="p-2 bg-transparent bg-theme rounded-lg outline-none min-h-32 max-h-72"
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
              className="py-2 px-4 w-full font-bold border rounded-lg cursor-pointer border-gradient-1"
            >
              {loading ? 'Sending...' : 'Send Message'}
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
