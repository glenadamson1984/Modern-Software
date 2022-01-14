import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/images/1crop.png"
        alt="Picture of the author"
        layout={"fill"}
      />
    </div>
  );
};

export default Logo;
