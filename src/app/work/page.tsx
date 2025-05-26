import Navbar from "../components/Navbar";

export default function Work() {
    return (

        <div className="p-4 grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen pt-2 pb-20 gap-8 font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1 className="text-4xl font-bold tracking-[-.01em]">
                    Work in Progress
                </h1>
                <p className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    This page is under construction. Please check back later!
                </p>
            </main>
        </div>
    );
}