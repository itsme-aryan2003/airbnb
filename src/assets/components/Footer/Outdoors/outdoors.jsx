import React, { useState, useRef, useEffect } from "react";
import arrowIconSimple from '../../img/arrow-without-circle.svg'
const outdoor = [
  { title: 'Lake Martin', subtitle: 'Lakehouse rentals' },
  { title: 'Banff', subtitle: 'Flat rentals' },
  { title: 'Nerja', subtitle: 'House rentals' },
  { title: 'Greer', subtitle: 'Holiday rentals' },
  { title: 'Lake Havasu City', subtitle: 'House rentals' },
  { title: 'Lake Powell', subtitle: 'Holiday rentals' },
  { title: 'North Rim', subtitle: 'Holiday rentals' },
  { title: 'Payson', subtitle: 'Holiday rentals' },
  { title: 'Pinetop-Lakeside', subtitle: 'Holiday rentals' },
  { title: 'Red Rock', subtitle: 'Holiday rentals' },
  { title: 'Dinner Plain', subtitle: 'Pet-friendly rentals' },
  { title: 'Streaky Bay', subtitle: 'Holiday rentals' },
  { title: 'Emerald Lake', subtitle: 'Holiday rentals' },
  { title: 'Vancouver Island', subtitle: 'Cabin rentals' },
  { title: 'Victoria', subtitle: 'Flat rentals' },
  { title: 'Idyllwild-Pine Cove', subtitle: 'House rentals' },
  { title: 'Mammoth Lakes', subtitle: 'Holiday rentals' },
  { title: 'Palm Desert', subtitle: 'Flat rentals' },
  { title: 'Shaver Lake', subtitle: 'Holiday rentals' },
  { title: 'South Lake Tahoe', subtitle: 'Holiday rentals' },
  { title: 'Cultus Lake', subtitle: 'Cottage rentals' },
  { title: 'Georgian Bay', subtitle: 'Holiday rentals' },
  { title: 'Manitoulin Island', subtitle: 'Holiday rentals' },
  { title: 'Ottawa River', subtitle: 'Cottage rentals' },
  { title: 'The Blue Mountains', subtitle: 'Holiday rentals' },
  { title: 'West Kelowna', subtitle: 'Beachfront rentals' },
  { title: 'Gran Canaria', subtitle: 'Cabin rentals' },
  { title: 'Lanzarote', subtitle: 'Cottage rentals' },
  { title: 'Castle Hill', subtitle: 'Holiday rentals' },
  { title: 'Aspen', subtitle: 'Cabin rentals' },
  { title: 'Colorado Springs', subtitle: 'Holiday rentals' },
  { title: 'Denver', subtitle: 'Holiday rentals' },
  { title: 'Durango', subtitle: 'Pet-friendly rentals' },
  { title: 'Estes Park', subtitle: 'Flat rentals' },
  { title: 'Grand Lake', subtitle: 'Holiday rentals' },
  { title: 'Keystone', subtitle: 'Holiday rentals' },
  { title: 'Vail', subtitle: 'Villa rentals' },
  { title: 'Winter Park', subtitle: 'Apartment rentals' },
  { title: 'Salcombe', subtitle: 'Holiday rentals' },
  { title: 'Swanage', subtitle: 'Holiday rentals' },
  { title: 'Cape Coral', subtitle: 'Holiday rentals' },
  { title: 'Blue Ridge', subtitle: 'House rentals' },
  { title: 'Jekyll Island', subtitle: 'Beachfront rentals' },
  { title: 'Lake Lanier', subtitle: 'Pet-friendly rentals' },
  { title: 'Corfu', subtitle: 'House rentals' },
  { title: 'McCall', subtitle: 'Apartment rentals' },
  { title: 'Clear Lake', subtitle: 'Holiday rentals' },
  { title: 'Lough Eske', subtitle: 'Holiday rentals' },
  { title: 'Lake Cumberland', subtitle: 'Cabin rentals' },
  { title: 'Portland', subtitle: 'Cottage rentals' },
  { title: 'South Portland', subtitle: 'Holiday rentals' },
  { title: 'Deep Creek Lake', subtitle: 'Chalet rentals' },
  { title: 'Lake Michigan Beach', subtitle: 'Lakehouse rentals' },
  { title: 'Lakeside', subtitle: 'Holiday rentals' },
  { title: 'Torch Lake', subtitle: 'Pet-friendly rentals' },
  { title: 'Traverse City', subtitle: 'Flat rentals' },
  { title: 'Upper Peninsula of Michigan', subtitle: 'Holiday rentals' },
  { title: 'Branson', subtitle: 'Apartment rentals' },
  { title: 'Lake of the Ozarks', subtitle: 'Holiday rentals' },
  { title: 'Big Sky', subtitle: 'House rentals' },
  { title: 'West Yellowstone', subtitle: 'Apartment rentals' },
  { title: 'Mount Charleston', subtitle: 'Holiday rentals' },
  { title: 'Cloudcroft', subtitle: 'Holiday rentals' },
  { title: 'Red River', subtitle: 'Holiday rentals' },
  { title: 'Bellingen', subtitle: 'Holiday rentals' },
  { title: 'Brunswick Heads', subtitle: 'Pet-friendly rentals' },
  { title: 'Adirondack Mountains', subtitle: 'Holiday rentals' },
  { title: 'Lake Placid', subtitle: 'Holiday rentals' },
  { title: 'Niagara Falls', subtitle: 'Cottage rentals' },
  { title: 'Bald Head Island', subtitle: 'Cottage rentals' },
  { title: 'Bryson City', subtitle: 'Apartment rentals' },
  { title: 'Emerald Isle', subtitle: 'House rentals' },
  { title: 'Lake Gaston', subtitle: 'Holiday rentals' },
  { title: 'Lake Lure', subtitle: 'Holiday rentals' },
  { title: 'Lake Norman of Catawba', subtitle: 'Holiday rentals' },
  { title: 'Mount Airy', subtitle: 'Holiday rentals' },
  { title: 'Oak Island', subtitle: 'House rentals' },
  { title: 'Geneva-on-the-Lake', subtitle: 'Holiday rentals' },
  { title: 'Medicine Park', subtitle: 'Holiday rentals' },
  { title: 'Turner Falls', subtitle: 'Holiday rentals' },
  { title: 'Muskoka Lakes', subtitle: 'Holiday rentals' },
  { title: 'Tobermory', subtitle: 'Cabin rentals' },
  { title: 'Bend', subtitle: 'House rentals' },
  { title: 'Crater Lake', subtitle: 'Lakehouse rentals' },
  { title: 'Northern Oregon Coast Range', subtitle: 'Holiday rentals' },
  { title: 'Sunriver', subtitle: 'Holiday rentals' },
  { title: 'Lake Harmony', subtitle: 'Holiday rentals' },
  { title: 'Mount Pocono', subtitle: 'Holiday rentals' },
  { title: 'Mont-Tremblant', subtitle: 'Holiday rentals' },
  { title: 'Aviemore', subtitle: 'Chalet rentals' },
  { title: 'Isle of Mull', subtitle: 'Cottage rentals' },
  { title: 'Robe', subtitle: 'Holiday rentals' },
  { title: 'Mountain Rest', subtitle: 'Holiday rentals' },
  { title: 'St Helens', subtitle: 'Holiday rentals' },
  { title: 'United States', subtitle: 'Holiday rentals' },
]
function Outdoor() {
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
            setCounter(totalItems < outdoor.length ? totalItems : outdoor.length);
          } else {
            setCounter(outdoor.length);
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
        {outdoor.slice(0, counter - 1).map((item, index) => (
          <div className="grid-items" key={index}>
            <div className="large-txt dark-txt small-gap">{item.title}</div>
            <div className="small-txt light-txt small-gap">{item.subtitle}</div>
          </div>
        ))}
        {!showAll && counter < outdoor.length&&(
          <div className="grid-items" onClick={handleSeeMore}>
            <div className="large-txt dark-txt show-more">Show More </div>
            <img src={arrowIconSimple} alt="" height='12px' className='show-img'></img>
          </div>
        )}
      </div>
    </>
  );
}

export default Outdoor;
