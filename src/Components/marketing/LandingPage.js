import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Footer from '../navs/Footer'

const LandingPage = () => {
  return (
    <section>
      <section className='landing-container'>
        <span className='landing-header'>
          <img src="" alt='' className='img-puzzle' />
          <img src="" alt='' className='img-puzzle' />
        </span>
        <section className='landing-container-content'>
          <h3>Welcome to Our Puzzle Making App!</h3>
          <br/>
          <h4>Our Goal:</h4>
          <br/>
          <span>
            <h5>
              To Help Kids Meet Their Educational Needs While Making Creative Puzzles {' '}
              <i>(i.e. More Dynamically)</i> for School Projects.
						</h5>
          </span>
          <br/>
          {/* <div>
            <Link to='/about'>
              <Button color='warning'>About Us</Button>
            </Link>
          </div> */}
        </section>
        <section className='landing-container-cards'>
          <span className='landing-card-row'>
            <span className='landing-container-card'>
              <img src="" alt='' href='https://icons8.com' />
              <h1>Puzzle Making Activities</h1>
              <br/>
              <p>
                For those Extra-Curricular Activities like Puzzle Making Fairs. Here you will find that kids can create puzzles more creatively before. Instructions, Ideas, Plans, Friends. See what other kids your age are doing. See what projects you can do on a budget for Kids.
							</p>
            </span>
          </span>
        </section>
      </section>
      <Footer />
    </section>
  )
}

export default LandingPage