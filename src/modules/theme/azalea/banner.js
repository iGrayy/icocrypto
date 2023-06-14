/**
 * Show banner.
 * @param {*} children Children elements. 
 * @returns
 */
export function Banner({children}) {
    return (
        <div className='banner banner-fs tc-light'>
            {children}
        </div>
    );
};

/**
 * Show banner header area.
 * @param {string} title Title of banner.
 * @param {string} caption Caption of banner.
 * @param {*} btn1 First CPN button.
 * @param {*} btn2 Second CPN button.
 * @param {*} children Children elements.
 * @returns 
 */
export function BannerHead({title, caption, btn1, btn2, children}) {

    /**
     * Check if there are children or not.
     * @returns boolean.
     */
    const isChildren = () => {
        return Boolean(children.type() === null);
    }

    /**
     * Return component.
     */
    return(
        <div className='nk-block nk-block-header nk-block-sm my-auto'>
            {isChildren() ? (
                <div className='container pt-5'>
                    <div className='banner-caption text-center'>
                        <h1 className='title title-xl-2 ttu'>{title}</h1>
                        <div className='row justify-content-center pb-3'>
			                <div className='col-sm-11 col-xl-11 col-xxl-8'>
				                <p className='lead'>{caption}</p>
			                </div>
		                </div>
                        <div className='cpn-action'>
			                <ul className='btn-grp mx-auto'>
                                <li>{btn1}</li>
                                <li>{btn2}</li>
                            </ul>
		                </div>
                    </div>
                </div>
            ) : (
                <div className='container container-xxl pt-5'>
                    <div className='container container-xxl pt-5'>
                        <div className='row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px'>
                            <div className='col-lg-6 order-lg-last'>
                                <div className='banner-gfx banner-gfx-auto'>
                                    {children}
                                </div>
                            </div>
                            <div className='col-xl-5 col-lg-6 col-sm-10 text-center text-lg-start'>
                                <div className='banner-caption'>
                                    <h1 className='title title-lg ttu'>{title}</h1>
                                    <p className='lead'>{caption}</p>
                                    <div className='cpn-action'>
			                            <ul className='btn-grp mx-auto'>
                                            {btn1}
                                            {btn2}
                                        </ul>
		                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};