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
 * Show banner header area. In case there are children elements,
 * the banner header is divided into two column: the left includes title, caption, 
 * and two cpn button while the right includes children elements. Otherwise, banner
 * header is not divided and all its things are aligned at center.
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
        return Boolean(children === undefined || children.type() === null);
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

/**
 * Show banner bottom area. This area is divided into
 * two column left and right.
 * @param {*} left Left area.
 * @param {*} right Right area.
 * @param {*} children Children elements. 
 */
export function BannerBottom({left, right, children}) {
    return (
        <div className='nk-block nk-block-status'>
			<div className='container container-xxl'>
				<div className='row gutter-vr-40px justify-content-between'>
                    <div className='col-xxl-6 col-xl-5 col-lg-5'>
                        {left}
                    </div>
                    <div className='col-xxl-5 col-xl-6 col-lg-7 text-center text-sm-start'>
                        {right}
                    </div>
                </div>
                {children}
			</div>
		</div>
    );
};

/**
 * Show banner footer. Banner footer is divided into two column:
 * the left one includes action buttons while the right one includes
 * socials buttons.
 * @param {*} buttons Action buttons.
 * @param {*} socials Social buttons.
 * @param {*} children Children elements. 
 * @returns 
 */
export function BannerFooter({buttons, socials, children}) {
    return (
        <div className='nk-block nk-block-actions'>
			<div className='container container-xxl'>
				<div className='row gutter-vr-40px align-items-center'>
                    <div className='col-sm-7 d-flex justify-content-center justify-content-sm-start'>
			            <ul className='btn-grp btn-grp-break justify-content-center justify-content-sm-start gutter-vr-20px'>
                            {(buttons instanceof Array) ? (
                                buttons.map((button, index) => {return <li key={index}>{button}</li>})
                            ) : (
                                {buttons}
                            )}
			            </ul>
		            </div>
                    <div className='col-sm-5 d-flex justify-content-center justify-content-sm-end'>
                        <ul className='social-links social-links-s2'>
                            {(socials instanceof Array) ? (
                                socials.map((button, index) => {return <li key={index}>{button}</li>})
                            ) : (
                                {socials}
                            )}
                        </ul>
                    </div>
                </div>
                {children}
			</div>
		</div>
    );
}