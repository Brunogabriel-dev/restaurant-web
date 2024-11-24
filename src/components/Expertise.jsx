import { CUSINES } from "../constants"

const Expertise = () => {
  return (
    <section id="expertise">
      <h2 className="my-8 text-center text-3xl tracking-tighter">Our Expertise</h2>
      <div className="container mx-auto px-4">
        {CUSINES.map((cusine, index) => (
          <div key={index} className="flex items-center border-b-4 border-dotted border-neutral-700 " ></div>
        ))}
      </div>
    </section>
  )
}

export default Expertise