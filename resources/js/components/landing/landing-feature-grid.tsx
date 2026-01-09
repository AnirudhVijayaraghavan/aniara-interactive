const accentStyles = {
    cyan: {
        text: 'text-[#00f5ff]',
        border: 'hover:border-[#00f5ff]/50',
        glow: 'hover:shadow-[0_0_35px_rgba(0,245,255,0.35)]',
    },
    magenta: {
        text: 'text-[#ff2bd6]',
        border: 'hover:border-[#ff2bd6]/50',
        glow: 'hover:shadow-[0_0_35px_rgba(255,43,214,0.35)]',
    },
    green: {
        text: 'text-[#00ff88]',
        border: 'hover:border-[#00ff88]/50',
        glow: 'hover:shadow-[0_0_35px_rgba(0,255,136,0.35)]',
    },
    red: {
        text: 'text-[#ff3b3b]',
        border: 'hover:border-[#ff3b3b]/50',
        glow: 'hover:shadow-[0_0_35px_rgba(255,59,59,0.35)]',
    },
    yellow: {
        text: 'text-[#ffd24a]',
        border: 'hover:border-[#ffd24a]/60',
        glow: 'hover:shadow-[0_0_35px_rgba(255,210,74,0.35)]',
    },
};

export type FeatureAccent = keyof typeof accentStyles;

export interface FeatureItem {
    title: string;
    description: string;
    accent: FeatureAccent;
    tag?: string;
}

interface LandingFeatureGridProps {
    items: FeatureItem[];
}

const cardDelays = ['delay-0', 'delay-100', 'delay-200'];

export default function LandingFeatureGrid({
    items,
}: LandingFeatureGridProps) {
    return (
        <div className="grid gap-6 lg:grid-cols-3">
            {items.map((item, index) => {
                const accent = accentStyles[item.accent];

                return (
                    <article
                        key={item.title}
                        className={`group relative flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-[#0a0c14]/70 p-6 backdrop-blur transition ${accent.border} ${accent.glow} motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 ${cardDelays[index % cardDelays.length]}`}
                    >
                        <div className="flex items-center justify-between">
                            <span
                                className={`text-xs uppercase tracking-[0.3em] ${accent.text}`}
                            >
                                {item.tag}
                            </span>
                            
                        </div>
                        <h3 className="text-lg font-semibold uppercase tracking-[0.12em] text-white">
                            {item.title}
                        </h3>
                        <p className="text-sm text-white/70">
                            {item.description}
                        </p>
                        <div
                            aria-hidden="true"
                            className={`mt-auto h-px w-16 rounded-full bg-current ${accent.text}`}
                        />
                    </article>
                );
            })}
        </div>
    );
}
