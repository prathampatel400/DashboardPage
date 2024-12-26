import React from "react";
import img from "./image/Logo.jpeg"
function Header() {
  return (
    <header className="">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex gap-2 items-center">
            <img
              className="h-8 w-auto"
              src={img}
              alt
            />
            <p>Landguru</p>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              className="flex items-center "
              aria-expanded="false"
            >
              Home
            </button>
          </div>
          <a href="#" className="">
            Adversite
          </a>
          <a href="#" className="">
            Support
          </a>
          <a href="#" className="">
            Contact
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-mediumfocus:outline-none bg-orange border-1 border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 bg-orange-500 text-white dark:text-white-400 dark:hover:text-white dark:hover:bg-gray-700">Try for Free</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
