
/**
 * Show common link button.
 * @param {string} href Reference of button.
 * @param {string} classes Custom classes.
 * @param {boolean} isFill Is button filled.
 * @param {boolean} isRound Is button rounded.
 * @returns 
 */
export function Button({children, href, classes, isFill=true, isRound=true}) {
    return (
        <a href={href} className={`btn ${classes} ${isFill ? '' : 'btn-outline'} ${isRound ? 'btn-round' : ''}`}>
            {children}
        </a>
    );
};