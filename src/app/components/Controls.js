import Nav from './Nav';
import '../styles/global.modules.scss';

export default function Controls() {
    return (
        <div className='controls'>
            <Nav />
            <a className='logo' href='/'>what's in <strong>the rift</strong></a>
            <a className="gsd" href="https://gasstationdrugs.com" target="_blank">
                <img src="/images/Stripped-GSD-logo.webp" alt="Gas Station Drugs Logo" />
            </a>
        </div>
    )
}
