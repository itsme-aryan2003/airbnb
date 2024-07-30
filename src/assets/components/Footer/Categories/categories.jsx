import React, { useState, useRef, useEffect } from "react";
import arrowIconSimple from '../../img/arrow-without-circle.svg'
const categories = [
  { title: 'Amazing Pools', subtitle: '' },
  { title: 'Arctic', subtitle: '' },
  { title: 'Camping', subtitle: '' },
  { title: 'Camper Vans', subtitle: '' },
  { title: 'Castles', subtitle: '' },
  { title: 'Containers', subtitle: '' },
  { title: 'Countryside', subtitle: '' },
  { title: 'Design', subtitle: '' },
  { title: 'Earth Homes', subtitle: '' },
  { title: 'Farms', subtitle: '' },
  { title: 'National Parks', subtitle: '' },
  { title: 'Vineyards', subtitle: '' },
  { title: 'OMG!', subtitle: '' },
  { title: 'Tiny Homes', subtitle: '' },
  { title: 'Towers', subtitle: '' },
  { title: 'Windmills', subtitle: '' },
  { title: 'Luxe', subtitle: '' },
]
function Categories() {
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
            setCounter(totalItems < categories.length ? totalItems : categories.length);
          } else {
            setCounter(categories.length);
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
      <div className="grid-special" ref={elementRef}>
        {categories.slice(0, counter - 1).map((item, index) => (
          <div className="grid-items" key={index}>
            <div className="large-txt dark-txt small-gap">{item.title}</div>
            <div className="small-txt light-txt small-gap">{item.subtitle}</div>
          </div>
        ))}
        {!showAll && counter < categories.length && (
          <div className="grid-items" onClick={handleSeeMore}>
            <div className="large-txt dark-txt show-more">Show More </div>
            <img src={arrowIconSimple} alt="" height='12px' className='show-img'></img>
          </div>
        )}
      </div>
    </>
  );
}

export default Categories;
