import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/1crop.png"
      alt="Picture of the author"
      layout={"fill"}
    />
  );
};

export default Logo;
