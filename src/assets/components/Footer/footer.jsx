import { useState } from 'react';
import Popular from './Popular/popular'
import ArtsCulture from './ArtCulture/artCulture'
import Outdoors from './Outdoors/outdoors'
import Mountains from './Mountains/mountains'
import Beach from './Beach/beach'
import UniqueStays from './UniqueStays/uniqueStays'
import Categories from './Categories/categories'
import ThingsToDo from './ThingsToDo/thingsToDo'
import GlobeIcon from '../img/globe.svg'
import './footer.css'
import fbIcon from '../img/fb.svg'
import instaIcon from '../img/instagram.svg'
import twitterIcon from '../img/twitter.svg'
function Footer() {
    const [selectedFooter, setSelectedFooter] = useState(1);

    const checkFooter = (index) => () => {
        setSelectedFooter(index);
    };

    return (
        <>
            <div className="footer">
                <div className="inspiration dark-txt ">Inspiration for future getaways</div>
                <div className="footer-list">
                    <div className={`footer-box ${selectedFooter === 1 ? 'selected' : ''}`} onClick={checkFooter(1)}>Popular</div>
                    <div className={`footer-box ${selectedFooter === 2 ? 'selected' : ''}`} onClick={checkFooter(2)}>Arts & culture</div>
                    <div className={`footer-box ${selectedFooter === 3 ? 'selected' : ''}`} onClick={checkFooter(3)}>Outdoors</div>
                    <div className={`footer-box ${selectedFooter === 4 ? 'selected' : ''}`} onClick={checkFooter(4)}>Mountains</div>
                    <div className={`footer-box ${selectedFooter === 5 ? 'selected' : ''}`} onClick={checkFooter(5)}>Beach</div>
                    <div className={`footer-box ${selectedFooter === 6 ? 'selected' : ''}`} onClick={checkFooter(6)}>Unique stays</div>
                    <div className={`footer-box ${selectedFooter === 7 ? 'selected' : ''}`} onClick={checkFooter(7)}>Categories</div>
                    <div className={`footer-box ${selectedFooter === 8 ? 'selected' : ''}`} onClick={checkFooter(8)}>Things to do</div>
                </div>
                {selectedFooter === 1 && <Popular />}
                {selectedFooter === 2 && <ArtsCulture />}
                {selectedFooter === 3 && <Outdoors />}
                {selectedFooter === 4 && <Mountains />}
                {selectedFooter === 5 && <Beach />}
                {selectedFooter === 6 && <UniqueStays />}
                {selectedFooter === 7 && <Categories />}
                {selectedFooter === 8 && <ThingsToDo />}
            </div>
            <footer>
                <div className="support">
                    <div className="support-items">
                        <div className="footer-grid-item dark-txt">Support</div>
                        <div className="footer-grid-item"><p>Help Centre</p></div>
                        <div className="footer-grid-item"><p>AirCover</p></div>
                        <div className="footer-grid-item"><p>Anti-discrimination</p></div>
                        <div className="footer-grid-item"><p>Disability support</p></div>
                        <div className="footer-grid-item"><p>Cancellation options</p></div>
                        <div className="footer-grid-item"><p>Report neighbourhood concern</p></div>

                    </div>
                    <div className="hosting-items">
                        <div className="footer-grid-item dark-txt">Hosting</div>
                        <div className="footer-grid-item"><p>Airbnb your home</p></div>
                        <div className="footer-grid-item"><p>AirCover for Hosts</p></div>
                        <div className="footer-grid-item"><p>Hosting resources</p></div>
                        <div className="footer-grid-item"><p>Community forum</p></div>
                        <div className="footer-grid-item"><p>Hosting responsibly</p></div>
                        <div className="footer-grid-item"><p>Join a free Hosting class</p></div>
                    </div>
                    <div className="airbnb-items">
                        <div className="footer-grid-item dark-txt">Airbnb</div>
                        <div className="footer-grid-item"><p>Newsroom</p></div>
                        <div className="footer-grid-item"><p>New features</p></div>
                        <div className="footer-grid-item"><p>Careers</p></div>
                        <div className="footer-grid-item"><p>Investors</p></div>
                        <div className="footer-grid-item"><p>Airbnb.org emergency stays</p></div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="copyright-left">
                        <span>&copy; 2024 Airbnb, Inc.</span>
                        <span className='copyright-left-dot'>&middot;</span>
                        <span className='underline'>Privacy</span>
                        <span className='copyright-left-dot'>&middot;</span>
                        <span className='underline'>Terms</span>
                        <span className='copyright-left-dot'>&middot;</span>
                        <span className='underline'>Sitemap</span>
                        <span className='copyright-left-dot'>&middot;</span>
                        <span className='underline'>Company details</span>
                    </div>
                    <div className="copyright-right">
                        <div className='flex-center'><img src={GlobeIcon} alt="globe" className="globe-icon" height='14px' /><span>English (IN)</span></div>
                        <div className='flex-center'>
                            <span>&#8377; INR</span>
                        </div>
                        <div className='flex-center'>
                            <span><img src={fbIcon} alt="Navigate to Facebook" height='18px'/></span>
                            <span><img src={twitterIcon} alt="Navigate to Twitter" height='18px'/></span>
                            <span><img src={instaIcon} alt="Navigate to Instagram" height='18px'/></span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
