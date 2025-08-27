import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Box from "./components/Box";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex flex-col gap-[32px] items-center sm:items-start pt-6">
        <h1 className="text-4xl font-bold tracking-[-.01em]">
          Hi, I'm
        </h1>
        <h1 className="text-4xl font-bold tracking-[-.01em] flex items-center gap-2">
          Tiffany (Shihan) Gao!
          <span
            className="inline-block animate-bounce ml-2"
            role="img"
            aria-label="star"
          >
            ☆
          </span>
        </h1>
        <p className="text-center sm:text-left max-w-xl ">
          An aspiring designer & developer, currently studying Information Science at Cornell.
        </p>
      </main>

      <Footer />
    </div>
  );
}
