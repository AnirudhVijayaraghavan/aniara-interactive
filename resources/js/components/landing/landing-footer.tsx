export default function LandingFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="relative px-6 py-12">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 border-t border-white/10 pt-8 text-white/60 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
                        Aniara Interactive
                    </span>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                        Games and 3D art from a single creator
                    </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em]">
                    <a
                        href="#"
                        className="transition hover:text-[#00f5ff]"
                        aria-label="Twitter"
                    >
                        Twitter
                    </a>
                    <a
                        href="#"
                        className="transition hover:text-[#00f5ff]"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>
                    <a
                        href="#"
                        className="transition hover:text-[#00f5ff]"
                        aria-label="ArtStation"
                    >
                        ArtStation
                    </a>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Copyright {currentYear} Aniara Interactive
                </span>
            </div>
        </footer>
    );
}
