import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const artColumns = [
    ["/images/2.png", "/images/3.jpg", "/images/10.png", "/images/12.png", "/images/15.png"],
    ["/images/13.png", "/images/11.png", "/images/14.png", "/images/4.png", "/images/5.png"],
    ["/images/1.png", "/images/8.png", "/images/6.png", "/images/7.png", "/images/9.jpg"],
];

export default function Play() {
    return (
        <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <main className="flex flex-col gap-4 items-center pt-10 w-full">
                <h1 className="text-2xl font-bold text-center w-full">
                    Play
                </h1>
                <div className="big-container flex flex-row w-full justify-center mb-10" style={{ maxWidth: 1000 }}>
                    {artColumns.map((col, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-3">
                            {col.map((src, idx) => (
                                <figure
                                    key={idx}
                                    style={{ margin: "0px 0px 0px 10px" }}
                                >
                                    <img
                                        src={src}
                                        alt=""
                                        className="art block"
                                        style={{ minWidth: 200, maxWidth: "100%" }}
                                    />
                                </figure>
                            ))}
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}