import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Box from "./components/Box";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-35 mb-35 my-10 p-2">
        <h1 className="text-4xl font-bold tracking-[-.01em]">
          Hi, I'm
        </h1>
        <h1 className="text-4xl font-bold tracking-[-.01em] flex items-center gap-2">
          Tiffany (Shihan) Gao!
          <span className="inline-block animate-bounce" role="img" aria-label="star">☆</span>
        </h1>
        <p className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          I'm an aspiring designer & developer, currently studying at Cornell University.
        </p>
      </main>

      <h1 className="text-2xl font-bold tracking-[-.01em]">
        Featured Works
      </h1>
      <div className="w-full px-8">
        <div className="h-[1px] bg-white mt-2 mb-4"></div>
      </div>

      <div className="flex gap-4 items-center flex-col sm:flex-row m-10">
        <Box
          href="/work/sample-project"
          imageSrc="/images/ssb-cover.png" 
          title="Sweet, Sweet Betrayal"
          tags={["Game Design", "UX/UI", "Animation"]}
          description="Sabotage. Race. Win. In this adventurous party platformer, the jungle is your playground!"
        />

        <Box
          href="/work/sample-project"
          imageSrc="/images/rabbeat-cover.png" 
          imageAlt="RabBeat"
          title="RabBeat"
          tags={["Game Design", "UX/UI", "Animation"]}
          description="You must use your musical powers to rescue your friends from an evil DJ scientist!"
        />
      </div>

      <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </div>
      <Footer />
    </div>
  );
}
