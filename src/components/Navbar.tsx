import Link from "next/link";
import React from "react";

const Navbar = () => {
  const CustomLink = ({
    href,
    title,
    className = "",
  }: {
    href: string;
    title: string;
    className: string;
  }) => {
    return (
      <Link
        href={href}
        className={`${className} relative group selection:select-none `}
      >
        {title}
        <span className="absolute bottom-0 left-0 h-[2px] inline-block w-0 bg-dark group-hover:w-full transition-[width] ease duration-300 group-focus:hidden">
          &nbsp;
        </span>
      </Link>
    );
  };
  return (
    <header className="flex items-center justify-center sticky top-0 bg-gradient-to-b from-light z-10 h-[7.5rem] py-8">
      <div className="flex items-center justify-between w-full h-14 px-7 mx-16">
        <nav className="flex justify-center items-center h-14">
          <Link
            href={"/"}
            className="flex justify-center items-center h-14 w-14"
          >
            Logo
          </Link>
        </nav>
        <div className="flex items-center h-14 gap-x-9">
          <nav className="flex items-center h-8 gap-x-5">
            <CustomLink
              href="/#expertise"
              title="Expertise"
              className="font-medium text-lg hover:text-gray-text"
            />
            <CustomLink
              href="/#projects"
              title="Projects"
              className="font-medium text-lg hover:text-gray-text"
            />
            <CustomLink
              href="/#testimonials"
              title="Testimonials"
              className="font-medium text-lg hover:text-gray-text"
            />
            <CustomLink
              href="/about"
              title="About"
              className="font-medium text-lg hover:text-gray-text"
            />
          </nav>
          <nav>
            <Link
              href={"/contact"}
              className="bg-dark text-light-gray text-lg px-7 py-[.95rem] border-2 border-dark hover:bg-light-gray hover:text-dark transition-all duration-300"
            >
              Let&#10076;s talk
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
