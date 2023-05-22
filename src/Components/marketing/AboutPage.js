import React from 'react';
import Mike from "../../images/mike.png";
import Kristi from "../../images/kristi.png";
import Jonathan from "../../images/jonathan.png";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div>
      <div className="card-row">
          <div className="CardBody">
            <div className="CardTitle">
              <h3>Michael A. Harms</h3>
              <img className="CardImg" src={Mike} alt="Michael A. Harms" />           
                <div className="CardText">
                <h4>Project Manager - Algorithm Engineer - Devops</h4>
                <p>
                  <div>
                    Michael is a Lamba School TL, open-source software engineer, and published author. He likes coffee, calisthenics, and humanity.
                    Michael is excited about bringing humanity into a new golden age through cost-reduction, and is actively laying out the welcome mat for our AI overlords.
                    He can be easily reached via <a href="https://twitter.com/michaelharms70" rel="noopener noreferrer" target="_blank">twitter</a>.
                  </div>
                </p>
                </div>
            </div>
          </div>
  
        <div className="CardBody">
          <div className="CardTitle">
            <h3>Kristi Gribble</h3> 
              <img className="CardImg" src={Kristi} alt="Kristi Gribble" />           
                <div className="CardText">
                <h4>Development Lead + User Research</h4>
                <p>
                  <div>
                    Kristi is a full stack web developer with a passion for family, education, and green tea. She's notorious for her ability
                    as well as her modesty. Wordsurge is Kristi's brainchild. She led user research, front-end development, and user testing.
                  </div>
                </p>
                </div>
            </div>
          </div>
  
        <div className="CardBody">
          <div className="CardTitle">
            <h3>Jonathan Durham</h3>
              <img className="CardImg" src={Jonathan} alt="Jonathan Durham" />           
                <div className="CardText">
                <h4>Junior Engineer</h4>
                <p>
                  <div>
                    Jonathan is a Junior Engineer putting his training as a Full Stack Engineer to work for this project.  He expect to make many
                    contributions that increase the success of the site.
                  </div>
                </p>
                </div>
            </div>
        </div>

      </div>
    </div>
   
  );
}
export default AboutPage;