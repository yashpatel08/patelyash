import React from 'react';

export default function Skills(props) {
  return (
        <div className="skill1" id='skill1'>
    <section className="Skill" id="skill">

      <div className='skills'>

          <h1 className="skilll"> My Skills</h1>

          <a>C</a>
          <div className="skillbox" skill="C">
            <div className="skill c" id="stext"> 90% </div>
          </div>

          <a>HTML</a>
          <div className="skillbox" skill="HTML">
            <div className="skill html" id="stext"> 80% </div>
          </div>

          <a>CSS</a>
          <div className="skillbox" skill="CSS">
            <div className="skill css" id="stext"> 70% </div>
          </div>

          <a>JAVASCRIPT</a>
          <div className="skillbox" skill="javascript">
            <div className="javascript" id="stext"> 74% </div>
          </div>

          <a>REACT JS</a>
          <div className="skillbox" skill="reat-js">
            <div className="react-js" id="stext"> 55% </div>
          </div>

          <a>JAVA</a>
          <div className="skillbox" skill="JAVA">
            <div className="skill java" id="stext"> 75% </div>
          </div>

          <a>C++</a>
          <div className="skillbox" skill="Cplus">
            <div className="skill Cplus" id="stext"> 85% </div>

          </div>
        </div>
    </section>
      </div>
  );
}