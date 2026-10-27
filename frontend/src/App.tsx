import backgroundImage from './assets/background.png';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />

            <main className="relative flex h-screen items-center justify-center">
                <img
                    src={backgroundImage}
                    alt="Underwater landing page background"
                    className="pointer-events-none absolute inset-0 size-full object-cover select-none"
                />
                <div className="flex h-48 w-lg flex-col justify-center gap-4 rounded-2xl bg-white/75 p-12 text-center shadow-2xl backdrop-blur-md">
                    <h1 className="text-2xl font-bold text-[#ff8000]">
                        👋 Welcome to DeepDive!
                    </h1>
                    <p className="text-[#202020] italic">
                        This website is currently still under construction and
                        is actively being worked on. Check back soon for more!
                    </p>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default App;
