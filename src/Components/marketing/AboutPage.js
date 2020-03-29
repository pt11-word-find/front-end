import React from 'react';
import Mike from "../../images/mike.jpg";
import Kristy from "../../images/kristy.png";
import Shya from "../../images/shya.jpg";
// import Brian from "../../images/";
import Catherine from "../../images/catherine.jpg";


const AboutPage = () => {

  return (
    <section>
      <br />
      <div>
        <h2>About US</h2>
        <p></p>
      </div>
      <br />
      <div>
        <img src={Mike} alt='Mike' />
        <h3>Michael A. Harms</h3>
        <p>Michael is an awesome TL at Lambda School. He is great at guiding students to find efficient solutions for their full-stack React App</p>
      </div>
      <br />
      <div>
        <img src={Kristy} alt='Kristy' />
        <h3>Kristy Gribble</h3>
        <p>Kristy is an awesome full stack student at Lambda School. She is great at helping other students to debug, test on Postman for BE projects with ExpressJS and NodeJS</p>
      </div>
      <br />
      <div>
        <img src={Shya} alt='Shya' />
        <h3>Shya Biswas</h3>
        <p>Shya Biswas is presently persuing full stack webdevelopment course at lambda school. Shya is originally from India, she has a PhD in Biotechnology and several years of teaching and research experience in several labs here in the US. Her research focuses on biology of aging and life extension. Shya also runs a monthly Biotech magazine where she publishes articles on latest biotechnology news, research and developments. Her interest in web-development started while working on her magazine and building website for her magazine, she can be reached at shyabiswas@gmail.com </p>
      </div>
      <br />
      <div>
        <img src='' alt='' />
        <h3>Brian Leonard</h3>
        <p>Brian is a full stack student at Lambda School. He is currently helping us with backend implementation for this project</p>
      </div>
      <br />
      <div>
        <img src={Catherine} alt='Catherine' />
        <h3>Catherine Kim</h3>
        <p>Catherine is a full stack developer with a growth mindset. What sets her apart is her “prior-life” work experience on the patent prosecution and litigation side of the IP world. This IP legal background enables her to bridge the legal and tech needs of a platform user from a pragmatic, real-world IP space perspective. She is fascinated by the intersection of AI SaaS/SEM, computational design and patent search analytics powered by machine learning. Her passion is to shape IP workflow management, analytics, & transactions in a much more dynamic, intuitive and easier way than ever before.</p>
      </div>
    </section>
  )
}

export default AboutPage