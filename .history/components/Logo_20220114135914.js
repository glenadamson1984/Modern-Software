import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/1.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
};

export default Logo;
