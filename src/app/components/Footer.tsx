export default function Footer() {
    return (
        <footer className="w-full bg-white text-black">
            <div className="max-w-screen-xl mx-auto my-auto flex flex-wrap items-center justify-between p-2">
                <span>
                    © {new Date().getFullYear()} Tiffany (Shihan) Gao
                </span>
                <div className="flex gap-8">
                    <a
                        href="mailto:tg329@cornell.edu"
                        className="hover:underline hover:text-gray-700 hover:underline-offset-4 transition"
                    >
                        Email
                    </a>
                    <a
                        href="https://github.com/tg329"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-gray-700 hover:underline-offset-4 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tiffany-shihan-gao/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-gray-700 hover:underline-offset-4 transition"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}