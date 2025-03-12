import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          const isExpanded = expanded[index];
          const words = service.s_desc.split(' ');
          const shortText = words.slice(0, 7).join(' ') + (words.length > 7 ? '...' : '');

          return (
            <div key={index} className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{isExpanded ? service.s_desc : shortText}</p>
              {words.length > 5 && (
                <div className='services-readmore' onClick={() => toggleReadMore(index)}>
                  <p>{isExpanded ? 'Read Less' : 'Read More'}</p>
                  <img src={arrow_icon} alt='' />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
