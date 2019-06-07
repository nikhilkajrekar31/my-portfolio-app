import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Home extends Component{
  render(){
    return(
      <div style = {{width:'100%', margin:'auto'}} className = 'home-container' >
        <Grid className="home-grid">
          <Cell col = {12}>
          <img
            src = "https://img.icons8.com/bubbles/2x/administrator-male.png"
            alt = "avatar"
            className = "avatar-img"
            />
          <div className = "banner-text">
            <h1>Computer Science Master's Student</h1>
            <h2>UNIVERSITY OF TEXAS AT ARLINGTON</h2>
          <hr/>
          <p>HTML | CSS | JavaScript | Bootstrap | PHP | React | NodeJS | Java | Python | MySQL | AWS</p>
          <div className = "social-links">

            {/*LinkedIn*/}
            <a href="https://www.linkedin.com/in/nikhil-kajrekar-0207bb135/" rel = "noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"/>
            </a>

            {/*GitHub*/}
            <a href="https://github.com/nikhilkajrekar31/" rel = "noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true"/>
            </a>

            {/*Facebook*/}
            <a href="https://www.facebook.com/nikhil.kajrekar.5" rel = "noopener noreferrer" target="_blank">
              <i className="fa fa-facebook-square" aria-hidden="true"/>
            </a>

            {/*Instagram*/}
            <a href="https://www.instagram.com/neonik420/" rel = "noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true"/>
            </a>

          </div>
          </div>


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;
