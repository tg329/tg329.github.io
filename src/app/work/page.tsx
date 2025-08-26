import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Box from "../components/Box";

export default function Work() {
    return (
        <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start pt-10">
                <h1 className="text-2xl font-bold tracking-[-.01em]">
                    Work
                </h1>
            </main>

            <div className="flex gap-4 items-center flex-col sm:flex-row mb-5">
                <Box
                    href="https://studentoutcomes.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    imageSrc="/images/outcomes.png"
                    title="Student Outcomes Visualization"
                    tags={["Data Visualization", "D3.js", "Web Design"]}
                    description="Visualizing job and wage outcomes based on student majors. Dataset powered by the NY Federal Reserve."
                />

                <Box
                    href="https://barhop.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    imageSrc="/images/barhop.png"
                    imageAlt="Barhop"
                    title="Boston Barhop Visualization"
                    tags={["Data Visualization", "D3.js", "Web Design"]}
                    description="Visualizing a barhopping planner for Boston restaurants, featuring a map API and filters. Dataset powered by Yelp."
                />
            </div>

            <div className="flex gap-4 items-center flex-col sm:flex-row mb-5">
                <Box
                    href="https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/sweetsweetbetrayal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    imageSrc="/images/ssb-cover.png"
                    title="Sweet, Sweet Betrayal"
                    tags={["Game Design", "UX/UI", "Animation"]}
                    description="Sabotage. Race. Win. In this adventurous party platformer, the jungle is your playground!"
                />

                <Box
                    href="/rabbeat"
                    imageSrc="/images/rabbeat-cover.png"
                    imageAlt="RABBEAT"
                    title="RABBEAT"
                    tags={["Game Design", "UX/UI", "Animation"]}
                    description="As Synth the Rabbit, you must use your musical powers to rescue your friends from an evil DJ scientist!"
                />
            </div>


            <div className="flex gap-4 items-center flex-col sm:flex-row mb-5">
                <Box
                    href="https://medium.com/@tg329/discord-server-tags-optimizing-server-discovery-ux-case-study-1af78f37c55e"
                    target="_blank"
                    rel="noopener noreferrer"
                    imageSrc="/images/discord-cover.png"
                    imageAlt="Optimizing Discovery Through Discord Server Tags"
                    title="Optimizing Discovery Through Discord Server Tags"
                    tags={["Case Study", "UX/UI", "Product Thinking"]}
                    description="Improving the discoverability of Discord servers through a tagging/filtering system."
                />

                <Box
                    href="/nexus"
                    imageSrc="/images/turtle-cover.png"
                    title="Cornell Nexus Graphic Design"
                    tags={["Graphic Design", "Marketing", "Social Media"]}
                    description="Designed with Canva for Cornell's autonomous robot team working to filter microplastics on beaches."
                />
            </div>


            <div className="flex gap-4 items-center flex-col sm:flex-row mb-10">
                <Box
                    href="/acsu"
                    imageSrc="/images/acsu-cover.png"
                    title="Cornell ACSU Graphic Design"
                    tags={["Graphic Design", "Marketing", "Social Media"]}
                    description="Designed with Figma and Canva for Cornell's largest Computer and Information Science club."
                />

                <Box
                    href="https://drive.google.com/file/d/1C-zrheTzhEJy4coov5jFRojh70NZGf6z/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    imageSrc="/images/catbun-cover.png"
                    imageAlt="Catbun Art Database"
                    title="Art Database Video Demo"
                    tags={["Web Design", "UX/UI", "Fullstack Dev"]}
                    description="Art database with admin log-in, tag filter system, and upload/edit functions."
                />
            </div>

            <div className="text-center text-sm mb-10 flex flex-col items-center">
                <span className="mb-2">...and this website!</span>
                <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-white text-black text-sm px-2 py-0.5 rounded">Web Design</span>
                    <span className="bg-white text-black text-sm px-2 py-0.5 rounded">UX/UI</span>
                    <span className="bg-white text-black text-sm px-2 py-0.5 rounded">Frontend Dev</span>
                </div>
            </div>

            <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            </div>
            <Footer />
            
        </div>
    );
}
