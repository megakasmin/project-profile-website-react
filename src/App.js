import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link, HashRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="demo-big-content">
          <Layout>
            <Header
              className="header-color"
              title={
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  My Portfolio
                </Link>
              }
              scroll
            ></Header>
            <Drawer
              title={
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  My Portfolio
                </Link>
              }
            >
              <Navigation>
                <Link to="/resume">Resume</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }
}
export default App;
