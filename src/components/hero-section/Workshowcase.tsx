import Link from "next/link";
import Image from "next/image";

const WorkShowcase = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Work Showcase</h2>
      <div className="flex flex-wrap -mx-4">
        {/* Row 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
          {/* First Showcase */}
         
            <a>
              <div className="relative group bg-gray-200 p-4 rounded-lg">
                <video
                  poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
                  className="transform scale-80 hover:scale-100 transition-transform duration-500 ease-in-out"
                  autoPlay
                  loop
                  muted
                >
                  <source src="hero.mp4" type="video/mp4" />
                </video>
              </div>
            </a>
          <h3 className="text-lg font-bold mb-2">Project 1</h3>
          <p className="text-gray-600">Description for Project 1.</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
          {/* Second Showcase */}
        
            <a>
              <div className="relative group bg-gray-200 p-4 rounded-lg">
              <video
            poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
            className="transform scale-80 hover:scale-100 transition-transform duration-500 ease-in-out"
            autoPlay
            loop
            muted
          >
            <source src="hero.mp4" type="video/mp4" />
          </video>
                
              </div>
            </a>
      
          <h3 className="text-lg font-bold mb-2">Project 2</h3>
          <p className="text-gray-600">Description for Project 2.</p>
        </div>

        {/* Row 2 */}
        <div className="w-full lg:w-2/3 xl:w-3/4 px-4 mb-4">
          {/* Larger Showcase */}
         
            <a>
              <div className="relative group bg-gray-200 p-4 rounded-lg">
              <video
            poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
            className="transform scale-80 hover:scale-100 transition-transform duration-500 ease-in-out"
            autoPlay
            loop
            muted
          >
            <source src="hero.mp4" type="video/mp4" />
          </video>
               
              </div>
            </a>
        
          <h3 className="text-xl font-bold mb-2">Large Project</h3>
          <p className="text-gray-600">Description for Large Project.</p>
        </div>

        {/* Row 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
          {/* Third Showcase */}

            <a>
              <div className="relative group bg-gray-200 p-4 rounded-lg">
              <video
            poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
            className="transform scale-80 hover:scale-100 transition-transform duration-500 ease-in-out"
            autoPlay
            loop
            muted
          >
            <source src="hero.mp4" type="video/mp4" />
          </video>
               
              </div>
            </a>
   
          <h3 className="text-lg font-bold mb-2">Project 3</h3>
          <p className="text-gray-600">Description for Project 3.</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
          {/* Fourth Showcase */}
       
            <a>
              <div className="relative group bg-gray-200 p-4 rounded-lg">
              <video
            poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
            className="transform scale-80 hover:scale-100 transition-transform duration-500 ease-in-out"
            autoPlay
            loop
            muted
          >
            <source src="hero.mp4" type="video/mp4" />
          </video>
               
              </div>
            </a>
      
          <h3 className="text-lg font-bold mb-2">Project 4</h3>
          <p className="text-gray-600">Description for Project 4.</p>
        </div>

        {/* Row 4 */}
        <div className="w-full lg:w-2/3 xl:w-3/4 px-4 mb-4">
          {/* Larger Showcase */}
        
            <a>
              <div className="relative group bg-gray-200 p-4 rounded-lg">
              <video
            poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
            className="transform scale-80 hover:scale-100 transition-transform duration-500 ease-in-out"
            autoPlay
            loop
            muted
          >
            <source src="hero.mp4" type="video/mp4" />
          </video>
               
              </div>
            </a>
    
          <h3 className="text-xl font-bold mb-2">Another Large Project</h3>
          <p className="text-gray-600">
            Description for Another Large Project.
          </p>
        </div>

        {/* Add more rows and showcases as needed */}
      </div>
    </section>
  );
};

export default WorkShowcase;
