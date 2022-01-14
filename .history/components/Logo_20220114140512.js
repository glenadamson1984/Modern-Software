import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-8 h-8">
      <Image src="/images/1crop.png" alt="Picture of the author" />
    </div>
  );
};

export default Logo;
