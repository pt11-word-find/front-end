import React from 'react';
import Mike from "../../images/mike.png";
import Kristi from "../../images/kristi.png";
import Shya from "../../images/shya.png";
import Brian from "../../images/Brian_Avatar.jpg";
import Catherine from "../../images/catherine.png";
import "./AboutPage.scss";

const AboutPage = () => {
    const black = {
    color: "black",
    fontWeight: "900",
   };
    const margin = {
    margin: "2%",
  };
  return (
    <div>
        <div className="card-row">
          <div className="CardBody">
            <div className="CardTitle">
              <h3>Michael A. Harms</h3>
              <img className="CardImg" src={Mike} alt="Michael A. Harms" />           
                <div className="CardText">
                <p>
                  <div>
                    Michael is an awesome TL at Lambda School. He is great at
                    guiding students to find efficient solutions for their
                    full-stack React App
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
                <p>
                  <div>
                    Kristi is an awesome full stack student at Lambda School. She
                    is great at helping other students to debug, test on Postman
                    for BE projects with ExpressJS and NodeJS
                  </div>
                </p>
                </div>
            </div>
          </div>
        

        <div className="CardBody">
          <div className="CardTitle">
            <h3>Shya Biswas</h3>
              <img className="CardImg" src={Shya} alt="Shya Biswas" />           
                <div className="CardText">
                <p>
                  <div>
                  Shya Biswas is presently persuing full stack webdevelopment
                  course at lambda school. Shya is originally from India, she
                  has a PhD in Biotechnology and several years of teaching and
                  research experience in several labs here in the US. Her
                  research focuses on biology of aging and life extension. Shya
                  also runs a monthly Biotech magazine where she publishes
                  articles on latest biotechnology news, research and
                  developments. Her interest in web-development started while
                  working on her magazine and building website for her magazine,
                  she can be reached at shyabiswas@gmail.com{" "}
                  </div>
                </p>
                </div>
            </div>
          </div>
        

        <div className="CardBody">
          <div className="CardTitle">
            <h3>Brian Leonard</h3>
              <img className="CardImg" src={Brian} alt="Brian Leonard" />           
                <div className="CardText">
                <p>
                  <div>
                    Brian is a full stack student at Lambda School. He is
                    currently helping us with backend implementation for this
                    project
                  </div>
                </p>
                </div>
            </div>
        </div>
        

        <div className="CardBody">
          <div className="CardTitle">
            <h3>Catherine Kim</h3>
              <img className="CardImg" src={Catherine} alt="Catherine Kim" />           
                <div className="CardText">
                <p>
                  <div>
                    Catherine is a full stack developer with a growth mindset.
                    What sets her apart is her “prior-life” work experience on the
                    patent prosecution and litigation side of the IP world. This
                    IP background enables her to bridge the legal and tech
                    needs of a user from a pragmatic, real-world IP space
                    perspective. Her passion is to shape IP
                    workflow management, analytics, & transactions in a much more
                    dynamic, intuitive and easier way than ever before.
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