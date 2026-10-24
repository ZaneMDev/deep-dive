function Header() {
    return (
        <header className="flex justify-between px-24 py-2">
            <div>
                <a href="#">
                    <img src="/favicon.svg" alt="Logo" className="size-12" />
                </a>
            </div>

            <form action="" className="flex items-center">
                <label htmlFor="search" className="flex">
                    <span className="material-symbols-outlined text-[#c0c0c0]">
                        search
                    </span>
                </label>
                <input
                    type="text"
                    id="search"
                    className="border border-[#c0c0c0]"
                />
            </form>

            <div className="flex items-center gap-4">
                <a href="">Login</a>
                <a href="">Sign Up</a>
            </div>
        </header>
    );
}

export default Header;
