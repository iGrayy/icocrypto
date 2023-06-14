/**
 * Show checkpoint in progress bar.
 * @param {string} title Title of point.
 * @param {number} percent Percent of point. 
 */
export function ProgressPoint({title, percent}) {
    return (
        <div className='progress-point' data-point={percent} style={{left: `${percent}%`}}>
			{title}
		</div>
    );
};

/**
 * Show progress bar.
 * @param {string} title1 Title at start.
 * @param {string} title2 Title at end. 
 * @param {number} value1 Value at start.
 * @param {number} value2 Value at end.
 * @param {string} unit Unit name.
 * @param {number} percent Current percent.
 * @param {children} children Children elements.
 */
export function ProgressBar({title1, title2, value, value2, unit, percent, children}) {
    return (
        <div className='progress-wrap progress-wrap-point'>
			<ul className='progress-info progress-info-s2'>
				<li>
					{title1} -{' '}
					<span>
						{format(value1)} {unit}
					</span>
				</li>
				<li className='text-end'>
					{title2} -{' '}
					<span>
						{format(value2)} {unit}
					</span>
				</li>
			</ul>
			<div className='progress-bar progress-bar-xs'>
				<div
					className='progress-percent progress-percent-s2'
					data-percent={percent}
					style={{ width: `${percent}%` }}
				/>
				{children}
			</div>
		</div>
    );
};