import React from 'react'
import PatelYash_Resume from './Patel_Yash.pdf'


const Home = () => {
  return (
    <div className='main-home'>
      {/* <div className='home1'>

      </div> */}
      <div className='home2'>
        <p className='home-intro'>Hi, My name is </p>
        <h1 className='home-name'>Patel
          <span> Yash</span></h1>
        <p>Aspiring Full-Stack Web Devloper with building websites while conquering LeetCode challenges with a problem solving flair</p>
        <div className='home-icon'>

          <a href='https://github.com/yashpatel08'><i className="fa-brands fa-github"></i></a>
          <a href='https://www.linkedin.com/in/yash-patel-ab2740225/'><i className="fa-brands fa-linkedin-in"></i></a>
          <a href='https://twitter.com/Yashpatel0808'><i className="fa-brands fa-x-twitter"></i></a>
        </div>
        <div className='home-btns'>
          <a href={PatelYash_Resume} target="_blank" download>

            <button onClick={() =>
              window.open(
                `https://drive.google.com/file/d/1p9EL_LIYXYGPzspyH7sFhdAYSkmEy7I4/view?usp=sharing`
              )
            } >Download CV</button>
          </a>
          <a href="#contact">
            <button>Contact</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home