
/**
 * Show common link button.
 * @param {string} href Reference link.
 * @param {string} classes Custom classes.
 * @param {boolean} isFill Is button filled.
 * @param {boolean} isRound Is button rounded.
 * @param {*} children Children elements.
 * @returns 
 */
export function Button({children, href='#', classes, isFill=true, isRound=true}) {
    return (
        <a href={href} className={`btn ${classes} ${isFill ? '' : 'btn-outline'} ${isRound ? 'btn-round' : ''}`}>
            {children}
        </a>
    );
};


/**
 * Show em button.
 * @param {string} href Reference link.
 * @param {string} classes Custom classes.
 * @param {string} icon Custom icon.
 * @param {*} children Children elements.
 * @returns 
 */
export function EmButton({children, href='#', classes, icon}) {
    return (
        <a href={href} className={`link ${classes}`}>
            <em className={`${icon}`}></em>
            <span>{children}</span>
        </a>
    );
};