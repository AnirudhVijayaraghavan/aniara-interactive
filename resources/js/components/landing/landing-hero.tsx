import { Link, type InertiaLinkProps } from '@inertiajs/react';

interface LandingHeroProps {
    loginHref: NonNullable<InertiaLinkProps['href']>;
    registerHref: NonNullable<InertiaLinkProps['href']>;
    canRegister: boolean;
}

export default function LandingHero({
    loginHref,
    registerHref,
    canRegister,
}: LandingHeroProps) {
    return (
        <section className="relative px-6 pb-20 pt-20 sm:pt-24">
            <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle,rgba(0,245,255,0.2),transparent_70%)] opacity-60" />
            <div className="absolute right-0 top-24 h-72 w-72 bg-[radial-gradient(circle,rgba(255,43,214,0.2),transparent_70%)] opacity-60" />
            <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
                        <span className="text-xs uppercase tracking-[0.4em] text-[#00f5ff]/70">
                            Aniara Interactive
                        </span>
                        <h1 className="text-4xl font-semibold uppercase tracking-[0.12em] text-white sm:text-5xl lg:text-6xl">
                            2D/3D games and renders, meant to be experienced.
                        </h1>
                        <p className="max-w-xl text-base text-white/70 sm:text-lg">
                            Play Unreal Engine, Godot, and Phaser prototypes,
                            then explore 3D assets and renders crafted in
                            Blender and Unreal.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:delay-150 motion-safe:duration-700">
                        <Link
                            href={loginHref}
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#00f5ff] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#05060a] transition hover:shadow-[0_0_30px_rgba(0,245,255,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00f5ff]"
                        >
                            <span className="relative z-10">Play the Games</span>
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
                    <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/50 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:delay-200 motion-safe:duration-700">
                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00ff88]" />
                            Playable Builds
                        </span>
                        <span className="hidden h-6 w-px bg-white/10 sm:block" />
                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]" />
                            3D Art Library
                        </span>
                        <span className="hidden h-6 w-px bg-white/10 sm:block" />
                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#ff2bd6]" />
                            Prototype Drops
                        </span>
                    </div>
                </div>
                <div className="relative mx-auto w-full max-w-md">
                    <HeroVisual />
                </div>
            </div>
        </section>
    );
}

function HeroVisual() {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#070812]/70 p-6 shadow-[0_0_40px_rgba(0,245,255,0.2)] backdrop-blur motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:delay-300 motion-safe:duration-700">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,245,255,0.08),transparent_40%,rgba(255,43,214,0.12))]" />
            <div className="absolute -right-10 top-6 h-32 w-32 rounded-full border border-[#00f5ff]/30 bg-[radial-gradient(circle,rgba(0,245,255,0.16),transparent_70%)] blur-lg" />
            <div className="absolute left-6 top-28 h-20 w-20 rounded-full border border-[#ff2bd6]/40 bg-[radial-gradient(circle,rgba(255,43,214,0.2),transparent_70%)] blur-md" />
            <div className="relative flex flex-col gap-5">
                <div className="text-[11px] uppercase tracking-[0.4em] text-white/60">
                    At a Glance
                </div>
                <div className="grid gap-4 rounded-2xl border border-white/10 bg-[#05060a]/70 p-4">
                    <div className="flex flex-col gap-2 text-xs text-white/70">
                        <span className="uppercase tracking-[0.3em] text-[#00f5ff]/80">
                            Playable Games
                        </span>
                        <span>
                            UE5, Godot, and Phaser builds ready for the arcade.
                        </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-[11px] uppercase tracking-[0.2em] text-white/60">
                        <div className="rounded-lg border border-white/10 bg-[#0a0f1f]/80 px-3 py-2">
                            UE5
                        </div>
                        <div className="rounded-lg border border-white/10 bg-[#0a0f1f]/80 px-3 py-2">
                            Godot
                        </div>
                        <div className="rounded-lg border border-white/10 bg-[#0a0f1f]/80 px-3 py-2">
                            Phaser
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 rounded-2xl border border-white/10 bg-[#05060a]/70 p-4 text-[11px] text-white/60">
                    <span className="uppercase tracking-[0.3em] text-[#ff2bd6]/80">
                        3D Art and Concepts
                    </span>
                    <div className="grid grid-cols-3 gap-3 text-[11px] uppercase tracking-[0.2em] text-white/60">
                        <div className="rounded-lg border border-white/10 bg-[#0a0f1f]/80 px-3 py-2">
                            Blender
                        </div>
                        <div className="rounded-lg border border-white/10 bg-[#0a0f1f]/80 px-3 py-2">
                            ThreeJS
                        </div>
                        <div className="rounded-lg border border-white/10 bg-[#0a0f1f]/80 px-3 py-2">
                            Unreal
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
