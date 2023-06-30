'use client'
import { useEffect, useRef, useState } from 'react';

import Navbar from '@/modules/common/navbar';
import Background from '@/modules/theme/azalea/background';
import HomeBanner from './home/banner';


export default function Home() {
  
  const navbarRef = useRef(null);

  const [activateSection, seActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
			const scroll = window.scrollY;
			if (scroll > 0) {
				navbarRef.current?.classList.add('has-fixed');
			} else {
				navbarRef.current?.classList.remove('has-fixed');
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
  }, []);

  return (
    <main>
      <div className='nk-wrap has-ovm'>
        <header id='header' ref={navbarRef} className='nk-header page-header is-transparent is-sticky is-dark'>
          <Navbar activateSection='home'>
            <li>
							<a href='#' data-bs-toggle='modal' data-bs-target='#login-popup' className='btn btn-md btn-thin btn-outline btn-auto btn-round btn-primary no-change'>
								<span>Sign In</span>
							</a>
						</li>
          </Navbar>
          <HomeBanner></HomeBanner>
        </header>
        <main className='nk-pages tc-light'>
          <Background></Background>
        </main>
      </div>
    </main>
  )
}
