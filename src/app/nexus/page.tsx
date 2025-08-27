import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Box from "../components/Box";
import Images from "../components/Images";

export default function Nexus() {
    return (
        <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start pt-10 w-full pb-2">
                <h1 className="text-2xl font-bold tracking-[-.01em] text-center w-full">
                    Nexus Graphic Design
                </h1>

                <div className="flex flex-col gap-3 items-center w-full mb-10">
                    <Images images={[
                        "/images/nexusone.png",
                        "/images/nexustwo.png",
                        "/images/nexusthree.png"
                    ]} />
                    <Images images={[
                        "/images/nexusfour.png",
                        "/images/nexusfive.png",
                        "/images/nexussix.png"
                    ]} />
                </div>

            </main>
            <Footer />
        </div>
    );
}