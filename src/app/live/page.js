'use client';
import { useEffect, useState } from 'react';
import { Link } from 'next/link';

function Live() {
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
        <article className={`gencon-2024 squiggly-bg${expanded ? ' expanded' : ''}`}>
            <img className='indy' src='/images/indianapolis.jpeg' alt='The Indianapolis skyline' />
            <strong className='upper-right'>
                COMING LIVE TO YOUR EARS
            </strong>
            <strong className='lower-left'>
                (and for the first time ever, eyes!)
            </strong>
            <h1>
                Gen Con 2024 - Indianapolis
            </h1>
            <h2>TICKETS!</h2>
            <p>
                $6 - <a href="https://www.gencon.com/events/246830" style={{ textDecoration: 'underline', color: 'dodgerblue' }} target='_blank'>Available on Gen Con's event site</a>
            </p>
            <h2>
                When and Where
            </h2>
            <p>
                Friday, August 2nd, 9 PM until Midnight
                <br />
                Crowne Plaza Hotel - Haymarket Station A  - 1st Floor
            </p>
            <h2>
                Who
            </h2>
            <p>
                The entire cast of What's in The Rift:
            </p>
            <ul>
                <li>Josh Burgess</li>
                <li>Yolandie Hamilton</li>
                <li>Grayson Stamm</li>
                <li>Joseph Rutledge</li >
                <li>Summer Schlenker</li >
                <li>Ryan Daylor</li >
                <li>Patty Hamilton</li >
            </ul>
            <h2>
                What
            </h2>
            <p>
                A live taping of What's in The Rift, the popular Actual Play podcast from Gas Station Drugs. We use the <a href="https://cortexrpg.com" target="_blank">Cortex Prime system</a> from Dire Wolf Digital.
                <br />
                We'll be recording a one-shot for distribution on the What's in The Rift podcast feed. Come be a part of our show. In exchange, we'll let you — the audience — determine specific things about our characters and our setting.
            </p>
            <h3>
                AND THE PRIZES
            </h3>
            <p>
                We'll be giving away
            </p>
            <ul>
                <li><strong>2 FIRST PRIZES</strong><br /> What's in The Rift - Gen Con 2024 t-shirts</li>
                <li><strong>1 GRAND PRIZE</strong><br /> A Cortex Prime handbook <i>signed by Cam Banks</i> creator of Cortex Prime.</li>
            </ul>
        </article >
    );
}

export default Live;
