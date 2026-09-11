import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative font-semibold text-white">
            {/* Desktop & Hamburger */}
            <div className="flex items-center">
                {/* Menu desktop */}
                <ul className="hidden items-center gap-6 md:flex">
                    <li>
                        <Link
                            to="/"
                            className="transition hover:text-yellow-500"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/"
                            className="transition hover:text-yellow-500"
                        >
                            Produk
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/about"
                            className="transition hover:text-yellow-500"
                        >
                            Tentang kami
                        </Link>
                    </li>
                </ul>

                {/* Tombol hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-7 w-7 transition hover:text-yellow-500 hover:cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={
                                isOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* Menu mobile */}
            {isOpen && (
                <ul className="absolute right-0 top-10 z-50 w-48 rounded-lg border border-yellow-600 bg-zinc-900 p-4 shadow-lg md:hidden">
                    <li>
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="block py-2 transition hover:text-yellow-500"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="block py-2 transition hover:text-yellow-500"
                        >
                            Produk
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className="block py-2 transition hover:text-yellow-500"
                        >
                            Tentang kami
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;