import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Nikhil Kajrekar</h2>
            <img
            src="https://img.icons8.com/bubbles/2x/administrator-male.png"
            alt="avatar"
            style={{height: '250px'}}
            />
            <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>If you have a question, please feel free to drop me a line. I'll be glad to answer your questions.</p>
          </Cell>
          <Cell col={6}>
            <h2 style={{color:'black'}}>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  (682)313-6859
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  nikhilkajrekar31@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  nikhillavoo.kajrekar@mavs.uta.edu
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-skype" aria-hidden="true"/>
                  live:73d42bccc300f09a
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

export default Contact;
