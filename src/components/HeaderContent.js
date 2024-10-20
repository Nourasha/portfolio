/* eslint-disable jsx-a11y/img-redundant-alt */
import Title from "./Title";
import MyImage from '../images/Bilde2.png';

export default function HeaderContent() {
  return (
    <div className="flex flex-col justify-center md:flex md:flex-row bg-zinc-900 md:items-center md:justify-items-end h-screen overflow-hidden">
    <span className="size text-xl md:text-6xl text-white font-bold delius-regular mx-5">
      <Title title={"Hello world. I'm Nour"} />
    </span>
    <img src={MyImage} alt="Nour's picture" className="invisible md:visible md:header-img md:rounded-sm object-cover" />
    </div>
  )
  }

