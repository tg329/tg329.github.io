import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Box from "../components/Box";
import Images from "../components/Images";

export default function Rabbeat() {
    return (
        <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start pt-10 w-full pb-2">
                <h1 className="text-2xl font-bold tracking-[-.01em] text-center w-full">
                    RABBEAT
                </h1>

                <div className="w-full flex justify-center">
                    <video controls className="rounded-lg max-w-2xl w-full">
                        <source src="/images/rabbeat-demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="flex flex-col gap-6 items-center w-full">
                    <Images images={[
                        "/images/cover.png",
                        "/images/levelone.png",
                        "/images/levelfive.png"
                    ]} />
                    <Images images={[
                        "/images/levelselect.png",
                        "/images/leveltwo.png",
                        "/images/levelsix.png"
                    ]} />
                    <Images images={[
                        "/images/levelthree.png",
                        "/images/levelfour.png",
                        "/images/levelseven.png"
                    ]} />
                </div>

                <div className="flex justify-center items-center gap-6 w-full">
                    <img width={120} src="/images/bear.gif" alt="Bear" className="h-auto mb-2" />
                    <img width={200} src="/images/bat.gif" alt="Bat" className="h-auto mt-5" />
                    <img width={120} src="/images/hedge.gif" alt="Hedgehog" className="h-auto mt-4" />
                </div>
            </main>
            <Footer />
        </div>
    );
}