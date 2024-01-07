import ScrollCarousel from "scroll-carousel-react";
import { LiaBathSolid, LiaBedSolid } from "react-icons/lia";
import { Button } from "@material-tailwind/react";
import React from "react";

const applicants = [
  {
    title: "waw is incroyable hotrl the best in maroc",
    img: require("./img/profile2.jpg"),
    id: 0,
  },
  {
    title: "waw is incroyable hotrl the best in maroc",
    img: require("./img/profile3.jpg"),
    id: 1,
  },
  {
    title: "waw is incroyable hotrl the best in maroc",
    img: require("./img/profile4.jpg"),
    id: 2,
  },
  {
    title: "waw is incroyable hotrl the best in maroc",
    img: require("./img/profile5.jpg"),
    id: 3,
  },
];
export default function Clientsaye() {
  return (
    <div className="mt-20 min-h-[80vh]  font_home rounded-2xl ">
      <div className="mt-10">
        <h1 className=" mb-16 pt-10 capitalize text-2xl font-bold text-center">

          what our clients say
        </h1>

        <ScrollCarousel
          autoplay
          speed={1}
          margin={300}

        >
          {applicants.map((applicant) => (
            <div
              key={applicant.id}
              className="   p-10 my-5 w-[350px] h-[320px] rounded-2xl bg-white shadow-md shadow-gray-500 border-2 border-t-gray-200  "
            >
              <img
                className=" mx-auto w-[100px] h-[100px] rounded-full shadow-gray-500 shadow-sm"
                src={applicant.img}
              />

              <div className="p-2  mt-9 max-w-[70%] mx-auto ">
                <p className="text-black text-center  break-all text-lg ">
                  {applicant.title}
                </p>
              </div>
            </div>
          ))}
        </ScrollCarousel>
      </div>
    </div>
  );
}
