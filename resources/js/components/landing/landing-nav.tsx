import { Link, type InertiaLinkProps } from '@inertiajs/react';

interface LandingNavProps {
    loginHref: NonNullable<InertiaLinkProps['href']>;
    registerHref: NonNullable<InertiaLinkProps['href']>;
    canRegister: boolean;
}

const navLinks = [
    { label: 'Games', href: '#games' },
    { label: '3D Art', href: '#concepts' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export default function LandingNav({
    loginHref,
    registerHref,
    canRegister,
}: LandingNavProps) {
    return (
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05060a]/85 backdrop-blur">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#00f5ff] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-[#05060a]"
            >
                Skip to content
            </a>
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
                        Aniara Interactive
                    </span>
                    <span className="hidden rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#00ff88]/70 sm:inline-flex">
                        Game Studio
                    </span>
                </div>
                <nav
                    aria-label="Primary"
                    className="flex flex-1 items-center justify-end gap-4"
                >
                    <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/70 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="transition hover:text-[#00f5ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00f5ff]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <Link
                        href={loginHref}
                        className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-[#00f5ff]/70 hover:text-[#00f5ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f5ff]"
                    >
                        Log in
                    </Link>
                    {canRegister && (
                        <Link
                            href={registerHref}
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#00f5ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#05060a] transition hover:shadow-[0_0_30px_rgba(0,245,255,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f5ff]"
                        >
                            <span className="relative z-10">
                                Create Account
                            </span>
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,rgba(255,43,214,0.9),rgba(0,245,255,0.9))] opacity-0 transition group-hover:opacity-100"
                            />
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}
