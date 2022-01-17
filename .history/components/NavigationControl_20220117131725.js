import react from "React";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const NavigationControl = ({ isOpen, onOpen }) => {
  return (
    <>
      <div className="flex flex-col sm:hidden">
        <div>
          <button onClick={onOpen}>
            <GiHamburgerMenu />
            <MdClose />
          </button>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="flex space-x-4">
          <h1 className="title">
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
