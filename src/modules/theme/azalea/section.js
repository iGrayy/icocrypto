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


/**
 * Show section header includes: title and subtitle.
 * @param {string} title Title of section.
 * @param {string} subtitle Subtitle of section.
 * @param {string} size Size of title.
 * @param {*} children Children elements. 
 */
export function SectionHead({title, subtitle, size = 'xl', children}) {
    return (
        <div className='container'>
			<div className='row justify-content-center text-center'>
				<div className='col-lg-6'>
					<div className='section-head section-head-s2'>
						<h2 className={`title title-${size}`} title={title}>
							{children}
						</h2>
						{subtitle && <p>{subtitle}</p>}
					</div>
				</div>
			</div>
		</div>
    );
};


/**
 * Show section content area.
 * @param {string} classes Custom classes.
 * @param {boolean} hasBg Enable background or not.
 * @param {*} children Children elements.
 */
export function SectionContent({classes, hasBg, children}) {
    return (   
        <div className='container container-xxl'>
			<div className={`nk-block ${hasBg ? 'has-bg-image' : ''} ${classes}`}>{children}</div>
		</div>
    );
};


/**
 * Show section background image.
 * @param {string} url Background URL.
 * @param {string} alt Background alt. 
 */
export function SectionBackground({url, alt}) {
    return (
        <div
			className={`bg-image bg-contain bg-bottom-center bg-${alt} overlay-fall bg-image-loaded`}
			style={{ backgroundImage: `url(${url})` }}
		>
			<img src={url} alt={alt} />
		</div>
    );
};