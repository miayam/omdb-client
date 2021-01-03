import { h } from 'preact';
import {
    useState,
    useEffect
} from 'preact/hooks';

export default (ref, options) => {
    const [intersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        }, options)

        if (ref) {
            observer.observe(ref.current);
        }

        // Clean up callback
        return () => observer.unobserve(ref.current);
    }, []);

    return intersecting;
}