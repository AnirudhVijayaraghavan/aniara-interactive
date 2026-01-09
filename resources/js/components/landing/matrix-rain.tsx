import { useEffect, useRef } from 'react';

const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

type MatrixLayer = {
    fontSize: number;
    speed: number;
    opacity: number;
    color: string;
    shadow: string;
};

const layers: MatrixLayer[] = [
    {
        fontSize: 12,
        speed: 0.45,
        opacity: 0.35,
        color: '#00ff88',
        shadow: 'rgba(0, 255, 136, 0.45)',
    },
    {
        fontSize: 16,
        speed: 0.7,
        opacity: 0.5,
        color: '#00f5ff',
        shadow: 'rgba(0, 245, 255, 0.45)',
    },
    {
        fontSize: 20,
        speed: 0.95,
        opacity: 0.55,
        color: '#ff2bd6',
        shadow: 'rgba(255, 43, 214, 0.45)',
    },
];

const getRandomGlyph = () => glyphs[Math.floor(Math.random() * glyphs.length)];

const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function MatrixRain({ className = '' }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const context = canvas.getContext('2d');
        if (!context) {
            return;
        }

        let animationFrame = 0;
        let lastFrame = 0;
        let width = 0;
        let height = 0;
        let drops: number[][] = [];
        const dpr = window.devicePixelRatio || 1;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(dpr, 0, 0, dpr, 0, 0);

            drops = layers.map((layer) => {
                const columns = Math.ceil(width / layer.fontSize);
                return new Array(columns)
                    .fill(0)
                    .map(() => Math.random() * height);
            });
        };

        resize();
        window.addEventListener('resize', resize);

        const drawFrame = (timestamp: number) => {
            if (timestamp - lastFrame < 1000 / 30) {
                animationFrame = window.requestAnimationFrame(drawFrame);
                return;
            }

            lastFrame = timestamp;

            context.fillStyle = 'rgba(5, 6, 10, 0.2)';
            context.fillRect(0, 0, width, height);

            layers.forEach((layer, layerIndex) => {
                context.font = `${layer.fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
                context.fillStyle = layer.color;
                context.shadowBlur = 12;
                context.shadowColor = layer.shadow;
                context.globalAlpha = layer.opacity;

                const columnWidth = layer.fontSize;
                drops[layerIndex].forEach((drop, columnIndex) => {
                    const x = columnIndex * columnWidth;
                    const y = drop;
                    context.fillText(getRandomGlyph(), x, y);

                    if (y > height && Math.random() > 0.975) {
                        drops[layerIndex][columnIndex] = -Math.random() * 200;
                    } else {
                        drops[layerIndex][columnIndex] = y + layer.speed * 10;
                    }
                });
            });

            context.globalAlpha = 1;
            animationFrame = window.requestAnimationFrame(drawFrame);
        };

        const drawStatic = () => {
            context.fillStyle = 'rgba(5, 6, 10, 0.9)';
            context.fillRect(0, 0, width, height);

            layers.forEach((layer, layerIndex) => {
                context.font = `${layer.fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
                context.fillStyle = layer.color;
                context.shadowBlur = 10;
                context.shadowColor = layer.shadow;
                context.globalAlpha = layer.opacity;

                const columnWidth = layer.fontSize;
                drops[layerIndex].forEach((drop, columnIndex) => {
                    const x = columnIndex * columnWidth;
                    const y = drop;
                    context.fillText(getRandomGlyph(), x, y);
                });
            });

            context.globalAlpha = 1;
        };

        if (prefersReducedMotion()) {
            drawStatic();
        } else {
            animationFrame = window.requestAnimationFrame(drawFrame);
        }

        return () => {
            window.removeEventListener('resize', resize);
            window.cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            aria-hidden="true"
        />
    );
}
