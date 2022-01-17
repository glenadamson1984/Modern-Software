import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const NavigationControl = () => {
  return (
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
  );
};

export default NavigationControl;
