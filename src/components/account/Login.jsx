import { TiKey } from "react-icons/ti";
import { MdOutlineMail } from "react-icons/md";
import { Button } from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="flex font_home  ">
        <div className=" bg-login w-1/2 h-[100vh] bg-cover bg-no-repeat bg-center"></div>
        <div className="flex flex-col items-center mt-24 w-1/2 ">
          <h1 className="text-4xl font-semibold my-5 ">
            Welcome to
            <span className="text-blue-500 relative hover:before:absolute hover:before:bottom-0 hover:before:w-full hover:before:h-0.5 hover:before:bg-black ">
              <Link to="/">HOTELLO</Link>
            </span>
          </h1>
          <p className="text-xl text-gray-500/90 w-[80%] text-center my-5">
            We make it easy for everyone to book a hotel room
          </p>

          <div>
            <form className="my-5 w-[500px] ml-20" action="/" method="post">
              <div className="flex items-center ">
                <span className=" absolute ml-3 text-2xl  text-gray-500/90">
                  <MdOutlineMail />
                </span>
                <input
                  className=" p-5   px-[10%] w-[80%] border-2 border-gray-500/40 rounded-t-lg "
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                  required
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                />
              </div>
              <div className="flex items-center relative">
                <span className="absolute ml-3 text-2xl -rotate-90 text-gray-500/90">
                  <TiKey />
                </span>
                <input
                  className="p-5  px-[10%]  w-[80%] border-2 border-gray-500/40 border-t-0 rounded-b-lg"
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                  required
                  minLength={8}
                />
                <br />
              </div>
              <div className="mt-5 flex justify-end w-[80%]">
                <span className=" capitalize text-gray-400/80">
                  <a href="#">forgot password?</a>
                </span>
              </div>
              <div className="flex justify-between w-[80%] mt-6">
                <Button
                  className=" bg-gradient-to-l from-blue-300 to-blue-600 w-24"
                  type="submit"
                >
                  Login
                </Button>
                <Button className="text-blue-600 bg-slate-50 shadow-sm shadow-gray-300 p-5">
                  creat profile
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
