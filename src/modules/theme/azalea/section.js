import { useRef, useEffect } from "react";
import observerConfig from '@/config/observer';

/**
 * Show section.
 * @param {string} id Section id.
 * @param {string} setActiveSection Activate section.
 * @param {*} children Children elements. 
 */
export function Section({id, setActiveSection, children}) {
    // Define ref.
    const ref = useRef(null);

    // Define use effect.
	useEffect(() => {
		const callback = (entries) => {
			setActiveSection && id && setActiveSection(id);
		};
		const observer = new IntersectionObserver(callback, observerConfig);
		const temp = ref.current;
		if (temp) 
            observer.observe(temp);
		return () => {
			if (temp) observer.unobserve(temp);
		};
	}, [id, setActiveSection]);

    /**
     * Return component.
     */
    return (
        <section ref={ref} className='section' id={id?.toLowerCase()}>
			{children}
		</section>
    );
};