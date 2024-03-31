import React, { useState ,useEffect  } from 'react';
import { projects } from './ProjectData';
const Work = () => {

  const [current, setCurrent] = useState(0);
  const [numCards, setNumCards] = useState(3);
  const length = projects.length;
  console.log(projects);
  const nextSlide = () => {
    if (current < length - numCards) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };


  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setNumCards(1);
      } else {
        setNumCards(3);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();  
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  if (!Array.isArray(projects) || projects.length === 0) {
    return null;
  }

  return (
    <div className='project-container' id='projects'>
      <h3>My Projects</h3>
      <div>
        <div className='project-btns'>
          <button className='left-button' onClick={prevSlide}> <i className="fa-solid fa-less-than"></i> </button>
          <button className='right-button' onClick={nextSlide}> <i className="fa-solid fa-greater-than"></i> </button>
        </div>

        <div className="project-slider">
           {projects.slice(current, current + numCards).map((card, index) => (
            <div className='project-slide' key={index}>
              <img src={card.img} alt={card.name} />
              <h2>{card.name}</h2>
              <div className="tech-list">
                {card.tech.map((tech, techIndex) => (
                  <span key={techIndex} className='project-tech'>{tech} </span>
                ))}
              </div>
              <p className='project-desc'>{card.dec}</p>

              <div className='project-links'>
                {card.link ? <a href={card.link} target='
              _blank'><i className="fa-solid fa-link"></i></a> : null}
                {card.repo && <a href={card.repo} target='
              _blank'><i className="fa-brands fa-github"></i></a>}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Work