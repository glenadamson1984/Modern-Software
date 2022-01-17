import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-col items-start p-1 lg:items-end lg:flex-row ">
      <div className="hidden lg:block">
        <Image
          src="/images/1-only.png"
          alt="Modern Software"
          width={95}
          height={82.5}
        />
      </div>
      <div
        style={{ fontFamily: "Roboto, sans-serif", color: "#ffe1d0" }}
        className="text-3xl lg:text-6xl lg:ml-6"
      >
        Modern Software
      </div>
    </div>
  );
};

export default Logo;
