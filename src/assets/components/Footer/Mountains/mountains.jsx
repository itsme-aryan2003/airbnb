import React, { useState, useRef, useEffect } from "react";
import arrowIconSimple from '../../img/arrow-without-circle.svg'
const mountains = [
  { title: 'Mentone', subtitle: 'Cabin rentals' },
  { title: 'Sedona', subtitle: 'Cottage rentals' },
  { title: 'Helen', subtitle: 'Holiday rentals' },
  { title: 'Pine Mountain', subtitle: 'Holiday rentals' },
  { title: 'Stone Mountain', subtitle: 'Holiday rentals' },
  { title: 'Island Park', subtitle: 'Flat rentals' },
  { title: 'Blue Mountains', subtitle: 'Villa rentals' },
  { title: 'Asheville', subtitle: 'Rentals with pools' },
  { title: 'Blowing Rock', subtitle: 'Cabin rentals' },
  { title: 'Boone', subtitle: 'Holiday rentals' },
  { title: 'Hochatown', subtitle: 'Holiday rentals' },
  { title: 'Pigeon Forge', subtitle: 'Holiday rentals' },
  { title: 'Townsend', subtitle: 'Holiday rentals' },
  { title: 'Wears Valley', subtitle: 'Holiday rentals' },
  { title: 'Cabins', subtitle: 'Holiday rentals' },
]
function Mountains() {
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
            setCounter(totalItems < mountains.length ? totalItems : mountains.length);
          } else {
            setCounter(mountains.length);
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
        {mountains.slice(0, counter - 1).map((item, index) => (
          <div className="grid-items" key={index}>
            <div className="large-txt dark-txt small-gap">{item.title}</div>
            <div className="small-txt light-txt small-gap">{item.subtitle}</div>
          </div>
        ))}
        {!showAll && counter < mountains.length && (
          <div className="grid-items" onClick={handleSeeMore}>
            <div className="large-txt dark-txt show-more">Show More </div>
            <img src={arrowIconSimple} alt="" height='12px' className='show-img'></img>
          </div>
        )}
      </div>
    </>
  );
}

export default Mountains;
