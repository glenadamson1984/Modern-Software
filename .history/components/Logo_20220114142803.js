import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-col items-end p-1 lg:flex-row ">
      <Image
        src="/images/1crop.png"
        alt="Picture of the author"
        width={144}
        height={97.5}
      />
      <div style={{ fontFamily: "Roboto, sans-serif" }} className="text-6xl">
        The modern approach
      </div>
    </div>
  );
};

export default Logo;
