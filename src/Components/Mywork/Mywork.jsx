import React, { useState } from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  const [visibleCount, setVisibleCount] = useState(6); 
  const [showMore, setShowMore] = useState(true); 
  const [activeIndex, setActiveIndex] = useState(null);

  const handleShowMore = () => {
    if (showMore) {
      setVisibleCount(prevCount => prevCount + 6); 
    } else {
      setVisibleCount(6); 
    }
    setShowMore(!showMore); 
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.work-item')) {
      setActiveIndex(null);
    }
  };

  return (
    <div id='work' className='mywork' onClick={handleClickOutside}>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className="mywork-contanier">
        {mywork_data.slice(0, visibleCount).map((work, index) => (
          <div key={index} className="work-item" onClick={(e) => { e.stopPropagation(); setActiveIndex(index); }}>
            <img src={work.w_img} alt='' className="work-image" />
            {activeIndex === index && (
              <div className="button-group centered-buttons">
                <a href={work.demo_link} target="_blank" rel="noopener noreferrer">
                  <button className="demo-button">Preview</button>
                </a>
                <a href={work.github_link} target="_blank" rel="noopener noreferrer">
                  <button className="github-button">GitHub</button>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mywork-showmore" onClick={handleShowMore}>
        <p>{showMore ? 'Show More' : 'Show Less'}</p>
        <img src={arrow_icon} alt='' />
      </div>
    </div>
  );
};

export default Mywork;
