import Image from "next/image";

const Logo = () => {
  return (
    <div className="p-1">
      <Image
        src="/images/1crop.png"
        alt="Picture of the author"
        width={144}
        height={97.5}
      />
      <div style={{fontFamily: 'Roboto, sans-serif';}}></div>
    </div>
  );
};

export default Logo;
