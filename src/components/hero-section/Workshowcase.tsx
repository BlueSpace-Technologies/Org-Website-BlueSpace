import Link from "next/link";
import Image from "next/image";

const WorkShowcase = () => {
  return (
    <section className="py-8 px-4 bg-black">
      <div className="flex flex-wrap -mx-4">
        {/* Big Project */}
        <div className="w-full lg:w-2/3 px-4 mb-4 order-2 lg:order-1 ">
          <div className="rounded-lg bg-white overflow-hidden shadow-lg">
            <a>
              <video
                poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
                className="w-full hover:scale-105 transform transition-transform duration-300 ease-in-out"
                autoPlay
                loop
                muted
              >
                <source src="hero.mp4" type="video/mp4" />
              </video>
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Big Project</h3>
              <p className="text-gray-600">Description for Big Project.</p>
            </div>
          </div>
        </div>

        {/* Medium Project */}
        <div className="w-full lg:w-1/3 px-4 mb-4 order-1 lg:order-2">
          <div className="rounded-lg bg-white overflow-hidden shadow-lg">
            <a>
              <video
                poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
                className="w-full hover:scale-105 transform transition-transform duration-300 ease-in-out"
                autoPlay
                loop
                muted
              >
                <source src="hero.mp4" type="video/mp4" />
              </video>
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Medium Project</h3>
              <p className="text-gray-600">Description for Medium Project.</p>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="w-full lg:w-1/3 px-4 mb-4">
          {/* Third Showcase */}
          <div className="rounded-lg bg-white overflow-hidden shadow-lg">
            <a>
              <video
                poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
                className="w-full hover:scale-105 transform transition-transform duration-300 ease-in-out"
                autoPlay
                loop
                muted
              >
                <source src="hero.mp4" type="video/mp4" />
              </video>
            </a>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Project 3</h3>
              <p className="text-gray-600">Description for Project 3.</p>
            </div>
          </div>
        </div>

        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default WorkShowcase;
