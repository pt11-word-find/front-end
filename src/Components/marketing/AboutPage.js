import React from 'react';
import Mike from "../../images/mike.png";
import Kristy from "../../images/kristy.png";
import Shya from "../../images/shya.png";
import Brian from "../../images/Brian_Avatar.jpg";
import Catherine from "../../images/catherine.png";
import {
  Card, 
  CardTitle, 
  CardText, 
  CardImg, 
  CardImgOverlay,
  Col, 
  Row, 
} from 'reactstrap';


const AboutPage = () => {

    const black = {
    color: "black",
    fontWeight: "900",
  };

    const margin = {
    margin: "2%",
  };

  return (
    <section>
      <br />
      <div>
        <h2>About US</h2>
        <p></p>
      </div>
      <Row>
        <Col lg="4">
          <Card inverse className="card" style={margin}>
            <CardImg width="50%" height="100%" src={Mike} alt="Mike" />
            <CardImgOverlay>
              <CardTitle>
                <h3 style={black}>Michael A. Harms</h3>
              </CardTitle>
              <CardText>
                <p>
                  Michael is an awesome TL at Lambda School. He is great at
                  guiding students to find efficient solutions for their
                  full-stack React App
                </p>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col lg="4">
          <Card inverse className="card" style={margin}>
            <CardImg width="50%" height="100%" src={Kristy} alt="Kristy" />
            <CardImgOverlay>
              <CardTitle>
                <h3 style={black}>Kristy Gribble</h3>
              </CardTitle>
              <CardText>
                <p>
                  Kristy is an awesome full stack student at Lambda School. She
                  is great at helping other students to debug, test on Postman
                  for BE projects with ExpressJS and NodeJS
                </p>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col lg="4">
          <Card inverse className="card" style={margin}>
            <CardImg width="50%" height="100%" src={Shya} alt="Shya" /> 
            <CardImgOverlay>
              <CardTitle>
                <h3 style={black}>Shya Biswas</h3>
              </CardTitle>
              <CardText>
                <p>
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
                </p>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col lg="4">
          <Card inverse className="card" style={margin}>
            <CardImg width="50%" height="100%" src={Brian} alt="Brian" />
            <CardImgOverlay>
              <CardTitle>
                <h3 style={black}>Brian Leonard</h3>
              </CardTitle>
              <CardText>
                <p>
                  Brian is a full stack student at Lambda School. He is
                  currently helping us with backend implementation for this
                  project
                </p>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
        <br />
        <Col lg="4">
          <Card inverse className="card" style={margin}>
            <CardImg
              width="50%"
              height="100%"
              src={Catherine}
              alt="Catherine"
            />
            <CardImgOverlay>
              <CardTitle>
                <h3 style={black}>Catherine Kim</h3>
              </CardTitle>
              <CardText>
                <p>
                  Catherine is a full stack developer with a growth mindset.
                  What sets her apart is her “prior-life” work experience on the
                  patent prosecution and litigation side of the IP world. This
                  IP background enables her to bridge the legal and tech
                  needs of a user from a pragmatic, real-world IP space
                  perspective. Her passion is to shape IP
                  workflow management, analytics, & transactions in a much more
                  dynamic, intuitive and easier way than ever before.
                </p>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default AboutPage