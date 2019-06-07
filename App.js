import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className = "header-color" title="MY PORTFOLIO" scroll>
            <Navigation>
                <Link to="/">HOME</Link>
                <Link to="/resume">RESUME</Link>
                <Link to="/blog">BLOG</Link>
                <Link to="/aboutme">ABOUT ME</Link>
                <Link to="/contact">CONTACT</Link>
            </Navigation>
        </Header>
        <Drawer title="MY PORTFOLIO">
            <Navigation>
            <Link to="/">HOME</Link>
            <Link to="/resume">RESUME</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/aboutme">ABOUT ME</Link>
            <Link to="/contact">CONTACT</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
