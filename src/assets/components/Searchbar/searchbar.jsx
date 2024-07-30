import '../fonts/fonts.css'
import './searchbar.css'
import SearchIcon from '../img/search.svg'
import React, { useState, useEffect } from 'react';
import EditableDiv from './special';





function Searchbar() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // User is scrolling down
            setShowHeader(false);
        } else if (window.scrollY === 0) {
            // User is back to the top
            setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);
    const checker = (clss, contentReplace1, contentReplace2, replaceWith) => {
        if (!showHeader && document.querySelector(clss) !== null) {
            const element = document.querySelector(clss)
            element.textContent = replaceWith
        }
        else if (document.querySelector(clss) !== null) {
            document.querySelector(clss).textContent = contentReplace1 + contentReplace2
        }
    }
    checker('.gone-where', 'Where', '', 'Anywhere')
    checker('.gone-check-in', 'Check', ' In', 'Any Week')
    checker('.gone-search-destination', 'Search', ' destination', '')
    checker('.gone-add-dates', 'Add', ' dates', '')
    checker('.gone-add-dates-1', 'Add', 'dates', '')
    checker('.gone', 'Check', ' out', '')
    checker('.gone-who', 'Who', '', '')
    return (
        <>

            <div className={`Searchbar ${showHeader ? '' : 'hidden'}`}>
                <div className={`location flexbox ${showHeader? 'd1':''}`}>
                    <div >
                        <div className={`t1-dark ${showHeader ? '' : 'gone-where'}`} >Where</div>
                        <div className={`t1-light crsr-txt ${showHeader ? '' : 'gone-search-destination'}`}><EditableDiv/></div>
                    </div>
                </div>
                <div className={`check-in flexbox box ${showHeader ? 'd2':''}`}>
                    <div>
                        <div className={`t1-dark ${showHeader ? '' : 'gone-check-in'}`}>Check In</div>
                        <div className={`t1-light ${showHeader ? '' : 'gone-add-dates-1'}`}>Add dates</div>
                    </div>
                </div>
                <div className={`${!showHeader ? '' : 'check-out d3'} flexbox box`}>
                    <div>
                        <div className={`t1-dark ${showHeader ? '' : 'gone'}`}>Check Out</div>
                        <div className={`t1-light ${showHeader ? '' : 'gone-add-dates'}`}>Add dates</div>
                    </div>
                </div>
                <div className={`who box ${showHeader ? 'd4':''}`}>
                    <div className='who-child'>
                        <div>
                            <div className={`t1-dark ${showHeader ? '' : 'gone-who'}`}>Who</div>
                            <div className="t1-light">Add Guests</div>
                        </div >
                        <div className="search flexbox"><img src={SearchIcon} alt="" height={`${showHeader ? '48px' : '32px'}`} /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Searchbar