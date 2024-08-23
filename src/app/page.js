'use client';
import Link from 'next/link';
import Image from 'next/image';
import darkSpotify from '../../public/images/Spotify_Icon_RGB_White.png';
import lightSpotify from '../../public/images/Spotify_Icon_RGB_Black.png';
import darkApple from '../../public/images/Apple_Podcasts_Icon_wht_lg_060623.svg';
import lightApple from '../../public/images/Apple_Podcasts_Icon_blk_lg_060623.svg';
import { useEffect, useState } from 'react';
import './styles/home-page.modules.scss';
import Particles from './components/Particles';

export default function Home() {
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
    <>
      <article className={`home-page squiggly-bg${expanded ? ' expanded' : ''}`} >
        <h1>What is <u>What's in The Rift</u></h1>
        <p>What's in The Rift is an actual play podcast crewed by Yolandie Hamilton, Joseph Rutledge, Grayson Stamm, Summer Schlenker, Ryan Daylor and Patty Hamilton.</p>
        <p>Josh Burgess serves as the game moderator and primary storyteller.</p>
        <p>We use the Cortex Prime system from Dire Wolf Digital to tell improvised and compelling tales that focus on fiction first. Our stories are rarely the type you may associate with actual play podcasts — no one has fought a dragon or met an elf. <i>Yet.</i></p>
        <p>We spend approximately 35 hours per episode to build a tightly edited, professionally sound designed and coherent story. While we don't hide that this story is part of a game, the story is the star of the show.</p>
        <h3>When and where can I listen?</h3>
        <p>We release fortnightly on Sundays, and you can find us <Link href="/episodes/">on our episodes page</Link> or wherever you find podcasts.</p>
        <ul>
          <li><a href="https://open.spotify.com/show/4rFxNRWtAxkVCwnVr8Xynx" target="_blank">
            <picture>
              <source srcSet={darkSpotify.src} media="(prefers-color-scheme: dark)" />
              <Image src={lightSpotify} alt="Spotify" width={80} height={80} />
            </picture>
          </a></li>
          <li><a href="https://apple.co/3JbqGK2" target="_blank">
            <picture>
              <source srcSet={darkApple.src} media="(prefers-color-scheme: dark)" />
              <Image src={lightApple} alt="Apple Podcasts" width={80} height={80} />
            </picture>
          </a></li>
        </ul>
      </article >
      <div className='page-particles'>
        <Particles />
      </div>
    </>
  );
}
