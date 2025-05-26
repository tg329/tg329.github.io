export default function Footer() {
    return (
        <footer className="w-full bg-white text-black border-t border-gray-200 py-4 mt-auto">
            <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
                <span>
                    © {new Date().getFullYear()} Tiffany (Shihan) Gao
                </span>
                <div className="flex gap-4">
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
