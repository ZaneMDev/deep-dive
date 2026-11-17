import logo from '../assets/logo.svg';

function Header() {
    return (
        <header className="bg-surface-1 fixed right-0 left-0 z-1 flex justify-between px-16 py-2 shadow-md">
            <div className="flex w-1/4 items-center">
                <a href="#" className="block size-fit" title="Home">
                    <img
                        src={logo}
                        alt="Logo"
                        className="pointer-events-none h-10"
                    />
                </a>
            </div>

            <form action="" className="relative flex w-1/2 items-center">
                <label
                    htmlFor="search"
                    className="pointer-events-none absolute flex px-4"
                >
                    <span className="material-symbols-outlined text-foreground-2 select-none">
                        search
                    </span>
                </label>
                <input
                    type="text"
                    id="search"
                    className="border-foreground-2 bg-surface-1 text-foreground-2 placeholder:text-foreground-2 w-full rounded-full border px-12 py-2 focus:outline-none"
                    placeholder="Search for a group..."
                />
            </form>

            <div className="flex w-1/4 items-center justify-end gap-2">
                <a
                    href=""
                    className="border-foreground-2 text-foreground-2 bg-surface-1 rounded-full border px-4 py-2"
                    title="Log In"
                >
                    Log In
                </a>
                <a
                    href=""
                    className="bg-brand-secondary text-static-light-1 rounded-full px-4 py-2"
                    title="Sign Up"
                >
                    Sign Up
                </a>
            </div>
        </header>
    );
}

export default Header;
