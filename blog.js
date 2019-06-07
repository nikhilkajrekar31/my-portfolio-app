import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardMenu, IconButton} from 'react-mdl';

class Blog extends Component{
  constructor(props){
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className="blog-grid">
          {/*Artwork1*/}
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.fineartamerica.com/images-medium-large-5/2-bob-marley-andrew-read.jpg) center / cover'}}> Artwork #1</CardTitle>
            <CardText>
              tptptptptptptptptptptpptptptpt
            </CardText>
            <CardMenu>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
          {/*Artwork2*/}
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.fineartamerica.com/images-medium-large-5/2-bob-marley-andrew-read.jpg) center / cover'}}> Artwork #2</CardTitle>
            <CardText>
              tptptptptptptptptptptpptptptpt
            </CardText>
            <CardMenu>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
          {/*Artwork3*/}
          <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.fineartamerica.com/images-medium-large-5/2-bob-marley-andrew-read.jpg) center / cover'}}> Artwork #3</CardTitle>
            <CardText>
              tptptptptptptptptptptpptptptpt
            </CardText>
            <CardMenu>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
        return(
          <div><h1>Kerela</h1></div>
        )
    } else if (this.state.activeTab === 2) {
        return(
          <div><h1>Goa</h1></div>
        )
    } else if (this.state.activeTab === 3) {
        return(
          <div><h1>Maharashtra</h1></div>
        )
    } else if (this.state.activeTab === 4) {
        return(
          <div><h1>Australia</h1></div>
        )
    } else if (this.state.activeTab === 5) {
        return(
          <div><h1>Dubai</h1></div>
        )
    } else if (this.state.activeTab === 6) {
        return(
          <div><h1>USA</h1></div>
        )
    }
  }

  render(){
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange= {(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>Artwork</Tab>
          <Tab>Kerela</Tab>
          <Tab>Goa</Tab>
          <Tab>Maharashtra</Tab>
          <Tab>Australia</Tab>
          <Tab>Dubai</Tab>
          <Tab>USA</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Blog;
