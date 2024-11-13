import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: .8,
            easing: (t) => t * (2 - t),
            smooth: true,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            // Cleanup if necessary
        };
    }, []);
};

export default useLenis;
