import Showcasee from "@/components/clients/ShowCASE";

export default function Home() {
  return (
    <main>
      <section className="bg-black py-10 px-9 lg:p-40">
        <h1 className="mb-5 text-white font-unisans font-bold text-5xl lg:text-9xl sm:text-8xl">
          Clients
        </h1>
        <h1 className="max-w-xl text-white  font-unisans font-none text-lg lg:text-2xl sm:text-3xl">
          We{"`"}ve partnered with forward-thinking companies, from innovative
          startups to Fortune 100 corporations.
        </h1>
        <div className="flex justify-start items-start mt-3 space-x-8 ">
          <Showcasee count={10} />
        </div>
      </section>
    </main>
  );
}
