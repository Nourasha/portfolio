/* eslint-disable jsx-a11y/img-redundant-alt */
import Title from "./Title";
import MyImage from '../images/nourspic3.jpg';

export default function HeaderContent() {
  return (
    <>
    <span className="size text-6xl text-emerald-600 font-bold cursive mx-5">
      <Title title={"Hello world. I'm Nour"} />
    </span>
    <img src={MyImage} alt="Nour's picture" className="header-img w-60 mx-1 py-2 rounded-full" />
    </>
  )
  }

