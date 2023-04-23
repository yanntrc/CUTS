import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger Icon */}
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            {/* Logo */}
                            <Link legacyBehavior href="/">
                                <a className="text-black font-bold text-xl">C.U.T.S</a>
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {/* Menu Items */}
                                <Link legacyBehavior href="/about">
                                    <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        About
                                    </a>
                                </Link>
                                <Link legacyBehavior href="/portfolio">
                                    <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Tracks
                                    </a>
                                </Link>
                                <Link legacyBehavior href="/blog">
                                    <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Blog
                                    </a>
                                </Link>
                                <Link legacyBehavior href="/contact">
                                    <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Contact
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* Menu Items */}
                        <Link legacyBehavior href="/about">
                            <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                About
                            </a>
                        </Link>
                        <Link legacyBehavior href="/portfolio">
                            <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Tracks
                            </a>
                        </Link>
                        <Link legacyBehavior href="/blog">
                            <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Blog
                            </a>
                        </Link>
                        <Link legacyBehavior href="/contact">
                            <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;