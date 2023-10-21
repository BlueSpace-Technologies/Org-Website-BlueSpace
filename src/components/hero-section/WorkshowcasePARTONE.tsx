import Link from "next/link";
import Image from "next/image";

const WorkShowcase = () => {
  return (
    <section className=" px-4 sm:py-4 sm:px-4 bg-black">
      <div className="flex flex-col py-10 sm:flex-row sm:justify-evenly justify-evenly gap-8">
        <div className="relative aspect-w-16 aspect-h-9 group">
          <video
            poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
            className="object-cover object-center bg-emerald-50 w-full h-full hover:scale-105 transform transition-transform duration-300 ease-in-out group-hover:border border-white"
            autoPlay
            loop
            muted
          >
            <source
              src="https://cdn.sanity.io/files/r115idoc/production/1c651c5005c18a36ad53910194ff8cdb7fca24f7.mp4"
              type="video/mp4"
            />
          </video>
          <div className="py-6 ">
            <div className="mt-2 text-white text-2xl font-unisans">Video 2 Title</div>
            <p className="text-gray-400 font-unisans">Video 2 Description</p>
          </div>
        </div>

        {/* Video 2 */}
        <div className="relative aspect-w-16 aspect-h-9 group">
          <video
            poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
            className="object-cover object-center w-full h-full hover:scale-105 transform transition-transform duration-300 ease-in-out group-hover:border border-white"
            autoPlay
            loop
            muted
          >
            <source
              src="https://cdn.sanity.io/files/r115idoc/production/1c651c5005c18a36ad53910194ff8cdb7fca24f7.mp4"
              type="video/mp4"
            />
          </video>
          <div className="py-6 ">
            <div className="mt-2 text-white text-2xl font-unisans">Video 2 Title</div>
            <p className="text-gray-400 font-unisans">Video 2 Description</p>
          </div>
        </div>
      </div>

      {/* Video 3 */}
      <div className="flex flex-col sm:flex-row md:flex-row py-11 lg:py-20">
        <div className="w-full">
          <div className="relative aspect-w-16 aspect-h-9 group">
            <video
              poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
              className="object-cover object-center w-full h-full hover:scale-105 transform transition-transform duration-300 ease-in-out group-hover:border border-white"
              autoPlay
              loop
              muted
            >
              <source
                src="https://cdn.sanity.io/files/r115idoc/production/b93de3c461d165c7178ec3e3f7ac7fe04756fe20.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="py-6 ">
            <div className="mt-2 text-white text-2xl font-unisans">Video 2 Title</div>
            <p className="text-gray-400 font-unisans">Video 2 Description</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
