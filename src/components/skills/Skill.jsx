import React, { useEffect } from 'react';
import './Skill.css';

function Skill() {
  useEffect(() => {
    updateCountValues();
  }, []);

  const updateCountValues = () => {
    const countElements = document.getElementsByClassName('count');
    for (let i = 0; i < countElements.length; i++) {
      const element = countElements[i];
      const countValue = i;
      element.textContent = countValue;
    }
  };

  return (
    <div className='skillCard'>
      <div className='skillHead'></div>
      <div className='skillContent'>
        <div className='line'><br/></div>
        <div className='line'><span className='comments'>··// I can, because I did.<br/>
··// My vast variety of skills is continuously expanding.</span></div>

        <div className='line'>
          <span className='count'></span>
          <div className='const'>const</div>
          <span className='constName'>Skills</span>
          <span className='scope'>=</span>
          <span className='bracketOpen'>[</span>
        </div>
        <div className='line'>
          <div className='count'></div>
          <span className='dots'>..........</span>
          <span className='skillSet'>C++,</span>
        </div>
        <div className='line'>
          <div className='count'></div>
          <span className='dots'>..........</span>
          <span className='skillSet'>C,</span>
        </div>
        <div className='line'>
          <div className='count'></div>
          <span className='dots'>..........</span>
          <span className='skillSet'>HTML,</span>
        </div>
        <div className='line'>
          <div className='count'></div>
          <span className='dots'>..........</span>
          <span className='skillSet'>CSS,</span>
        </div>
        <div className='line'>
          <div className='count'></div>
          <span className='dots'>..........</span>
          <span className='skillSet'>JavaScript,</span>
        </div>
        <div className='line'>
          <div className='count'></div>
          <span className='dots'>..........</span>
          <span className='skillSet'>ReactJS,</span>
        </div>
        <div className='line'>
          <div className='count'></div>
          <span className='dots'>..........</span>
          <span className='skillSet'>NodeJS,</span>
        </div>
        <div className='line'>
          <div className='count'></div>
          <span className='dots'>..........</span>
          <span className='skillSet'>ExpressJS,</span>
        </div>
        <div className='line'>
          <div className='count'></div>
          <span className='dots'>..........</span>
          <span className='skillSet'>MongoDB,</span>
        </div>
        <div className='line'>
          <div className='count'></div>
          <span className='dots'>..........</span>
          <span className='skillSet'>MySQL,</span>
        </div>
        <div className='line'>
          <div className='count'></div>
          <span className='dots'>..........</span>
          <span className='skillSet'>NestJS</span>
        </div>
        <div className='line'>
          <div className='count'></div>
          <span className='dots'>....</span>
          <span className='bracketClose'>];</span>
        </div>
        <div className='line'><br/></div>

      </div>
    </div>
  );
}

export default Skill;
