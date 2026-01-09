import { Link, type InertiaLinkProps } from '@inertiajs/react';

interface LandingCtaProps {
    loginHref: NonNullable<InertiaLinkProps['href']>;
    registerHref: NonNullable<InertiaLinkProps['href']>;
    canRegister: boolean;
}

export default function LandingCta({
    loginHref,
    registerHref,
    canRegister,
}: LandingCtaProps) {
    return (
        <section className="relative px-6 pb-20">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-3xl border border-white/10 bg-[#0a0c14]/80 px-6 py-10 text-white shadow-[0_0_40px_rgba(0,245,255,0.15)] backdrop-blur md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-3">
                    <span className="text-xs uppercase tracking-[0.4em] text-[#00ff88]/70">
                        Join the Arcade
                    </span>
                    <h3 className="text-2xl font-semibold uppercase tracking-[0.12em]">
                        Play the latest builds and explore new worlds.
                    </h3>
                    <p className="max-w-xl text-sm text-white/70">
                        Sign in to access playable prototypes and the full 3D
                        asset library.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href={loginHref}
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#00f5ff] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#05060a] transition hover:shadow-[0_0_30px_rgba(0,245,255,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f5ff]"
                    >
                        <span className="relative z-10">Log in</span>
                        <span
                            aria-hidden="true"
                            className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,rgba(255,43,214,0.9),rgba(0,245,255,0.9))] opacity-0 transition group-hover:opacity-100"
                        />
                    </Link>
                    {canRegister && (
                        <Link
                            href={registerHref}
                            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[#ff2bd6]/70 hover:text-[#ff2bd6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff2bd6]"
                        >
                            Create Account
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
