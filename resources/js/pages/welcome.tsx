import LandingCta from '@/components/landing/landing-cta';
import LandingFeatureGrid, {
    type FeatureItem,
} from '@/components/landing/landing-feature-grid';
import LandingFooter from '@/components/landing/landing-footer';
import LandingHero from '@/components/landing/landing-hero';
import LandingNav from '@/components/landing/landing-nav';
import LandingSection from '@/components/landing/landing-section';
import MatrixRain from '@/components/landing/matrix-rain';
import { login, register } from '@/routes';
import { Head } from '@inertiajs/react';

interface WelcomeProps {
    canRegister?: boolean;
}

const gameItems: FeatureItem[] = [
    {
        title: 'Unreal Engine Builds',
        description:
            'Playable UE5 experiments with cinematic lighting and combat beats.',
        accent: 'cyan',
        tag: 'UE5',
    },
    {
        title: 'Godot Prototypes',
        description:
            'Fast iteration gameplay loops and stylized visuals in Godot.',
        accent: 'green',
        tag: 'Godot',
    },
    {
        title: 'Phaser Arcade',
        description:
            'Short-form browser games tuned for speed and responsiveness.',
        accent: 'magenta',
        tag: 'Phaser',
    },
];

const conceptItems: FeatureItem[] = [
    {
        title: 'Blender Renders',
        description:
            'High contrast cyberpunk environments and vehicle studies.',
        accent: 'red',
        tag: 'Blender',
    },
    {
        title: 'Environment Kits',
        description:
            'Modular street assets, trims, and neon signage systems.',
        accent: 'cyan',
        tag: 'Worldbuilding',
    },
    {
        title: 'Asset Breakdowns',
        description:
            'Behind-the-scenes looks at shaders, materials, and workflows.',
        accent: 'yellow',
        tag: 'Process',
    },
];

const aboutItems: FeatureItem[] = [
    {
        title: 'Play New Releases',
        description:
            'Access curated builds and fresh experiments as they ship.',
        accent: 'green',
        tag: 'Games',
    },
    {
        title: 'Explore the Archive',
        description:
            'Browse 3D assets, renders, and concept explorations.',
        accent: 'magenta',
        tag: 'Concepts',
    },
    {
        title: 'Track Progress',
        description:
            'See how ideas evolve from prototype to polished release.',
        accent: 'cyan',
        tag: 'Journey',
    },
    
];

export default function Welcome({ canRegister = true }: WelcomeProps) {
    const loginHref = login();
    const registerHref = register();

    return (
        <>
            <Head title="Aniara Interactive" />
            <div className="relative min-h-screen bg-[#05060a] text-white">
                <MatrixRain className="pointer-events-none absolute inset-0 opacity-60" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,245,255,0.12),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0.7),transparent_35%,rgba(5,6,10,0.95))]" />

                <div className="relative z-10">
                    <LandingNav
                        loginHref={loginHref}
                        registerHref={registerHref}
                        canRegister={canRegister}
                    />
                    <main id="main" className="relative">
                        <LandingHero
                            loginHref={loginHref}
                            registerHref={registerHref}
                            canRegister={canRegister}
                        />
                        <LandingSection
                            id="games"
                            eyebrow="Play"
                            title="Games and prototypes"
                            description="Playable builds across Unreal Engine, Godot, and Phaser."
                        >
                            <LandingFeatureGrid items={gameItems} />
                        </LandingSection>
                        <LandingSection
                            id="concepts"
                            eyebrow="Explore"
                            title="3D art and concepts"
                            description="Renders, assets, and worldbuilding crafted for futuristic worlds."
                        >
                            <LandingFeatureGrid items={conceptItems} />
                        </LandingSection>
                        <LandingSection
                            id="about"
                            eyebrow="What you can do"
                            title="Experience Aniara Interactive"
                            description="A focused space for playable experiments and cinematic 3D work."
                        >
                            <LandingFeatureGrid items={aboutItems} />
                        </LandingSection>
                        <LandingCta
                            loginHref={loginHref}
                            registerHref={registerHref}
                            canRegister={canRegister}
                        />
                    </main>
                    <LandingFooter />
                </div>
            </div>
        </>
    );
}
