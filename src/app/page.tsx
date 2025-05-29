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

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click for a surprise!
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
          </a>
        </div>
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
          imageSrc="/images/sample.jpg" // Make sure this image exists in your public/images folder, or use any placeholder image URL
          imageAlt="Sample Project"
          title="Sample Project"
          tags={["UI", "React", "Next.js"]}
          description="This is a short description of the sample project. You can customize this text."
        />

        <Box
          href="/work/sample-project"
          imageSrc="/images/sample.jpg" // Make sure this image exists in your public/images folder, or use any placeholder image URL
          imageAlt="Sample Project"
          title="Sample Project"
          tags={["UI", "React", "Next.js"]}
          description="This is a short description of the sample project. You can customize this text."
        />

      </div>

      <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </div>
      <Footer />
    </div>
  );
}
