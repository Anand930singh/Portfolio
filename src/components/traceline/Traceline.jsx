import React, { useEffect, useRef } from 'react';
import './Traceline.css';

function Traceline() {
  const tracelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(tracelineRef.current);

    return () => {
      observer.unobserve(tracelineRef.current);
    };
  }, []);

  return <div className='traceline_container' ref={tracelineRef}></div>;
}

export default Traceline;
