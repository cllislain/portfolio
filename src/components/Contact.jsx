import { useState, useRef } from "react"
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

//template_ht3yyyf
//service_0vy7juo
//YWR2s89V-VzmsP43T

const Contact = () => {

  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]: [value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
    "service_0vy7juo", 
    "template_ht3yyyf", 
    {
      from_name: form.name,
      to_name: "Claze Lislain",
      from_email: form.email,
      to_email: "clazelislaincepe@gmail.com",
      message: form.message
    },
    'YWR2s89V-VzmsP43T'
    )
    .then(() => {
      setLoading(false);
      alert('I will get back to you soon.');
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong, please try again.');
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse  gap-10 overflow-hidden">
      <motion.div
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      variants={slideIn('left', 'tween', 0.2, 1)}>
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        
        <form
        className="mt-12 flex flex-col gap-8"
        ref={formRef}
        onSubmit={handleSubmit}
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
            className="bg-tertiary rounded-full px-6 py-4 placeholder:text-secondary text-white border-none outline-none font-medium"
            type="text" 
            name="name" 
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"/>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input 
            className="bg-tertiary rounded-full px-6 py-4 placeholder:text-secondary text-white border-none outline-none font-medium"
            type="text" 
            name="email" 
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"/>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
            className="bg-tertiary rounded-lg px-6 py-4 placeholder:text-secondary text-white border-none outline-none font-medium"
            name="message" 
            value={form.message}
            onChange={handleChange}
            placeholder="How can I assist you?"
            rows='7'/>
          </label>
          <button
          className="bg-tertiary active:bg-violet-900 hover:bg-violet-950 py-3 px-8 outline-none w-fit rounded-full text-white font-bold shadow-md shadow-primary"
          type="submit">
            {loading ? " . . . " : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      variants={slideIn('right', 'tween', 0.2, 1)}>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")