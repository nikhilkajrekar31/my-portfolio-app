import React, {Component} from 'react';
import Typed from 'react-typed';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class About extends Component{
  render(){
    return (
            <div className="aboutme-body" style = {{width:'100%', margin:'auto'}}>
              <Grid className="aboutme-grid">
                <Cell col = {5} className='cell-1'>
                  <img
                  src="https://img.icons8.com/bubbles/2x/administrator-male.png"
                  alt="avatar"
                  style={{height: '250px'}}
                  />
                  <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>I am currently a Computer Science Master's student at The University of Texas at Arlington. I believe I am a creative, hardworking, open minded and fun loving individual who has a passion for technology and art. I am looking for a full-time job opportunity that constantly challenges my abilities and skills so that I get to learn more in the field of web, software, and systems.
                  </p>
                </Cell>
                <Cell col = {7} className='cell-2'>
                  <p style={{width:'90%', margin:'auto', paddingTop:'1em'}}>HELLO EVERYBODY, I AM</p>
                  <p style={{width:'90%', margin:'auto', paddingTop:'1em', paddingBottom:'.5em', color:'#800000'}}>NIKHIL</p>
                  <p style={{width:'90%', margin:'auto', paddingBottom:'1em', color:'#800000'}}>KAJREKAR</p>
                  <Typed className='typed-js'
                    strings={['I love to code', 'I love art',
                    'I am a Computer Science student', 'I love exploring new places']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop>
                  </Typed>
                  <hr/>
                  <div className="aboutme-list">
                    <List>
                      <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fa fa-birthday-cake" aria-hidden="true"/>
                        08/16/1994
                        </ListItemContent>
                      </ListItem>
                      <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fa fa-home" aria-hidden="true"/>
                        Arlington, TX
                        </ListItemContent>
                      </ListItem>
                      <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fa fa-flag" aria-hidden="true"/>
                        Asian (India)
                        </ListItemContent>
                      </ListItem>
                    </List>
                  </div>
                </Cell>
              </Grid>
            </div>
    )
  }
}

export default About;
