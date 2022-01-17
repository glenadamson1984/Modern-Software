import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const NavigationControl = ({ isOpen, onOpen }) => {
  return (
    <>
      <div className="flex flex-col sm:hidden">
        <div>
          <button onClick={onOpen}>
            {isOpen ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="flex space-x-4">
          <h1 className="title :hover:underline">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </h1>
          <h1 className="title">
            <Link href="/about">
              <a>About</a>
            </Link>
          </h1>
          <h1 className="title">
            <Link href="/contactus">
              <a>Contact us</a>
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default NavigationControl;
