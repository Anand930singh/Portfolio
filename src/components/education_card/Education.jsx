import React, { useEffect } from 'react';
import './Education.css';

function Education() {
  const edData = [
    {
      course: "Undergraduate",
      institute: "Indian Institute of Information Technology Dharwad-(IIIT Dwd)",
      details: "I'm pursuing CSE, B.Tech as an undergraduate at IIIT Dharwad (Karnataka, India). I'm in my third year right now."
    },
    {
      course: "Higher Secondary Certificate",
      institute: "Mukularanyam English School",
      details: "In PCM (Physics, Chemistry, and Maths), I received an 83% on my 12th grade exam."
    },
    {
      course: "Secondary School Certificate",
      institute: "Harihar Singh School",
      details: "I received an 83% on my 10th grade exam."
    }
  ];



  return (
    <div className='eduContainer'>
      <div className="eduHead"></div>
      <div className='eduDetails'>
        {edData.map((data, index) => (
          <div className='detailsContain' key={index}>
            <div className='courseInstitute'>
              <div className="cours">{data.course}</div>
              <div className="institute">{data.institute}</div>
            </div>
            <div className='courseDetails'>
              {data.details}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
