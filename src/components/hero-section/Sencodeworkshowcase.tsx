import Link from "next/link";
import Image from "next/image";

const WorkShowcases = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="flex flex-col lg:flex-row sm:flex md:flex-row xl:flex-row  justify-evenly">
        <div>
          <video
            poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
            className="hover:scale-105 py-28 transform transition-transform duration-300 ease-in-out"
            autoPlay
            loop
            muted
          >
            <source
              src="https://cdn.sanity.io/files/r115idoc/production/1c651c5005c18a36ad53910194ff8cdb7fca24f7.mp4"
              type="video/mp4"
            />
          </video>
          <h1 className=" text-white  font-unisans text-2xl ">CASE 1</h1>
          <p className="text-white font-unisans">
            hello donw wrojfdfsdfsdffsdfsdfdsfsdfsd
          </p>
          <Link href={""} className=" text-white text-1xl font-unisans">
            View case study
          </Link>
        </div>
        <div>
          <video
            poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
            className="w-full  hover:scale-105 transform transition-transform duration-300 ease-in-out"
            autoPlay
            loop
            muted
          >
            <source
              src="https://cdn.sanity.io/files/r115idoc/production/1c651c5005c18a36ad53910194ff8cdb7fca24f7.mp4"
              type="video/mp4"
            />
          </video>
          <h1 className=" text-white font-unisans text-2xl ">CASE 1</h1>
          <p className="text-white font-unisans">
            hello donw wrojfdfsdfsdffsdfsdfdsfsdfsd
          </p>
          <Link href={""} className=" text-white text-1xl font-unisans">
            View case study
          </Link>
        </div>
      </div>
      <div className="flex py-52 flex-row lg:flex lg:p-20 sm:flex md:flex">
        <div>
          <video
            poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
            className="hover:scale-105 transform transition-transform duration-300 ease-in-out"
            autoPlay
            loop
            muted
          >
            <source
              src="https://cdn.sanity.io/files/r115idoc/production/b93de3c461d165c7178ec3e3f7ac7fe04756fe20.mp4"
              type="video/mp4"
            />
          </video>
          <h1 className=" text-white py-6 font-unisans text-2xl ">CASE 1</h1>
          <p className="text-white font-unisans">
            hello donw wrojfdfsdfsdffsdfsdfdsfsdfsd
          </p>
          <Link href={""} className=" text-white text-1xl font-unisans">
            View case study
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcases;
