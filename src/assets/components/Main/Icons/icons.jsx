import React, { useState, useRef, useEffect } from 'react';
import { IconsArray, pastIconsArray } from './importIcons';
import Share from './share';

const IconGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const scrollRefs = useRef([]);
  const [currentPages, setCurrentPages] = useState(IconsArray.map(() => 0));
  const imagesPerPage = 1;
  const [scrollOverflow, setScrollOverflow] = useState(false);
  const [shareData, setShareData] = useState({ visible: false, title: '', image: '' });

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const updatePage = (index) => {
    if (scrollRefs.current[index]) {
      const scrollLeft = scrollRefs.current[index].scrollLeft;
      const pageWidth = 320; // Width of each page
      const newPage = Math.floor(scrollLeft / pageWidth);
      const maxPage = Math.ceil(IconsArray[index].images.length / imagesPerPage) - 1;

      setCurrentPages((prev) =>
        prev.map((page, i) => (i === index ? Math.min(Math.max(newPage, 0), maxPage) : page))
      );
    }
  };

  const handleScroll = (index) => {
    return () => {
      updatePage(index);
    };
  };

  const scrollLeft = (index) => {
    if (scrollRefs.current[index]) {
      scrollRefs.current[index].scrollBy({
        left: -320,
        behavior: 'smooth',
      });
      updatePage(index); // Ensure dots are updated
    }
  };

  const scrollRight = (index) => {
    if (scrollRefs.current[index]) {
      scrollRefs.current[index].scrollBy({
        left: 320,
        behavior: 'smooth',
      });
      updatePage(index); // Ensure dots are updated
    }
  };

  const handleDotClick = (iconIndex, pageIndex) => {
    if (scrollRefs.current[iconIndex]) {
      scrollRefs.current[iconIndex].scrollTo({
        left: pageIndex * 320,
        behavior: 'smooth',
      });
      setCurrentPages((prev) =>
        prev.map((page, i) => (i === iconIndex ? pageIndex : page))
      );
    }
  };

  const handleShareClose = () => {
    setShareData({ visible: false, title: '', image: '' });
  };

  useEffect(() => {
    if (currentPages.includes(2) && !scrollOverflow) {
      setScrollOverflow(true);
    } else if (!currentPages.includes(2) && scrollOverflow) {
      setScrollOverflow(false);
    }
  }, [currentPages, scrollOverflow]);

  const handleShareClick = (title, image) => {
    setShareData({ visible: true, title, image });
  };

  const renderDots = (iconIndex, totalDots) => {
    if (totalDots <= 1) return null; // No dots if only one image
    const currentPage = currentPages[iconIndex];
    const maxVisibleDots = 5;
    let start = Math.max(0, currentPage - Math.floor(maxVisibleDots / 2));
    let end = Math.min(totalDots, start + maxVisibleDots);

    if (end - start < maxVisibleDots) {
      start = Math.max(0, end - maxVisibleDots);
    }

    return (
      <div className={`dots-container ${scrollOverflow ? 'middle-dot' : ''}`}>
        {Array.from({ length: end - start }, (_, i) => start + i).map((dotIndex) => (
          <span
            key={dotIndex}
            className={`dot ${currentPages[iconIndex] === dotIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(iconIndex, dotIndex)}
          >•</span>
        ))}
      </div>
    );
  };

  useEffect(() => {
    scrollRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.addEventListener('scroll', handleScroll(index));
      }
    });

    return () => {
      scrollRefs.current.forEach((ref, index) => {
        if (ref) {
          ref.removeEventListener('scroll', handleScroll(index));
        }
      });
    };
  }, []);

  useEffect(() => {
    if (shareData.visible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [shareData.visible]);


  return (
    <>
      <div className="icon-gallery">
        {IconsArray.map((icon, index) => (
          <div
            key={icon.title}
            className="icon-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {icon.isLive && <div className="is-live">Live</div>}
            <div className={` ${hoveredIndex === index ? 'left-move' : ''}`} onClick={() => scrollLeft(index)}></div>
            <div
              className="icon-images"
              ref={(el) => { scrollRefs.current[index] = el; }}
            >
              {icon.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  className="image-div"
                  src={image}
                  alt={`${icon.title} ${imgIndex + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
            <div className={` ${hoveredIndex === index ? 'right-move' : ''}`} onClick={() => scrollRight(index)}></div>
            <div className="copy-icon" onClick={() => handleShareClick(icon.title, icon.images[0])}></div>
            <div className="icon-data">
              <div className="icon-title">{icon.title}</div>
              <div className="icon-host">Hosted by {icon.host}</div>
              <p className="icon-last">
                {icon.soldOut ? 'Sold Out' : icon.comingSoon && icon.date
                  ? `Coming ${icon.date}` : icon.comingSoon
                    ? 'Coming Soon' : (<span>
                      {icon.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', })}{' '}
                      per guest
                    </span>
                    )}
              </p>
            </div>
            <div className="pagination-dots">{renderDots(index, Math.ceil(icon.images.length / imagesPerPage))}</div>
          </div>
        ))}
      </div>

      <h1 className="past-experiences">Past</h1>
      <div className="icon-gallery">
        {pastIconsArray.map((icon, index) => (
          <div
            key={index}
            className="icon-item"
            onMouseEnter={() => handleMouseEnter(IconsArray.length + index)}
            onMouseLeave={handleMouseLeave}
          >
            <div></div>
            <div className="icon-images">
              {icon.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  className="image-div"
                  src={image}
                  alt={`${icon.title} ${imgIndex + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
            <div className="icon-data">
              <div className="icon-title">{icon.title}</div>
              <div className="icon-host">Hosted by {icon.host}</div>
              <p>
                {icon.soldOut
                  ? 'Sold Out'
                  : icon.comingSoon && icon.date
                    ? `Coming ${icon.date}`
                    : icon.comingSoon
                      ? 'Coming Soon'
                      : (
                        <span>
                          {icon.price.toLocaleString('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                          })}{' '}
                          per guest
                        </span>
                      )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {shareData.visible && <Share title={shareData.title} image={shareData.image} onClose={handleShareClose} />}
    </>
  );
};

export default IconGallery;
