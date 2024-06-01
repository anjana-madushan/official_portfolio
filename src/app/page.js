import Image from "next/image";

const Homepage = () => {
  return <div className="flex flex-col">
    <div className="h-1/2 relative">
      <Image src='/hero.png' alt="hero image" width={500} height={500} className="object-contain" />
    </div>
  </div>;
};

export default Homepage;