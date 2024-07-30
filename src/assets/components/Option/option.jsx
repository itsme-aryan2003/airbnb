import React, { useRef, useState, useEffect } from 'react';
import './option.css';
import img1 from '../img/product/1.webp';
import img2 from '../img/product/2.jpg';
import img3 from '../img/product/3.jpg';
import img4 from '../img/product/4.jpg';
import img5 from '../img/product/5.jpg';
import img6 from '../img/product/6.jpg';
import img7 from '../img/product/7.jpg';
import img8 from '../img/product/8.jpg';
import img9 from '../img/product/9.jpg';
import img10 from '../img/product/10.jpg';
import img11 from '../img/product/11.jpg';
import img12 from '../img/product/12.jpg';
import img13 from '../img/product/13.jpg';
import img14 from '../img/product/14.jpg';
import img15 from '../img/product/15.jpg';
import img16 from '../img/product/16.jpg';
import img17 from '../img/product/17.jpg';
import img18 from '../img/product/18.jpg';
import img19 from '../img/product/19.jpg';
import img20 from '../img/product/20.jpg';
import img21 from '../img/product/21.jpg';
import img22 from '../img/product/22.jpg';
import img23 from '../img/product/23.jpg';
import img24 from '../img/product/24.jpg';
import img25 from '../img/product/25.jpg';
import img26 from '../img/product/26.jpg';
import img27 from '../img/product/27.jpg';
import img28 from '../img/product/28.jpg';
import img29 from '../img/product/29.jpg';
import img30 from '../img/product/30.jpg';
import img31 from '../img/product/31.jpg';
import img32 from '../img/product/32.jpg';
import img33 from '../img/product/33.jpg';
import img34 from '../img/product/34.jpg';
import img35 from '../img/product/35.jpg';
import img36 from '../img/product/36.jpg';
import img37 from '../img/product/37.jpg';
import img38 from '../img/product/38.jpg';
import img39 from '../img/product/39.jpg';
import img40 from '../img/product/40.jpg';
import img41 from '../img/product/41.jpg';
import img42 from '../img/product/42.jpg';
import img43 from '../img/product/43.jpg';
import img44 from '../img/product/44.jpg';
import img45 from '../img/product/45.jpg';
import img46 from '../img/product/46.jpg';
import img47 from '../img/product/47.jpg';
import img48 from '../img/product/48.jpg';
import img49 from '../img/product/49.jpg';
import img50 from '../img/product/50.jpg';
import img51 from '../img/product/51.jpg';
import img52 from '../img/product/52.jpg';
import img53 from '../img/product/53.jpg';
import img54 from '../img/product/54.jpg';
import img55 from '../img/product/55.jpg';
import img56 from '../img/product/56.jpg';
import img57 from '../img/product/57.jpg';
import img58 from '../img/product/58.jpg';
import img59 from '../img/product/59.jpg';
import img60 from '../img/product/60.jpg';
import img61 from '../img/product/61.jpg';
import img62 from '../img/product/62.jpg';
import arrow from '../img/arrow.svg';

const product = [
  { title: 'Icons', path: img1, key: 1 },
  { title: 'Amazing views', path: img2, key: 2 },
  { title: 'Farms', path: img3, key: 3 },
  { title: 'Lakefront', path: img4, key: 4 },
  { title: 'OMG!', path: img5, key: 5 },
  { title: 'beachfront', path: img6, key: 6 },
  { title: 'Amazing pools', path: img7, key: 7 },
  { title: 'Countryside', path: img8, key: 8 },
  { title: 'Cabins', path: img9, key: 9 },
  { title: 'Luxe', path: img10, key: 10 },
  { title: 'Treehouses', path: img11, key: 11 },
  { title: 'Rooms', path: img12, key: 12 },
  { title: 'Castles', path: img13, key: 13 },
  { title: 'Mansions', path: img14, key: 14 },
  { title: 'Trending', path: img15, key: 15 },
  { title: 'Top of the world', path: img16, key: 16 },
  { title: 'Tiny homes', path: img17, key: 17 },
  { title: 'National parks', path: img18, key: 18 },
  { title: 'Design', path: img19, key: 19 },
  { title: 'Tropical', path: img20, key: 20 },
  { title: 'Historical homes', path: img21, key: 21 },
  { title: 'Earth homes', path: img22, key: 22 },
  { title: 'New', path: img23, key: 23 },
  { title: 'Off-the-grid', path: img24, key: 24 },
  { title: 'Vineyards', path: img25, key: 25 },
  { title: 'Bed & breakfasts', path: img26, key: 26 },
  { title: 'A-frames', path: img27, key: 27 },
  { title: 'Islands', path: img28, key: 28 },
  { title: 'Top cities', path: img29, key: 29 },
  { title: 'Arctic', path: img30, key: 30 },
  { title: 'Camping', path: img31, key: 31 },
  { title: 'Caves', path: img32, key: 32 },
  { title: 'Houseboats', path: img33, key: 33 },
  { title: 'Riads', path: img34, key: 34 },
  { title: `Chef's kitchens`, path: img35, key: 35 },
  { title: 'Play', path: img36, key: 36 },
  { title: 'Ryokans', path: img37, key: 37 },
  { title: 'Boats', path: img38, key: 38 },
  { title: 'Domes', path: img39, key: 39 },
  { title: 'Grand pianos', path: img40, key: 40 },
  { title: 'Containers', path: img41, key: 41 },
  { title: 'Skiing', path: img42, key: 42 },
  { title: 'Golfing', path: img43, key: 43 },
  { title: 'Barns', path: img44, key: 44 },
  { title: 'Casas particulares', path: img45, key: 45 },
  { title: 'Dammusi', path: img46, key: 46 },
  { title: 'Windmills', path: img47, key: 47 },
  { title: 'Trulli', path: img48, key: 48 },
  { title: 'Creative spaces', path: img49, key: 49 },
  { title: 'Adapted', path: img50, key: 50 },
  { title: 'Yurts', path: img51, key: 51 },
  { title: 'Cycladic homes', path: img52, key: 52 },
  { title: 'Surfing', path: img53, key: 53 },
  { title: 'Ski-in/out', path: img54, key: 54 },
  { title: 'Hanoks', path: img55, key: 55 },
  { title: `Shepherds huts`, path: img56, key: 56 },
  { title: 'Desert', path: img57, key: 57 },
  { title: 'Minsus', path: img58, key: 58 },
  { title: 'Towers', path: img59, key: 59 },
  { title: 'Camper vans', path: img60, key: 60 },
  { title: 'Beach', path: img61, key: 61 },
  { title: 'Lake', path: img62, key: 62 },
];


function Option({ onSendData }) {
  const parentRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const sendDatatoParent = (key,str) => () => {
    onSendData(key,str);
    setSelectedIndex(key);
  };

  const listItems = product.map((product) => (
    <div className="product-image" key={product.key} onClick={sendDatatoParent(product.key,product.title)}>
      <div className={`image ${product.title}`}>
        <img src={product.path} alt={product.title} height='24px' />
      </div>
      <p className={selectedIndex ===product.key?'selected':'border-bottom'}>{product.title}</p>
    </div>
  ));

  const scrollHorizontally = (direction) => {
    if (parentRef.current) {
      const scrollAmount = parentRef.current.clientWidth * 0.75;
      parentRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current) {
        setScrollValue(parentRef.current.scrollLeft);
      }
    };

    const refCurrent = parentRef.current;
    if (refCurrent) {
      refCurrent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className='container1'>
        <div
          className={`${scrollValue > 30 ? 'left-container' : 'go-behind'}`}
          id='change-left'
          onClick={() => {
            if (scrollValue <= 30) {
              scrollHorizontally('right');
            } else {
              scrollHorizontally('left');
            }
          }}
        >
          <img src={arrow} alt="Scroll left" height='26px' />
        </div>
        <div className="option" id='parentDiv' ref={parentRef}>
          <div className='left-cover'></div>
          {listItems}
        </div>
        <div
          className={`${scrollValue > 4180 ? 'left-container' : 'go-behind'}`}
          onClick={() => { scrollHorizontally('right'); }}
        >
          <img src={arrow} alt="Scroll right" height='26px' />
        </div>
      </div>
    </>
  );
}

export default Option;
