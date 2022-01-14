import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/1crop.png"
      alt="Picture of the author"
      width={577}
      height={390}
    />
  );
};

export default Logo;
