'use client';
import { useEffect, useState } from 'react';

export default function MailingList() {
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        let timer;
        timer = setTimeout(() => {
            setExpanded(true);
        }, 1020);

        return () => {
            clearTimeout(timer);
        }
    }, []);
    const embedForm = `<link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
        <div id="mc_embed_signup">
            <form action="https://the-dope-show.us22.list-manage.com/subscribe/post?u=9086b862353ba9894ffb161d5&amp;id=d3b7585100&amp;f_id=0050c8e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
                    <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                    <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" value="" required=""></div><div class="mc-field-group"><label for="mce-FNAME">First Name </label><input type="text" name="FNAME" class=" text" id="mce-FNAME" value=""></div>
                <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display: none;"></div>
                    <div class="response" id="mce-success-response" style="display: none;"></div>
                </div><div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_9086b862353ba9894ffb161d5_d3b7585100" tabindex="-1" value=""></div><div class="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe"></div>
            </div>
        </form>
        </div>
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>`;
    return (
        <div className='mailing-list'>
            <article className={`squiggly-bg${expanded ? ' expanded' : ''}`}>
                <p>
                    Want the latest information from The Rift? In our mailer, you'll find:
                </p>
                <ul>
                    <li>
                        Information on the forthcoming Season 2 of What's in The Rift
                    </li>
                    <li>
                        Opportunities to interact with the cast
                    </li>
                    <li>
                        And coupons for merchandise
                    </li>
                </ul>
                <p>
                    We promise to send you the fewest emails we possibly can, and only if we - as email-havers ourselves - would actually want that email.
                </p>
                <div id="mc_embed_shell" dangerouslySetInnerHTML={{ __html: embedForm }} />
                <strong className='upper-right'>I cannot help you</strong>
                <strong className='lower-left'>Unless you help yourself</strong>
            </article>
        </div>
    )
}