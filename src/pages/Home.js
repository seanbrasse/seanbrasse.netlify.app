import React from "react";
import { NavLink } from "react-router-dom";
import image from "../images/nyc1.jpg";
import Sean from "../images/Sean.jpg";

export default function Home() {
  return (
    <main>
      {/* <img
          src={image}
          alt="NYC Background"
          className="absolute flex-grow min-w-full min-h-screen md:object-cover bg-blue-500"
        /> */}
      <div
        className="absolute min-w-full min-h-full bg-center
        bg-cover bg-local"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <section className="relative flex justify-center md:min-h-full pt-16 lg:pt-48 hover:text-blue-400">
          <NavLink to="/about">
            <div className="bg-gray-500 p-5 bg-opacity-80 rounded-lg hover:bg-gray-600 hover:bg-opacity-80 ">
              <div className="rounded flex justify-center">
                <img
                  src={Sean}
                  className="object-cover border-2 border-gray-600 h-96 w-96 bg-auto rounded-full"
                />
              </div>
              <div>
                <h1 className="text-9xl text-white flex justify-center font-bold cursive rounded-full leading-none lg:leading-snug ">
                  Hi, I'm Sean
                </h1>
              </div>
            </div>
          </NavLink>
        </section>
      </div>
    </main>
  );
}
