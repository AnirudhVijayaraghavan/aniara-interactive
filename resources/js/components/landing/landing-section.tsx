import { type ReactNode } from 'react';

interface LandingSectionProps {
    id?: string;
    eyebrow?: string;
    title: string;
    description?: string;
    children: ReactNode;
}

export default function LandingSection({
    id,
    eyebrow,
    title,
    description,
    children,
}: LandingSectionProps) {
    const titleId = id ? `${id}-title` : undefined;

    return (
        <section
            id={id}
            aria-labelledby={titleId}
            className="relative px-6 py-16 sm:py-20"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
                <div className="flex flex-col gap-4">
                    {eyebrow && (
                        <span className="text-xs uppercase tracking-[0.4em] text-[#00f5ff]/70">
                            {eyebrow}
                        </span>
                    )}
                    <div className="flex flex-col gap-3">
                        <h2
                            id={titleId}
                            className="text-2xl font-semibold uppercase tracking-[0.14em] text-white sm:text-3xl"
                        >
                            {title}
                        </h2>
                        {description && (
                            <p className="max-w-2xl text-sm text-white/70 sm:text-base">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
                <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
                    {children}
                </div>
            </div>
        </section>
    );
}
