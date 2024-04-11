'use client'

import { useState } from 'react';

export default function ContainerNavItem({ title, children }) {
    const [containerOpen, setContainerOpen] = useState(false);
    const clickHandler = (e) => {
        if (!e.target.classList.contains('section')) {
            setContainerOpen(!containerOpen);
            if (!e.target.classList.contains('title')) {
                document.getElementById('site-open').checked = false;
            }
        }
    }

    return (
        <li onClick={clickHandler} className={containerOpen ? 'expand' : ''}>
            <div className='text'>
                {children}
                <span className='title'>{title}</span>
            </div>
        </li>
    )
}