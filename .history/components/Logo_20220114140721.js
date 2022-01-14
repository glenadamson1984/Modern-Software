import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/1crop.png"
      alt="Picture of the author"
      width={144}
      height={97.5}
    />
  );
};

export default Logo;
