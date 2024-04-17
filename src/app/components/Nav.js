'use client'

import '../styles/global.modules.scss';
import Link from 'next/link';
import useState from 'react';
import ContainerNavItem from './containerNavItem';

export default function Nav() {
    return (
        <nav className='site-nav'>
            <label htmlFor='site-open'>
                <svg id="burgericon" xmlns="http://www.w3.org/2000/svg" width="70" height="60">
                    <g className="icon">
                        <rect className="frstbar" x="10" y="10" width="45" height="4" rx="7" ry="7" />
                        <rect className="scndbar" x="20" y="25" width="30" height="3" rx="7" ry="7" />
                        <rect className="thrdbar" x="10" y="40" width="45" height="4" rx="7" ry="7" />
                    </g>
                </svg>
            </label><input type='checkbox' name='site-open' id='site-open' />
            <ul>
                <ContainerNavItem title="Season Info & Episodes">
                    <ul>
                        <li><Link href={`/episodes`}>Episodes</Link></li>
                        <li className='section'>
                            Characters & Crew
                        </li>
                        <li>
                            <Link href={`/cast-and-characters/1`}>Season 1</Link>
                        </li>
                        <li>
                            <Link href={`/cast-and-characters/2`}>Season 2</Link>
                        </li>
                    </ul>
                </ContainerNavItem>
                <ContainerNavItem title="Partners">
                    <ul>
                        <li>
                            <a href={'https://rustyquill.com/show/whats-in-the-rift/'} target="_blank">Rusty Quill</a>
                        </li>
                        <li>
                            <a href={'https://www.cortexrpg.com/'} target={'_blank'}>Learn Cortex Prime</a>
                        </li>
                    </ul>
                </ContainerNavItem>
                <ContainerNavItem title="Join Us">
                    <ul>
                        <li>
                            <Link href={`/media`}>Social Media & Links</Link>
                        </li>
                        <li><a href={'https://www.teepublic.com/user/what-s-in-the-rift'} target={'_blank'}>Merchandise</a></li>
                    </ul>
                </ContainerNavItem>
                <li>
                    <div onClick={() => document.getElementById('site-open').checked = false} className='text'><Link href={`/live`}>LIVE SHOW Gen Con 2024</Link>
                    </div>
                </li>

            </ul>
        </nav>
    )
}