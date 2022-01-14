import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/1.png"
      alt="Picture of the author"
      width={200}
      height={200}
    />
  );
};

export default Logo;
