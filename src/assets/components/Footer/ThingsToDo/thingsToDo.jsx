import React, {useState, useRef,useEffect} from "react";
import arrowIconSimple from '../../img/arrow-without-circle.svg'
const thingsToDo =[
    {title:'London', subtitle:'England'},
    {title:'Paris', subtitle:'Île-de-France'},
    {title:'New York', subtitle:'New York'},
    {title:'Barcelona', subtitle:'Catalonia'},
    {title:'İstanbul', subtitle:'İstanbul'},
    {title:'Bali', subtitle:'Indonesia'},
    {title:'Amsterdam', subtitle:'North Holland'},
    {title:'Miami', subtitle:'Florida'},
    {title:'Madrid', subtitle:'Community of Madrid'},
    {title:'Los Angeles', subtitle:'California'},
    {title:'Rome', subtitle:'Lazio'},
    {title:'Lisbon', subtitle:'Lisbon'},
    {title:'Tokyo', subtitle:'Tokyo'},
    {title:'Vienna', subtitle:'Vienna'},
    {title:'Athens', subtitle:'Greece'},
    {title:'Prague', subtitle:'Czechia'},
    {title:'Orlando', subtitle:'Florida'},
    {title:'Cancún', subtitle:'Quintana Roo'},
    {title:'Santorini', subtitle:'Greece'},
    {title:'Mexico City', subtitle:'Mexico City'},
    {title:'Venice', subtitle:'Veneto'},
    {title:'Playa del Carmen', subtitle:'Quintana Roo'},
    {title:'San Francisco', subtitle:'California'},
    {title:'Las Vegas', subtitle:'Nevada'},
    {title:'Boston', subtitle:'Massachusetts'},
    {title:'San Diego', subtitle:'California'},
    {title:'Chicago', subtitle:'Illinois'},
    {title:'Seattle', subtitle:'Washington'},
    {title:'Washington', subtitle:'District of Columbia'},
    {title:'Atlanta', subtitle:'Georgia'},
    {title:'Austin', subtitle:'Texas'},
    {title:'Maui', subtitle:'Hawaii'},
    {title:'New Orleans', subtitle:'Louisiana'},
    {title:'San Juan', subtitle:'San Juan'},
    {title:'O‘ahu', subtitle:'Hawaii'},
    {title:'Denver', subtitle:'Colorado'},
    {title:'Nashville', subtitle:'Tennessee'},
    {title:'Charleston', subtitle:'South Carolina'},
    {title:'Los Cabos', subtitle:'Baja California Sur'},
    {title:'Savannah', subtitle:'Georgia'},
    {title:'Dubai', subtitle:'Dubai'},
    {title:'Seoul', subtitle:'Seoul'},
    {title:'France', subtitle:''},
    {title:'Berlin', subtitle:'Berlin'},
    {title:'Canada', subtitle:''},
    {title:'Toronto', subtitle:'Ontario'},
    {title:'Switzerland', subtitle:''},
    {title:'Budapest', subtitle:'Hungary'},
    {title:'Spain', subtitle:''},
    {title:'Portugal', subtitle:''},
    {title:'United States', subtitle:''},
    {title:'Italy', subtitle:''},
    {title:'Greece', subtitle:''},
    {title:'Malta', subtitle:''},
    {title:'Türkiye', subtitle:''},
    {title:'Croatia', subtitle:''},
    {title:'Vancouver', subtitle:'British Columbia'},
    {title:'Mexico', subtitle:''},
    {title:'Milan', subtitle:'Lombardy'},
    {title:'Dublin', subtitle:'County Dublin'},
    {title:'Germany', subtitle:''},
    {title:'Costa Rica', subtitle:''},
    {title:'Manhattan', subtitle:'New York'},
    {title:'Japan', subtitle:''},
    {title:'Málaga', subtitle:'Andalusia'},
    {title:'Copenhagen', subtitle:'Denmark'},
    {title:'Montreal', subtitle:'Quebec'},
    {title:'Brussels', subtitle:'Brussels'},
    {title:'Valencia', subtitle:'Valencian Community'},
    {title:'Singapore', subtitle:''},
    {title:'Nice', subtitle:'Provence-Alpes-Côte d\'Azur'},
    {title:'Munich', subtitle:'Bavaria'},
    {title:'Majorca', subtitle:'Balearic Islands'},
    {title:'Thailand', subtitle:''},
    {title:'Tulum', subtitle:'Quintana Roo'},
    {title:'Ireland', subtitle:''},
    {title:'Porto', subtitle:'Porto District'},
    {title:'England', subtitle:'United Kingdom'},
    {title:'Miami Beach', subtitle:'Florida'},
    {title:'Tenerife', subtitle:'Canary Islands'},
    {title:'Netherlands', subtitle:''},
    {title:'Zürich', subtitle:'Zurich'},
    {title:'Cyprus', subtitle:''},
    {title:'Stockholm', subtitle:'Stockholm County'},
    {title:'Cape Town', subtitle:'Western Cape'},
    {title:'Norway', subtitle:''},
    {title:'Sydney', subtitle:'New South Wales'},
    {title:'Tuscany', subtitle:'Italy'},
    {title:'Mykonos', subtitle:'Greece'},
    {title:'Hawaii', subtitle:'United States'},
    {title:'Florence', subtitle:'Tuscany'},
    {title:'Colombia', subtitle:''},
    {title:'Kyiv', subtitle:'Ukraine'},
    {title:'Antalya', subtitle:'Antalya'},
    {title:'Iceland', subtitle:''},
    {title:'Bangkok', subtitle:'Thailand'},
    {title:'Buenos Aires', subtitle:'Buenos Aires'},
    {title:'Bogotá', subtitle:'Bogota'},
    {title:'Warsaw', subtitle:'Masovian Voivodeship'},
]
function ThingsToDo() {
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
              setCounter(totalItems < thingsToDo.length ? totalItems : thingsToDo.length);
            } else {
              setCounter(thingsToDo.length);
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
          {thingsToDo.slice(0, counter-1).map((item, index) => (
            <div className="grid-items" key={index}>
              <div className="large-txt dark-txt small-gap">{item.title}</div>
              <div className="small-txt light-txt small-gap">{item.subtitle}</div>
            </div>
          ))}
          {!showAll && counter < thingsToDo.length &&(
            <div className="grid-items" onClick={handleSeeMore}>
              <div className="large-txt dark-txt show-more">Show More </div>
                <img src={arrowIconSimple} alt="" height='12px' className='show-img'></img>
            </div>
          )}
        </div>
      </>
    );
  }
  
  export default ThingsToDo;
  