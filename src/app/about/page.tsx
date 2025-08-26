import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start pt-10 w-full">
        <h1 className="text-2xl font-bold tracking-[-.01em] text-center w-full">
          About
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl mx-auto">
          <figure className="wiggle flex-shrink-0 mr-8">
            <img
              className="pfp w-88 h-90 object-cover border-4 border-gray-200"
              src="/images/profile.png"
              alt="Profile"
            />
          </figure>
          <div className="intro max-w-xl flex flex-col justify-center">
            <h2 className="mb-2">Hi again!</h2>
            <p className="mb-2">
              I'm Tiffany, or Shihan, a senior at Cornell University majoring in <strong>Information Science (UX and Data Science).</strong>
            </p>
            <p className="mb-2">
              I'm passionate about using tech to craft meaningful online experiences, and I love exploring the intersection of <strong>design</strong>, <strong>technology</strong>, and <strong>human behavior.</strong>
            </p>
            <p className="mb-2">
              I've had the pleasure of working with organizations like the <strong>New York City Economic Development Corporation (NYCEDC)</strong>, <strong>Bronx Cooperative Development Initiative (BCDI)</strong>, and the <strong>New York City Civic Engagement Commission at Cornell Tech (NYCCEC)</strong>.
            </p>
            <p>
              If you're interested in web development, data science, game development, or design, I'd love to connect and explore ways we can collaborate!
            </p>
          </div>
        </div>
        <picture>
          <img className="cat w-80 mx-auto" src="/images/cat.png" alt="Cat" />
        </picture>

        <Footer />
      </main>
    </div>
  );
}