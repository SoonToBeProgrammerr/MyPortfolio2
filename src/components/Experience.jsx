import React, { useEffect } from 'react';
import './experience.css';
import profilePic from '../assets/profile pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Experience = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);


  return (
    <div>
      <div className='alignItems2'>
        <div> <img src={profilePic} alt="profilepic" className='profilePic'  data-aos="fade-right"/></div>
        <div className='alignText3' data-aos="fade-left">
          <div className='profileL'> <FontAwesomeIcon icon={faLocationDot} /> <span className='grayText'>Location:</span> Miami, Florida</div>
          <div className='profileL'> <FontAwesomeIcon icon={faMessage} /> <span className='grayText'>Language:</span> English, Spanish</div>
        </div>
      </div>
      <div className='profileText' data-aos="fade-down">Currently learning how to develop/create aesthetically pleasing websites to catch the eye of the consumers.</div>

<hr  data-aos="flip-right"/>

      <div class="container" data-aos="fade-down">
        <div class="timeline">
          <ul>
            <li >
              <div class="timeline-content">
                <h3 class="date">2024</h3>
                <h1>freeCodeAcademy</h1>
                <p className='grayText'>Entry Level Programming </p>
                <p>Started fresh by taking on a new challenge in life and pursuing my dream of becoming a software develope by becoming proficient in HTML and CSS.</p>
              </div>
            </li>
            <li >
              <div class="timeline-content">
                <h3 class="date">2021</h3>
                <h1>Asthma and Allergy Associates</h1>
                <p className='grayText'>Clinical EMT</p>
                <p> Provided skillful medical care to patients presenting with asthmatic and allergic symptoms, Resuscitated patients and maintained a good patient satisfaction rating,
                Fixed all IT Issues within the main offices and setup Machinery and testing equipment for my peers,
                Helped test servers and make sure the daily logs and server were running without any issues
                </p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">2019</h3>
                <h1>Nomi Covid Testing Site Leader</h1>
                <p className='grayText'>Lead EMT Site Manager</p>
                <p> Lead Zoo Miami Testing site for 1 Year,
                Processed Patient Data and ensure Infrastructure was up to date and running smoothly,
                Fixed IT issues and Recoded data input system for easier workflow,
                Responsibilities include sanitation, covid testing registration, covid testing patients, break downand set up of test site.
            </p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">2019</h3>
                <h1>EMT TRAINEE</h1>
                <p className='grayText'>MIAMI DADE COLLEGE MEDICAL CAMPUS</p>
                <p>Obtained comprehensive knowledge of emergency medicine to assess, treat, stabilize and transportseriously ill or injured patients to area hospitals and trauma centers.
                  Provided skillful medical care to revive and stabilize patients suffering from traumatic injuries, cardiacarrest,strokes, seizures, and other serious conditions</p>
              </div>
            </li>
          </ul>
        </div>
      </div>


    </div>
  )
}


export default Experience;