'use client';
import { useEffect, useState } from 'react';

export default function CastAndCharactersSeasonOne() {
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        let timer;
        timer = setTimeout(() => {
            setExpanded(true);
        }, 1020);

        return () => {
            clearTimeout(timer);
        }
    }, [])
    return (
        <div className={'cast-and-characters'}>
            <div className={`cast-and-characters`}>
                <article className={`character-tile squiggly-bg${expanded ? ' expanded' : ''}`}>
                    <h1>Details coming soon!</h1>
                    <p>
                        Season 2 is scheduled to be released October 2024.
                    </p>
                </article>
            </div>
        </div>
    )
}