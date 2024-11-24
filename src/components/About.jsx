import about from "../assets/about.jpeg"
const About = () => {
  return (
    <section className="container mx-auto mb-8" id="about">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">About Us</h2>
      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2">
        <img src={about} className="rounded-3xl lg:-rotate-3" />
        </div>
      </div>

    </section>
  )
}

export default About