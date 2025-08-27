import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="flex flex-col gap-8 row-start-2 items-center w-full px-4 sm:px-8 pt-10">
        <h1 className="text-2xl font-bold tracking-[-.01em] text-center w-full">
          About
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl mx-auto gap-6 md:gap-12">
          {/* Profile picture */}
          <figure>
            <img
              className="pfp w-[270px] h-[340px]"
              src="/images/profile.png"
              alt="Profile"
            />
          </figure>

          {/* Intro text */}
          <div className="intro max-w-xl flex flex-col justify-center">
            <h2 className="mb-6">Hi again!</h2>
            <p className="mb-6">
              I'm Tiffany, or Shihan, a senior at Cornell University studying
              Information Science (UX & Data Science).
            </p>
            <p className="mb-6">
              I'm passionate about using tech to craft meaningful online experiences, and I love exploring the intersection of{" "}
              <strong>design</strong>, <strong>tech</strong>, and{" "}
              <strong>human behavior.</strong>
            </p>
            <p className="mb-6">
              I've had the pleasure of working with organizations like the {" "}
              <strong>New York City Life Insurance Company</strong>,{" "}
              <strong>New York City Economic Development Corporation</strong>,{" "} and the 
              <strong> Bronx Cooperative Development Initiative</strong>.
            </p>
            <p>
              If you're interested in web development, data science, game development, or design, let's connect and explore ways we can collaborate!
            </p>
          </div>
        </div>

        {/* Cat image */}
        <div className="flex justify-center w-full">
          <img
            className="wiggle mb-10 w-[220px] max-w-full h-auto"
            src="/images/cat.png"
            alt="Cat"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
