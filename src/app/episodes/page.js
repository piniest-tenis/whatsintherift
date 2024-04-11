'use client';
import { useEffect, useState } from 'react';

export default function Episodes() {
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
        <div className="episodes">
            <article className={`episodes squiggly-bg${expanded ? ' expanded' : ''}`}>
                <p>
                    Episodes of <u>What's in The Rift</u> are serial, which means that a linear story is told starting at episode 1. You can pick any to begin with, but you'll be doing a <i>lot</i> of catching up if you do.
                </p>
                <p>
                    For the best listening experience, throw on a pair of headphones. Later episodes are arranged specifically to provide an immersive soundscape and are best enjoyed with a device that can represent 3D sounds clearly.
                </p>
                <p>
                    <br />
                    <iframe className='ml-form-embedContainer' src="https://embed.acast.com/64b9e22a5aa4ce0011569ebf?episode-order=asc&font-family=Roboto%20Mono&font-src=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DRoboto%2BMono&feed=true" frameBorder="0" width="100%" height="630px"></iframe>
                </p>
                <strong className='upper-right'>Listening Instructions</strong>
                <strong className='lower-left'>Enjoy the show.</strong>
            </article>
        </div>
    )
}