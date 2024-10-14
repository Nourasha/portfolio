/* eslint-disable jsx-a11y/img-redundant-alt */
import Title from "./Title";
import MyImage from '../images/Bilde2.png';

export default function HeaderContent() {
  return (
    <>
    <span className="size text-6xl text-white font-bold cursive mx-5">
      <Title title={"Hello world. I'm Nour"} />
    </span>
    <img src={MyImage} alt="Nour's picture" className="header-img rounded-sm object-cover" />
    </>
  )
  }

