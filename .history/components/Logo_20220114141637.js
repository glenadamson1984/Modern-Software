import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex p-1">
      <Image
        src="/images/1crop.png"
        alt="Picture of the author"
        width={144}
        height={97.5}
      />
      <div
        style={{ fontFamily: "Roboto, sans-serif" }}
        className="items-center justify-center text-6xl"
      >
        The modern approach
      </div>
    </div>
  );
};

export default Logo;
