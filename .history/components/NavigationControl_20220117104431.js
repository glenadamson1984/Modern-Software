import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const NavigationControl = () => {
  return (
    <h1 className="title">
      Read{" "}
      <Link href="/posts/first-post">
        <a>this page!</a>
      </Link>
    </h1>
  );
};

export default NavigationControl;
