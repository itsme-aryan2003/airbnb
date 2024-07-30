import React, { useState, useRef, useEffect } from "react";
import arrowIconSimple from '../../img/arrow-without-circle.svg'
const beach = [
  { title: 'Dauphin Island', subtitle: 'Beachfront rentals' },
  { title: 'Fort Morgan', subtitle: 'Holiday rentals' },
  { title: 'Gulf Shores', subtitle: 'Holiday rentals' },
  { title: 'Bruny Island', subtitle: 'Holiday rentals' },
  { title: 'Crescent Head', subtitle: 'House rentals' },
  { title: 'Gerringong', subtitle: 'Holiday rentals' },
  { title: 'Hamilton Island', subtitle: 'Flat rentals' },
  { title: 'Lancelin', subtitle: 'Holiday rentals' },
  { title: 'Melbourne Beach', subtitle: 'Beachfront rentals' },
  { title: 'Moonta Bay', subtitle: 'Beachfront rentals' },
  { title: 'Ocean Grove', subtitle: 'Cabin rentals' },
  { title: 'Majorca', subtitle: 'Villa rentals' },
  { title: 'Big Sur', subtitle: 'House rentals' },
  { title: 'Bodega Bay', subtitle: 'Holiday rentals' },
  { title: 'Cambria', subtitle: 'Cabin rentals' },
  { title: 'Cayucos', subtitle: 'Holiday rentals' },
  { title: 'Huntington Beach', subtitle: 'House rentals' },
  { title: 'la Jolla Shores Beach', subtitle: 'Holiday rentals' },
  { title: 'Laguna Beach', subtitle: 'Flat rentals' },
  { title: 'Long Beach', subtitle: 'Pet-friendly rentals' },
  { title: 'Malibu', subtitle: 'Apartment rentals' },
  { title: 'Mission Beach', subtitle: 'Apartment rentals' },
  { title: 'Newport Beach', subtitle: 'Flat rentals' },
  { title: 'Oceanside', subtitle: 'Flat rentals' },
  { title: 'Palm Springs', subtitle: 'Pet-friendly rentals' },
  { title: 'Pismo Beach', subtitle: 'Holiday rentals' },
  { title: 'Santa Cruz', subtitle: 'Beachfront rentals' },
  { title: 'Santa Monica', subtitle: 'House rentals' },
  { title: 'Sea Ranch', subtitle: 'Apartment rentals' },
  { title: 'Playa Blanca', subtitle: 'Holiday rentals' },
  { title: 'Fuerteventura', subtitle: 'Holiday rentals' },
  { title: 'Puerto del Carmen', subtitle: 'Flat rentals' },
  { title: 'Tenerife', subtitle: 'Holiday rentals' },
  { title: 'Ayia Napa', subtitle: 'Villa rentals' },
  { title: 'Bethany Beach', subtitle: 'Beach house rentals' },
  { title: 'Dewey Beach', subtitle: 'Pet-friendly rentals' },
  { title: 'Blackpool', subtitle: 'Cottage rentals' },
  { title: 'Isle of Wight', subtitle: 'Flat rentals' },
  { title: 'Newquay', subtitle: 'Flat rentals' },
  { title: 'Weymouth', subtitle: 'Cabin rentals' },
  { title: 'Albufeira', subtitle: 'Holiday rentals' },
  { title: 'Alys Beach', subtitle: 'Holiday rentals' },
  { title: 'Anna Maria Island', subtitle: 'Holiday rentals' },
  { title: 'Boca Grande', subtitle: 'Holiday rentals' },
  { title: 'Bradenton', subtitle: 'Pet-friendly rentals' },
  { title: 'Cape San Blas', subtitle: 'Pet-friendly rentals' },
  { title: 'Captiva', subtitle: 'Holiday rentals' },
  { title: 'Clearwater Beach', subtitle: 'Beachfront rentals' },
  { title: 'Cocoa Beach', subtitle: 'Flat rentals' },
  { title: 'Daytona Beach', subtitle: 'Villa rentals' },
  { title: 'Destin', subtitle: 'Holiday rentals' },
  { title: 'Englewood', subtitle: 'Holiday rentals' },
  { title: 'Fort Lauderdale', subtitle: 'Cottage rentals' },
  { title: 'Fort Myers Beach', subtitle: 'Villa rentals' },
  { title: 'Fort Walton Beach', subtitle: 'Beach apartment rentals' },
  { title: 'Grayton Beach', subtitle: 'Beach house rentals' },
  { title: 'Gulf of Mexico', subtitle: 'Holiday rentals' },
  { title: 'Indian Rocks Beach', subtitle: 'Apartment rentals' },
  { title: 'Islamorada', subtitle: 'Holiday rentals' },
  { title: 'Jacksonville Beach', subtitle: 'Beach house rentals' },
  { title: 'Key Largo', subtitle: 'Beach house rentals' },
  { title: 'Madeira Beach', subtitle: 'Beach apartment rentals' },
  { title: 'Marathon', subtitle: 'Holiday rentals' },
  { title: 'Marco Island', subtitle: 'Holiday rentals' },
  { title: 'Mexico Beach', subtitle: 'Beachfront rentals' },
  { title: 'Miami Beach', subtitle: 'Holiday rentals' },
  { title: 'Miami', subtitle: 'Apartment rentals' },
  { title: 'Miramar Beach', subtitle: 'House rentals' },
  { title: 'Naples', subtitle: 'Holiday rentals' },
  { title: 'Navarre Beach', subtitle: 'Holiday rentals' },
  { title: 'New Smyrna Beach', subtitle: 'Flat rentals' },
  { title: 'Okaloosa Island', subtitle: 'Apartment rentals' },
  { title: 'Panama City Beach', subtitle: 'Holiday rentals' },
  { title: 'Pensacola Beach', subtitle: 'Cabin rentals' },
  { title: 'Perdido Key', subtitle: 'Holiday rentals' },
  { title: 'Rosemary Beach', subtitle: 'Holiday rentals' },
  { title: 'Saint George Island', subtitle: 'Holiday rentals' },
  { title: 'Santa Rosa Beach', subtitle: 'Apartment rentals' },
  { title: 'Sarasota', subtitle: 'Rentals with pools' },
  { title: 'Seagrove Beach', subtitle: 'Beach house rentals' },
  { title: 'Seaside', subtitle: 'Beach house rentals' },
  { title: 'South Beach', subtitle: 'Beachfront rentals' },
  { title: 'St. Augustine Beach', subtitle: 'Beach apartment rentals' },
  { title: 'St. Pete Beach', subtitle: 'Holiday rentals' },
  { title: 'Tampa', subtitle: 'Villa rentals' },
  { title: 'West Palm Beach', subtitle: 'House rentals' },
  { title: 'Bora-Bora', subtitle: 'Holiday rentals' },
  { title: 'Tybee Island', subtitle: 'Flat rentals' },
  { title: 'Honolulu', subtitle: 'Bungalow rentals' },
  { title: 'Kailua-Kona', subtitle: 'Villa rentals' },
  { title: 'Kapalua', subtitle: 'Flat rentals' },
  { title: 'Kauai', subtitle: 'Family-friendly rentals' },
  { title: 'Kihei', subtitle: 'Apartment rentals' },
  { title: 'Ko Olina Beach', subtitle: 'Holiday rentals' },
  { title: 'Maui', subtitle: 'House rentals' },
  { title: 'Topsail Island', subtitle: 'Holiday rentals' },
  { title: 'Old Orchard Beach', subtitle: 'Beach house rentals' },
  { title: 'Wells', subtitle: 'Holiday rentals' },
  { title: 'Cape Cod', subtitle: 'Beach house rentals' },
  { title: 'Nantucket', subtitle: 'Holiday rentals' },
  { title: 'Biloxi', subtitle: 'Pet-friendly rentals' },
  { title: 'Avalon', subtitle: 'Holiday rentals' },
  { title: 'Jersey Shore', subtitle: 'House rentals' },
  { title: 'North Wildwood', subtitle: 'Apartment rentals' },
  { title: 'Ocean City', subtitle: 'Apartment rentals' },
  { title: 'Sea Isle City', subtitle: 'Rentals with pools' },
  { title: 'Stone Harbor', subtitle: 'Flat rentals' },
  { title: 'Hyams Beach', subtitle: 'Holiday rentals' },
  { title: 'Fire Island', subtitle: 'Holiday rentals' },
  { title: 'Montauk', subtitle: 'Beach apartment rentals' },
  { title: 'Ocean Beach', subtitle: 'Beach house rentals' },
  { title: 'Atlantic Beach', subtitle: 'Rentals with pools' },
  { title: 'Carolina Beach', subtitle: 'Holiday rentals' },
  { title: 'Corolla', subtitle: 'Beach house rentals' },
  { title: 'Holden Beach', subtitle: 'Apartment rentals' },
  { title: 'Kitty Hawk', subtitle: 'Holiday rentals' },
  { title: 'Kure Beach', subtitle: 'Cottage rentals' },
  { title: 'Nags Head', subtitle: 'Holiday rentals' },
  { title: 'Ocean Isle Beach', subtitle: 'Rentals with pools' },
  { title: 'Sunset Beach', subtitle: 'Beach house rentals' },
  { title: 'Surf City', subtitle: 'Holiday rentals' },
  { title: 'Wilmington', subtitle: 'Holiday rentals' },
  { title: 'Wrightsville Beach', subtitle: 'Beach house rentals' },
  { title: 'Sauble Beach', subtitle: 'Cottage rentals' },
  { title: 'Wasaga Beach', subtitle: 'Holiday rentals' },
  { title: 'Cannon Beach', subtitle: 'Holiday rentals' },
  { title: 'Seaside', subtitle: 'Apartment rentals' },
  { title: 'Carvoeiro', subtitle: 'Holiday rentals' },
  { title: 'Gold Coast', subtitle: 'Mansion rentals' },
  { title: 'Moreton Island', subtitle: 'Holiday rentals' },
  { title: 'Block Island', subtitle: 'Holiday rentals' },
  { title: 'Puerto Peñasco', subtitle: 'Holiday rentals' },
  { title: 'Charleston Oceanfront Villas', subtitle: 'Holiday rentals' },
  { title: 'Edisto Beach', subtitle: 'Beachfront rentals' },
  { title: 'Folly Beach', subtitle: 'Flat rentals' },
  { title: 'Fripp Island', subtitle: 'Holiday rentals' },
  { title: 'Isle of Palms', subtitle: 'House rentals' },
  { title: 'Kiawah Island', subtitle: 'Holiday rentals' },
  { title: 'Myrtle Beach', subtitle: 'House rentals' },
  { title: 'Pawleys Island', subtitle: 'Beach house rentals' },
  { title: 'Seabrook Island', subtitle: 'Holiday rentals' },
  { title: 'Sullivan\'s Island', subtitle: 'Holiday rentals' },
  { title: 'Surfside Beach', subtitle: 'Beach house rentals' },
  { title: 'Alicante', subtitle: 'Holiday rentals' },
  { title: 'Costa Adeje', subtitle: 'House rentals' },
  { title: 'Costa del Sol Occidental', subtitle: 'Holiday rentals' },
  { title: 'Fuengirola', subtitle: 'Holiday rentals' },
  { title: 'Los Cristianos', subtitle: 'Flat rentals' },
  { title: 'Corpus Christi', subtitle: 'Cabin rentals' },
  { title: 'Port Aransas', subtitle: 'Holiday rentals' },
  { title: 'South Padre Island', subtitle: 'Apartment rentals' },
  { title: 'Surfside Beach', subtitle: 'Apartment rentals' },
  { title: 'Bournemouth', subtitle: 'Beach house rentals' },
  { title: 'New Quay', subtitle: 'Holiday rentals' },
  { title: 'Anglesea', subtitle: 'Holiday rentals' },
  { title: 'Abersoch', subtitle: 'House rentals' },
  { title: 'Seabrook', subtitle: 'Holiday rentals' },
  { title: 'Jurien Bay', subtitle: 'Holiday rentals' },
]
function Beach() {
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
            setCounter(totalItems < beach.length ? totalItems : beach.length);
          } else {
            setCounter(beach.length);
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
        {beach.slice(0, counter - 1).map((item, index) => (
          <div className="grid-items" key={index}>
            <div className="large-txt dark-txt small-gap">{item.title}</div>
            <div className="small-txt light-txt small-gap">{item.subtitle}</div>
          </div>
        ))}
        {!showAll && counter < beach.length && (
          <div className="grid-items" onClick={handleSeeMore}>
            <div className="large-txt dark-txt show-more">Show More </div>
            <img src={arrowIconSimple} alt="" height='12px' className='show-img'></img>
          </div>
        )}
      </div>
    </>
  );
}

export default Beach;
