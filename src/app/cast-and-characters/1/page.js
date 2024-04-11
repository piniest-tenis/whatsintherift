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
    const chars = [
        {
            name: 'jessica',
            d_name: 'Jessica Farrokh',
            p_name: 'Ryan Daylor',
            s_name: 'Court',
            src_nm: 'court-4.webp',
            char_link: '',
            description: `Jessica, a 26-year-old woman, has been living as a transient since she was 17 years old. She 
             was kicked out of her home after coming out as transgender. For the past six years, she has been traveling 
             with a small circus, showcasing her acrobatic skills. When she was 19, she had a disturbing encounter with 
             a shapeshifting creature that left her feeling unsettled and questioning the nature of reality.`,
            world_desc: `Where Jessica comes from, sleep operates much differently than it does most other places. Instead of being a constant, people sleep
            more as they age. Newborns do not sleep, while those that die of natural causes do so by slipping into an interminable sleep.`
        },
        {
            name: 'jenny',
            d_name: 'Jenny Thomas',
            p_name: 'Patty Hamilton',
            s_name: 'firefly',
            src_nm: 'Jenny-Thomas-6a.webp',
            char_link: 'jenny-thomas-character-sheet.pdf',
            description: `Jenny, a timid woman in her mid-20s, carries the physical and emotional scars of a devastating
             fire that claimed her mother's life during her childhood. The incident occurred when Jenny's father,
             Stephan, accidentally triggered a small chemical fire in his garage chemistry lab, which rapidly engulfed 
             their house, trapping Jenny and her mother. Miraculously, Jenny managed to survive the ordeal through 
             sheer luck. However, she has since been plagued by a recurring feeling of déjà vu and a haunting sense 
             that something is fundamentally amiss in the world.`,
            world_desc: `Jenny's frame is relatively similar to our own. The only major difference here is that Disney never became as popular as it did in ours.
            Instead, the world has fallen in love with the works of Dr. Seuss, and theme parks and movie franchises based on his stories are commonplace.`
        },
        {
            name: 'bruce',
            d_name: 'Bruce McKinney',
            p_name: 'Grayson Stamm',
            s_name: 'snowed_in_signal',
            src_nm: 'bruce_mckinney.webp',
            char_link: '',
            description: `Bruce, a slightly overweight man entering middle-age, has found contentment in a stable 
             career as a middle manager. He takes great joy in the life he has built alongside his wife, Angie, and his 
             stepson, Hans. His deepest connections revolve around his chosen family, his love for graphic novels, and 
             the frequent voices that fill his mind. Bruce affectionately refers to this phenomenon as his 
             "Angel Radio." Despite the voices, he remains fiercely loyal, genuinely sincere, and constantly strives to 
             do what he believes is morally correct.`,
            world_desc: `In Bruce's world, photography, film, and video do not exist. Everything is an artistic rendering if a representation exists. Artists
            are in extremely high demand and the artwork they produce is venerated. Animation is an emerging art form, and accompanying it is a device used to
            generate smells on demand.`
        },
        {
            name: 'blanche',
            d_name: 'Blanche Boyet',
            p_name: 'Yolandie Hamilton',
            s_name: 'Verinom',
            src_nm: 'blanche_church_of_jason_nomark.webp',
            char_link: '',
            description: `Blanche, a young woman in her 20s with fiery red hair, stands at a height of 3'10". However, 
             in an attempt to boost her self-esteem, she insists on claiming she is 4' tall. She finds herself in 
             constant conflict with her highly religious community, and despite her wavering belief, she strives to 
             conform and fit in. Blanche seeks solace in the companionship of her parakeet, Johnson, who has been 
             missing since she was six years old. Despite Johnson's absence, Blanche firmly believes she catches 
             glimpses of him every now and then.`,
            world_desc: `The frame which Blanche hails from was shaped by the arrival of a deity named Jason, the only begotten son of God, approximately 2000 years ago.
            Jason was insistent that everyone go with the flow, learn to let go, and to live in harmony. He also was just generally regarded as a cool dude.`
        },
        {
            name: 'jackie',
            d_name: 'Jackie McCloud',
            p_name: 'Summer Schlenker',
            s_name: 'Scout_Bobber',
            src_nm: 'jackie-doctor-render.webp',
            char_link: 'Jackie-Character-Sheet.pdf',
            description: `Jackie, a resilient woman in her mid-to-late 30s, embodies the spirit of survival. Against 
             all odds, she has emerged victorious time and again. Jackie has developed a remarkable skill for making 
             the most out of limited resources and mastering the art of sustaining her own well-being. Her tenacity and 
             adaptability have enabled her to navigate challenging circumstances and keep her own body functioning 
             optimally. Throughout her journey, Jackie finds solace in the unwavering companionship of Ace, her 
             faithful canine companion who remains by her side as a constant and loyal friend.`,
            world_desc: `Jackie hails from a world that was first devastated by climate change and then hit with an extremely pernicious parasite. Nearly 70% of her world
            died over the past 20 years. Pockets of survivors have formed tight knit communities built on sharing resources and living off the land.`
        },
        {
            name: 'toska',
            d_name: 'Toska Orange',
            p_name: 'Joseph Rutledge',
            s_name: 'paulekas',
            src_nm: 'toska_orange.webp',
            char_link: '',
            description: `Toska is a man hovering around his forties, residing within a reservation designated for 
             individuals like him. Throughout his existence, he has carried an underlying sense of unease about the 
             world, unable to articulate precisely what feels amiss. Within his society, Toska finds himself excluded 
             from the crucial rites of passage, relegating him to the margins. Consequently, he has developed a keen 
             sense of resourcefulness and wariness as a means of survival.`,
            world_desc: `Everyone in Toska's frame spends the entirety of their lives preparing for the moment they end. Citizens are expected to engage in rituals involving
            intense psychedelics promoting ego death. Those that cannot or will not engage in these rituals are removed from polite society and sent to live in reservations of
            "Denialists." The largest such reservation in the Western Hemisphere is in what we know as the state of Florida.`
        }
    ];
    return (
        <div className={'cast-and-characters'}>
            <div className={`cast-and-characters`}>
                <section className={'character-bucket'}>
                    {chars.map((char) => {
                        return <article key={char.name} className={`character-tile ${char.name} squiggly-bg${expanded ? ' expanded' : ''}`}>
                            <div className={`char-img`}>
                                <img src={`/images/${char.src_nm}`}
                                    alt={`A painted portrait of ${char.d_name}.`} />
                            </div>
                            <strong className='upper-right'>{char.d_name}</strong>
                            <strong className='lower-left'>{char.p_name}</strong>
                            <div className='right-section'>
                                <p className={`character-description`}>{char.description}</p>
                                <p className={`frame-description`}>{char.world_desc}</p>
                            </div>
                        </article>
                    })}
                </section>
            </div>
        </div>
    )
}