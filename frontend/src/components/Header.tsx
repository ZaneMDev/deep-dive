import logo from '../assets/logo.png';

function Header() {
    return (
        <header className="fixed right-0 left-0 z-1 flex justify-between bg-white/75 px-16 py-2 shadow-lg backdrop-blur-md">
            <div className="flex w-1/4 items-center">
                <a href="#" className="block size-fit" title="Home">
                    <img
                        src={logo}
                        alt="Logo"
                        className="pointer-events-none h-8"
                    />
                </a>
            </div>

            <form action="" className="relative flex w-1/2 items-center">
                <label
                    htmlFor="search"
                    className="pointer-events-none absolute flex px-4"
                >
                    <span className="material-symbols-outlined text-[#808080] select-none">
                        search
                    </span>
                </label>
                <input
                    type="text"
                    id="search"
                    className="w-full rounded-full border border-[#808080] bg-white px-12 py-2 text-[#404040] placeholder:text-[#808080] focus:border-[#404040] focus:outline-none"
                    placeholder="Search for a community..."
                />
            </form>

            <div className="flex w-1/4 items-center justify-end gap-2">
                <a
                    href=""
                    className="rounded-full border border-[#808080] bg-white px-4 py-2 text-[#808080]"
                    title="Log In"
                >
                    Log In
                </a>
                <a
                    href=""
                    className="rounded-full bg-[#ff8000] px-4 py-2 text-white"
                    title="Sign Up"
                >
                    Sign Up
                </a>
            </div>
        </header>
    );
}

export default Header;
