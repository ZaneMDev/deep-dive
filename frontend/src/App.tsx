import backgroundImage from './assets/landing_page_background.jpg';

function App() {
    return (
        <main className="relative flex h-screen items-center justify-center">
            <img
                src={backgroundImage}
                alt="Underwater landing page background"
                className="pointer-events-none absolute inset-0 -z-1 size-full object-cover"
            />
            <div className="flex h-48 w-lg flex-col justify-center gap-4 rounded-2xl bg-white/80 p-8 text-center shadow-2xl">
                <h1 className="text-2xl font-bold text-[#ff8000]">
                    Welcome to DeepDive! 👋
                </h1>
                <p className="text-[#202020]">
                    This website is still under construction and is actively
                    being worked on. Check back soon!
                </p>
            </div>
        </main>
    );
}

export default App;
