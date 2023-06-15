import { createPortal } from 'react-dom';
import {useRef, useEffect, useState} from 'react';

/**
 * Show portal.
 * @param {void} close Close callback.
 * @param {*} children Children elements.
 */
export function Portal({close = () => {return}, children}){
    // Define ref.
    const ref = useRef<Element|null>(null);
    // Define mounted.
	const [mounted, setMounted] = useState(false);

    // Use effect.
	useEffect(() => {
		ref.current = document.querySelector<HTMLElement>('#portal');
		setMounted(true);
	}, []);

    // Return components.
    return mounted && ref.current
		? createPortal(
				<div
					style={{
						padding: '40px 20px',
						position: 'fixed',
						top: 0,
						left: 0,
						width: '100vw',
						height: '100vh',
						background: 'rgba(0, 0, 0, 0.5)',
						zIndex: 9999,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onClick={() => close()}
				>
					{children}
				</div>,
				ref.current
		)
		: null;
};