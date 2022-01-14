import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/1crop.png"
      alt="Picture of the author"
      width={200}
      height={"auto"}
    />
  );
};

export default Logo;
