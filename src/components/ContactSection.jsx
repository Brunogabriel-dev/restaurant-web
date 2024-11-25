import { CONTACT } from "../constants"

const ContactSection = () => {
  return (
    <section className="container mx-auto py-16 " id="contact">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Contact Us</h2>
      <div className="text-neutral-400">
        {CONTACT.map((detail) => (
          <p key={detail.key}></p>
        ))}
      </div>
    </section>
  )
}

export default ContactSection