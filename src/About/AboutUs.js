import React, { Component } from 'react'
import kathey from '../images/kathey.jpeg'
import rohit from '../images/rohit.jpeg'
import kevin from '../images/kevin.jpeg'
import '../index.css'


class AboutUs extends Component {
  render() {
    return (
      <div>
        <div class='about-section'>
          <h1>Hello There!</h1>
          <p>We are the artists who run this store. Show us some love!</p>
        </div>

        <div class='row'>
          <div class='column'>
            <div class='card'>
              <img src={kathey} class='img-class' alt='Kathey' />
              <div class='container'>
                <h2>Kathey</h2>
                <p class='title'>Founder & Owner</p>
                <p>Passionate about art from a very young age, I always wanted to have a platfrom to sell my art</p>
                <p>kathey@artshop.com</p>
                <p>
                  <button class='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class='column'>
            <div class='card'>
              <img src={rohit} class='img-class' alt='Rohit' />
              <div class='container'>
                <h2>Rohit</h2>
                <p class='title'>Oil Painting Artist</p>
                <p>I could certainly never mirror nature. I would more like to paint what it leaves with me.</p>
                <p>rohit@artshop.com</p>
                <p>
                  <button class='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class='column'>
            <div class='card'>
              <img src={kevin} class='img-class' alt='Kevin' />
              <div class='container'>
                <h2>Kevin</h2>
                <p class='title'>Pencil Sketch Artist</p>
                <p>Sketching and drawing is allowing me to express my feelings on canvas. I feel a sense of peace when I create something visually appealing.</p>
                <p>kevin@artshop.com</p>
                <p>
                  <button class='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs
