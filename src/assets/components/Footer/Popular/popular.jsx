import React, { useState, useRef, useEffect } from "react";
import arrowIconSimple from '../../img/arrow-without-circle.svg'
const popular = [
  { title: "Canmore", subtitle: "Apartment rentals" },
  { title: "Benalmádena", subtitle: "House rentals" },
  { title: "Marbella", subtitle: " Villa rentals" },
  { title: "Mijas", subtitle: "House rentals" },
  { title: "Prescott", subtitle: "Cabin rentals" },
  { title: "Scottsdale", subtitle: "Mansion rentals" },
  { title: "Tuscon", subtitle: "Pet-friendly rentals" },
  { title: "Jasper", subtitle: "Cabin rentals" },
  { title: "Mountain View", subtitle: "Pet-friendly rentals" },
  { title: "Devonport", subtitle: "Cottage rentals" },
  { title: "Mallacoota", subtitle: "Pet-friendly rentals" },
  { title: "Ibiza", subtitle: "Holiday rentals" },
  { title: "Anaheim", subtitle: "Beach house rentals" },
  { title: "Monterey", subtitle: "Cottage rentals" },
  { title: "Paso Robles", subtitle: "Holiday rentals" },
  { title: "Santa Barbara", subtitle: "Pet-friendly rentals" },
  { title: "Sonoma", subtitle: "Beach house rentals" },
  { title: "La Serena", subtitle: "Holiday rentals" },
  { title: "Dubai", subtitle: "Villa rentals" },
  { title: "Birmingham", subtitle: "House rentals" },
  { title: "Brighton", subtitle: "Pet-friendly rentals" },
  { title: "Bude", subtitle: "Holiday rentals" },
  { title: "Newcastle upn Tyne", subtitle: "Holiday rentals" },
  { title: "Padstow", subtitle: "House rentals" },
  { title: "South West England", subtitle: "Holiday rentals" },
  { title: "Whitby ", subtitle: "House rentals" },
  { title: "Fort Myers ", subtitle: "Holiday rentals" },
  { title: "Jacksonville ", subtitle: "Pet-friendly rentals" },
  { title: "Kissimmee ", subtitle: "Beachfront rentals " },
  { title: "Longboat Key ", subtitle: "pet-friendly rentals" },
  { title: "Orlando ", subtitle: "Pet-friendly rentals " },
  { title: " St Petersburg ", subtitle: "House rentals " },
  { title: " St. Augustine ", subtitle: " Beach house rentals " },
  { title: " The Villages ", subtitle: " Holiday rentals  " },
  { title: "Dahlonega  ", subtitle: "Cottage rentals " },
  { title: " Crete ", subtitle: " Flat rentals " },
  { title: "Mykonos ", subtitle: "Apartment rentals " },
  { title: "Santorini ", subtitle: "Beach house rentals" },
  { title: "O‘ahu ", subtitle: "Beach house rentals" },
  { title: "Capri  ", subtitle: "Flat rentals " },
  { title: "Bar Harbor  ", subtitle: "Holiday rentals " },
  { title: "Mackinac Island  ", subtitle: "Cottage rentals " },
  { title: "St. Joseph  ", subtitle: "Cabin rentals " },
  { title: "Larsmont  ", subtitle: "Holiday rentals " },
  { title: "Las Vegas", subtitle: "Holiday rentals" },
  { title: " Madrid", subtitle: "Holiday rentals" },
  { title: "Santa Fe", subtitle: "Flat rentals " },
  { title: "Bermagui", subtitle: "Holiday rentals" },
  { title: "Evans Head", subtitle: "Holiday rentals" },
  { title: "Sawtell", subtitle: "Beachfront rentals" },
  { title: "Young", subtitle: "Holiday rentals" },
  { title: "Ocracoke", subtitle: "Pet-friendly rentals" },
  { title: "Florence", subtitle: "Cottage rentals" },
  { title: "Lakeside", subtitle: "Lakehouse rentals" },
  { title: "Lincoln City", subtitle: "Holiday rentals" },
  { title: "Paphos", subtitle: "Holiday rentals" },
  { title: "Maleny", subtitle: "Holiday rentals" },
  { title: "Stanthorpe", subtitle: "House rentals" },
  { title: "Newport", subtitle: "Cottage rentals" },
  { title: "Glasgow", subtitle: "Holiday rentals" },
  { title: "Scottish Highlands", subtitle: "Holiday rentals" },
  { title: "St Andrews", subtitle: "Cottage rentals" },
  { title: "McLaren Vale", subtitle: "Holiday rentals" },
  { title: "Wallaroo", subtitle: "Beachfront rentals" },
  { title: "Charleston", subtitle: "Beach apartment rentals" },
  { title: "Hvar", subtitle: "Flat rentals" },
  { title: "Saint John", subtitle: "Holiday rentals" },
  { title: "Chattanooga", subtitle: "Holiday rentals" },
  { title: "Concan", subtitle: "House rentals" },
  { title: "Fredericksburg", subtitle: "Holiday rentals" },
  { title: "New Braunfels", subtitle: "House rentals" },
  { title: "Rockport", subtitle: "Holiday rentals" },
  { title: "Waco", subtitle: "cabins rentals" },
  { title: "Forest of Dean District", subtitle: "Holiday rentals" },
  { title: "Jersey", subtitle: "Flat rentals" },
  { title: "Lyme Regis", subtitle: "Beachfront rentals" },
  { title: "Manchester", subtitle: "Cottage rentals" },
  { title: "Seaview", subtitle: "Holiday rentals" },
  { title: "Southwold", subtitle: "Holiday rentals" },
  { title: "Staithes", subtitle: "Cottage rentals" },
  { title: "Wells-next-the-Sea", subtitle: "House rentals" },
  { title: "St. George", subtitle: "Apartment rentals" },
  { title: "Benidorm  ", subtitle: "Holiday rentals " },
  { title: "Barwon Heads ", subtitle: "Holiday rentals " },
  { title: "Castlemaine ", subtitle: "Holiday rentals " },
  { title: "Healesville ", subtitle: "Holiday rentals " },
  { title: "Marysville ", subtitle: "Cottage rentals" },
  { title: "Sorrento   ", subtitle: "Beach house rentals " },
  { title: "Chincoteague   ", subtitle: "Beach house rentals " },
  { title: "Williamsburg ", subtitle: " Holiday rentals" },
  { title: "Hay-on-Wye ", subtitle: "Cottage rentals" },
  { title: "Llandudno ", subtitle: "Flat rentals " },
  { title: "Tenby  ", subtitle: "Cabin rentals " },
]
function Popular() {
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
            setCounter(totalItems < popular.length ? totalItems : popular.length);
          } else {
            setCounter(popular.length);
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
        {popular.slice(0, counter - 1).map((item, index) => (
          <div className="grid-items" key={index}>
            <div className="large-txt dark-txt small-gap">{item.title}</div>
            <div className="small-txt light-txt small-gap">{item.subtitle}</div>
          </div>
        ))}
        {!showAll && counter < popular.length && (
          <div className="grid-items" onClick={handleSeeMore}>
            <div className="large-txt dark-txt show-more">Show More </div>
            <img src={arrowIconSimple} alt="" height='12px' className='show-img'></img>
          </div>
        )}
      </div>
    </>
  );
}

export default Popular;
