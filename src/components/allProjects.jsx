import React, { useEffect } from 'react';
import './allProjects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Kndt from '../assets/Kndt.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import GS from '../assets/Guard.PNG';
import Dsign from '../assets/DsignFabs.PNG';
import Dfields from '../assets/dreamfields.PNG';
import iconVb from '../assets/visualBasic.png';
import iconcsharp from '../assets/csharp.png';
import iconHtml from '../assets/html.png';
import iconCss from '../assets/css.png';
import iconBs from '../assets/bootstrap.png';
import iconJs from '../assets/js.png';
import iconLara from '../assets/laravel.png';
import Chode from '../assets/Chode.PNG';






const AllProjects = () => {


  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);


  return (
    <section className='AllProjects'>
      <div className='recentProject'>

        <div className='project1' data-aos="fade-up">
          <div className='imageAlign1'>
            <img src={Kndt} alt="" className='projectimg1' />
          </div>
          <div className='projectGroupText'>
            <h1 className='imgTitle'>This Website</h1>
            <div className='suppText1'>Web Application </div>
            <div className='desText'>React, CSS, HTML Driven Website.</div>
            <div className='techText1'>Tech Used: <img src={iconVb} alt="" className='iconText' /> <img src={iconcsharp} alt="" className='iconText' /> </div>
            <div className='buttons'>
              <a href="https://drive.google.com/drive/folders/1aAQXV5_2rv5ATjS6N4o-ZWmnXUodQ2bQ?usp=drive_link" target="_blank"
                rel="noopener noreferrer">
                
              </a>
            </div>
          </div>
        </div>

        <div className='hralign'>
          <hr className='hr1' data-aos="flip-right" />
        </div>

        <div className='project1' data-aos="fade-down">
          <div className='imageAlign1'>
            <img src={GS} alt="" className='projectimg1' />
          </div>
          <div className='projectGroupText'>
            <h1 className='imgTitle'>Guard Seraphim</h1>
            <div className='suppText1'>Inventory App </div>
            <div className='desText'>Static, Multi-page Application</div>
            <div className='techText1'>Tech Used: <img src={iconHtml} alt="" className='iconText' /> <img src={iconCss} alt="" className='iconText' /> <img src={iconBs} alt="" className='iconText' /></div>

            <div className='buttons'>
              <a href="https://github.com/Nuttychoco/https---github.com-Nuttychoco-Guard-Seraphim" target="_blank"
                rel="noopener noreferrer">
                <button className='buttonProject'> <FontAwesomeIcon icon={faGithub} /> Github repository</button>
              </a>
            </div>
          </div>
        </div>

        <div className='hralign'>
          <hr className='hr1' data-aos="flip-right" />
        </div>

        <div className='project1' data-aos="fade-down">
          <div className='imageAlign1'>
            <img src={Dsign} alt="" className='projectimg1' />
          </div>
          <div className='projectGroupText'>
            <h1 className='imgTitle'>DsignFabs Advertising</h1>
            <div className='suppText1'>Graphic Arts Industries Web App </div>
            <div className='desText'>Static, Multi-page Responsive Website and API driven</div>
            <div className='techText1'>Tech Used: <img src={iconHtml} alt="" className='iconText' /> <img src={iconCss} alt="" className='iconText' /> <img src={iconBs} alt="" className='iconText' /> <img src={iconJs} alt="" className='iconText' /></div>

            <div className='buttons'>
              <a href="https://github.com/Nuttychoco/Dsignfabsv4" target="_blank"
                rel="noopener noreferrer">
                <button className='buttonProject'> <FontAwesomeIcon icon={faGithub} /> Github repository</button>
              </a>
            </div>
          </div>
        </div>

        <div className='hralign'>
          <hr className='hr1' data-aos="flip-right" />
        </div>

        <div className='project1' data-aos="fade-down">
          <div className='imageAlign1'>
            <img src={Dfields} alt="" className='projectimg1' />
          </div>
          <div className='projectGroupText'>
            <h1 className='imgTitle'>Dream Fields</h1>
            <div className='suppText1'>Real Estate Web App </div>
            <div className='desText'>Static, Multi-page Responsive Website and API driven</div>
            <div className='techText1'>Tech Used: <img src={iconLara} alt="" className='iconText' /> <img src={iconCss} alt="" className='iconText' /> <img src={iconBs} alt="" className='iconText' /> <img src={iconJs} alt="" className='iconText' /></div>

            <div className='buttons'>
              <a href="https://github.com/ricesush/dream-fields" target="_blank"
                rel="noopener noreferrer">
                <button className='buttonProject'> <FontAwesomeIcon icon={faGithub} /> Github repository</button>
              </a>
            </div>
          </div>
        </div>

        <div className='hralign'>
          <hr className='hr1' data-aos="flip-right" />
        </div>

        <div className='project1' data-aos="fade-down">
          <div className='imageAlign1'>
            <img src={Chode} alt="" className='projectimg1' />
          </div>
          <div className='projectGroupText'>
            <h1 className='imgTitle'>Chode</h1>
            <div className='suppText1'>Tour Guide Web App </div>
            <div className='desText'>Static, Multi-page Responsive Website and API driven.</div>
            <div className='techText1'>Tech Used: <img src={iconHtml} alt="" className='iconText' /> <img src={iconCss} alt="" className='iconText' /> <img src={iconBs} alt="" className='iconText' /> <img src={iconJs} alt="" className='iconText' /></div>

            <div className='buttons'>
              <a href="https://github.com/tsujintsujin/chodae" target="_blank"
                rel="noopener noreferrer">
                <button className='buttonProject'> <FontAwesomeIcon icon={faGithub} /> Github repository</button>
              </a>
            </div>
          </div>
        </div>

        <div className='hralign'>
          <hr className='hr1' data-aos="flip-right" />
        </div>


      </div>

    </section>
  )
}

export default AllProjects;