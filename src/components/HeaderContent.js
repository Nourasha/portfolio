import { useEffect, useState } from "react";
import sanityClient from "../lib/client";
import Title from "./Title";

export default function HeaderContent() {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "header"][0]{
          headerImage{
            asset->{
              url
            }
          },
          headerContent
        }`
      )
      .then((data) => setHeaderData(data))
      .catch(console.error);
  }, []);

  if (!headerData) return null;

  return (
    <div className="text-center h-64 md:flex md:flex-col md:justify-around bg-zinc-900 md:items-center md:justify-items-end md:h-screen overflow-hidden">

      <img
        src={headerData.headerImage?.asset?.url}
        alt="Header"
        className="invisible md:visible md:header-img object-cover md: w-64"
      />

      <span className="size text-l md:text-xl text-white font-bold gamja-flower-regular mx-5">
        <Title title={headerData.headerContent} />
      </span>
    </div>
  );
}
