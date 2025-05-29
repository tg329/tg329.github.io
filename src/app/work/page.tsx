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
                    All Works
                </h1>
            </main>


            <div className="flex gap-4 items-center flex-col sm:flex-row">
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


            <div className="flex gap-4 items-center flex-col sm:flex-row m-5">
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


            <div className="flex gap-4 items-center flex-col sm:flex-row mb-10">
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
