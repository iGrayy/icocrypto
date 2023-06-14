/**
 * Show GFX image.
 * @param {string} url Image URL.
 * @param {string} alt Image alt. 
 * @returns 
 */
export function GFX({url, alt}) {
    return (
        <div className='gfx py-4'>
			<img src={url} alt={alt} />
		</div>
    );
};