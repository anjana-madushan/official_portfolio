import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold ">Unlocking Innovation: Explore My Portfolio!</h1>
        <p className="md:text-xl">Welcome to my portfolio! Here, creativity meets innovation. Explore my projects,
          designs, and ideas, crafted with passion and precision. Let's connect and collaborate to bring your visions to life.</p>
        <div className="w-full flex gap-8">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Projects</button>
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Contact Me</button>
        </div>
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src='/profile_animate.png' alt="home profile" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Homepage;