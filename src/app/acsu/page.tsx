import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Box from "../components/Box";
import Images from "../components/Images";

export default function acsu() {
    return (
        <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start pt-10 w-full pb-2">
                <h1 className="text-2xl font-bold tracking-[-.01em] text-center w-full">
                    ACSU Graphic Design
                </h1>

                <div className="flex flex-col gap-3 items-center w-full mb-10">
                    <Images images={[
                        "/images/acsuone.png",
                        "/images/acsutwo.png",
                        "/images/acsuthree.png"
                    ]} />
                    <Images images={[
                        "/images/acsufour.png",
                        "/images/acsufive.png",
                        "/images/acsusix.png"
                    ]} />
                </div>

            </main>
            <Footer />
        </div>
    );
}