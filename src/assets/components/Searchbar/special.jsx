import React, { useState, useRef, useEffect } from 'react';
import './special.css';
const EditableDiv = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('Search destination');
  const [initialText] = useState('Search destination'); // Save initial text
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const handleDivClick = () => {
    setText(''); // Clear the content
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setText(initialText); // Reset to initial text
      setIsEditing(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {isEditing ? (
        <textarea className='textarea'
          ref={inputRef}
          value={text}
          onChange={handleInputChange}
          onBlur={handleClickOutside}
          autoFocus
          rows={1}
          cols={23}
        />
      ) : (
        <div onClick={handleDivClick}>
          {text}
        </div>
      )}
    </div>
  );
};

export default EditableDiv;
