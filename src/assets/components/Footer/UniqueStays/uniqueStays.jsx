
import React, { useState, useRef, useEffect } from "react";
import arrowIconSimple from '../../img/arrow-without-circle.svg'
const uniqueStays = [
  { title: 'Yurt Rentals', subtitle: 'United States' },
  { title: 'Yurt Rentals', subtitle: 'United Kingdom' },
  { title: 'Castle Rentals', subtitle: 'United States' },
  { title: 'Houseboats', subtitle: 'United States' },
  { title: 'Holiday Caravans', subtitle: 'United Kingdom' },
  { title: 'Private Island Rentals', subtitle: 'United States' },
  { title: 'Farm Houses', subtitle: 'United States' },
  { title: 'Farm Cottages', subtitle: 'United Kingdom' },
  { title: 'Cabin Rentals', subtitle: 'Australia' },
  { title: 'Luxury Cabins', subtitle: 'United Kingdom' },
  { title: 'Luxury Cabins', subtitle: 'United States' },
  { title: 'Holiday Chalets', subtitle: 'United Kingdom' },
  { title: 'Cottage Rentals', subtitle: 'United States' },
  { title: 'Holiday Cottages', subtitle: 'United Kingdom' },
  { title: 'Mansion Rentals', subtitle: 'United States' },
  { title: 'Villa Rentals', subtitle: 'United Kingdom' },
  { title: 'Holiday Bungalows', subtitle: 'United Kingdom' },
  { title: 'Bungalow Rentals', subtitle: 'United States' },
  { title: 'Condo Rentals', subtitle: 'United States' },
  { title: 'Holiday Apartments', subtitle: 'Australia' },
  { title: 'Holiday Houses', subtitle: 'United States' },
  { title: 'Holiday Houses', subtitle: 'United Kingdom' },
  { title: 'Private Holiday Rentals', subtitle: 'United Kingdom' },
  { title: 'Big House Rentals', subtitle: 'United States' },
  { title: 'Big Cottages', subtitle: 'Australia' },
  { title: 'Large Villas', subtitle: 'United Kingdom' },
  { title: 'House Rentals with a Pool', subtitle: 'United States' },
  { title: 'Cabin Rentals with a Pool', subtitle: 'United States' },
  { title: 'Villas with a Pool', subtitle: 'United Kingdom' },
  { title: 'Apartments with a Hot Tub', subtitle: 'United States' },
  { title: 'Holiday Cottages with a Hot Tub', subtitle: 'United Kingdom' },
  { title: 'Beach Cabins', subtitle: 'United States' },
  { title: 'Beach Condos', subtitle: 'United States' },
  { title: 'Beachfront Rentals', subtitle: 'United States' },
  { title: 'Beach Houses', subtitle: 'United Kingdom' },
  { title: 'Beach Villas', subtitle: 'United Kingdom' },
  { title: 'Coastal Cottages', subtitle: 'United Kingdom' },
  { title: 'Pet-Friendly Vacation Rentals', subtitle: 'United States' },
  { title: 'Pet-Friendly Beach Rentals', subtitle: 'United States' },
  { title: 'Pet-Friendly Cabin Rentals', subtitle: 'United States' },
  { title: 'Dog-Friendly Cottages', subtitle: 'United Kingdom' },
  { title: 'Luxury Dog-Friendly Cottages', subtitle: 'United Kingdom' },
]
function UniqueStays() {
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
            setCounter(totalItems < uniqueStays.length ? totalItems : uniqueStays.length);
          } else {
            setCounter(uniqueStays.length);
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
        {uniqueStays.slice(0, counter - 1).map((item, index) => (
          <div className="grid-items" key={index}>
            <div className="large-txt dark-txt small-gap">{item.title}</div>
            <div className="small-txt light-txt small-gap">{item.subtitle}</div>
          </div>
        ))}
        {!showAll && counter < uniqueStays.length && (
          <div className="grid-items" onClick={handleSeeMore}>
            <div className="large-txt dark-txt show-more">Show More </div>
            <img src={arrowIconSimple} alt="" height='12px' className='show-img'></img>
          </div>
        )}
      </div>
    </>
  );
}

export default UniqueStays;
