import React, { useState, useRef, useEffect } from "react";
import arrowIconSimple from '../../img/arrow-without-circle.svg'
const artCulture = [
  { title: 'Phoenix', subtitle: 'Rentals with pools' },
  { title: 'Hot Springs', subtitle: 'Apartment rentals' },
  { title: 'Los Angeles', subtitle: 'Rentals with pools' },
  { title: 'San Diego', subtitle: 'Beach house rentals' },
  { title: 'San Francisco', subtitle: 'Holiday rentals' },
  { title: 'Barcelona', subtitle: 'Holiday rentals' },
  { title: 'Prague', subtitle: 'Holiday rentals' },
  { title: 'Washington', subtitle: 'Holiday rentals' },
  { title: 'Keswick', subtitle: 'Holiday rentals' },
  { title: 'London', subtitle: 'House rentals' },
  { title: 'Scarborough', subtitle: 'Holiday rentals' },
  { title: 'Sherwood Forest', subtitle: 'Holiday rentals' },
  { title: 'York', subtitle: 'Pet-friendly rentals' },
  { title: 'Paris', subtitle: 'Villa rentals' },
  { title: 'Rhodes', subtitle: 'Cottage rentals' },
  { title: 'Nashville', subtitle: 'Holiday rentals' },
  { title: 'Dublin', subtitle: 'House rentals' },
  { title: 'Florence', subtitle: 'Apartment rentals' },
  { title: 'Rome', subtitle: 'Holiday rentals' },
  { title: 'Lisbon', subtitle: 'Beachfront rentals' },
  { title: 'Grand Isle', subtitle: 'Holiday rentals' },
  { title: 'New Orleans', subtitle: 'Flat rentals' },
  { title: 'Martha\'s Vineyard', subtitle: 'Holiday rentals' },
  { title: 'South Haven', subtitle: 'Apartment rentals' },
  { title: 'Duluth', subtitle: 'Pet-friendly rentals' },
  { title: 'Amsterdam', subtitle: 'Cabin rentals' },
  { title: 'New York', subtitle: 'Holiday rentals' },
  { title: 'Nice', subtitle: 'Holiday rentals' },
  { title: 'Inverness', subtitle: 'Cottage rentals' },
  { title: 'Málaga', subtitle: 'Beachfront rentals' },
  { title: 'Valencia', subtitle: 'Flat rentals' },
  { title: 'Split', subtitle: 'Flat rentals' },
  { title: 'Nashville', subtitle: 'Mansion rentals' },
  { title: 'Austin', subtitle: 'Rentals with pools' },
  { title: 'Houston', subtitle: 'Holiday rentals' },
  { title: 'Dartmouth', subtitle: 'Holiday rentals' },
  { title: 'Edinburgh', subtitle: 'Flat rentals' },
  { title: 'Liverpool', subtitle: 'Holiday rentals' },
  { title: 'St Ives', subtitle: 'Cottage rentals' },
  { title: 'Lake Powell', subtitle: 'Holiday rentals' },
  { title: 'Lake Anna', subtitle: 'Cabin rentals' },
  { title: 'Leavenworth', subtitle: 'Rentals with pools' },
  { title: 'Seattle', subtitle: 'Holiday rentals' },
]
function ArtCulture() {
  const [counter, setCounter] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const elementRef = useRef(null);
  const rows = 3; // number of rows you want to display

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === elementRef.current) {
          const elementWidth = entry.contentRect.width;
          const itemsPerRow = Math.floor(elementWidth / 200);
          const totalItems = itemsPerRow * rows;
          if (!showAll) {
            setCounter(totalItems < artCulture.length ? totalItems : artCulture.length);
          } else {
            setCounter(artCulture.length);
          }
        }
      }
    });

    const element = elementRef.current;

    if (element) {
      resizeObserver.observe(element);
    }

    return () => {
      if (element) {
        resizeObserver.unobserve(element);
      }
    };
  }, [rows, showAll]);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className="grid" ref={elementRef}>
        {artCulture.slice(0, counter - 1).map((item, index) => (
          <div className="grid-items" key={index}>
            <div className="large-txt dark-txt small-gap">{item.title}</div>
            <div className="small-txt light-txt small-gap">{item.subtitle}</div>
          </div>
        ))}
        {!showAll && counter < artCulture.length && (
          <div className="grid-items" onClick={handleSeeMore}>
            <div className="large-txt dark-txt show-more">Show More </div>
            <img src={arrowIconSimple} alt="" height='12px' className='show-img'></img>
          </div>
        )}
      </div>
    </>
  );
}

export default ArtCulture;
