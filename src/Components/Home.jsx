import React from "react";
import img from "./image/homeImage.jpeg";
import "./Component.css"
function Home() {
  return (
    <section className="p-6">
      <div className="gap-20 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-4 py-10">
            <p className="flex gap-2 items-center">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <p className="text-xl">Trusted by over 4,332 students</p>
            </p>
          <h2 className="mb-4 text-6xl tracking-tight">
            Learn Design with Nia Matos
          </h2>
          <p className="mb-4 leading-7">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute w-5 h-5 right-2.5 text-slate-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="w-full bg-transparent placeholder:text-slate-400 search-field"
                placeholder="Search Course Name"
              />
            </div>
            <div className="mt-4">
            <p>Sponsored by:</p>
        </div>
          </div>
        </div>
        <div className="grid grid-cols gap-4 mt-8">
          <img className="w-[70%] rounded-lg" src={img} />
        </div>
      </div>
    </section>
  );
}

export default Home;
