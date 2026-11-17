import backgroundImage from './assets/background.png';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-surface-2 relative">
            <Header />

            <main className="relative flex h-screen items-center justify-center">
                <img
                    src={backgroundImage}
                    alt="Underwater landing page background"
                    className="pointer-events-none absolute inset-0 size-full object-cover select-none dark:brightness-75"
                />

                <div className="bg-surface-1 z-1 flex h-48 w-lg flex-col justify-center gap-6 rounded-2xl p-12 text-center shadow-2xl">
                    <h1 className="text-brand-secondary text-2xl font-bold">
                        👋 Welcome to DeepDive!
                    </h1>
                    <p className="text-foreground-2 italic">
                        This website is currently still under construction and
                        is actively being worked on. Check back soon for more!
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
