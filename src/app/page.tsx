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
          <span className="inline-block animate-bounce ml-2" role="img" aria-label="star">☆</span>
        </h1>
        <p className="text-center sm:text-left">
          An aspiring designer & developer, currently studying Information Science at Cornell.
        </p>
      </main>

      <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </div>
      <Footer />
    </div>
  );
}
