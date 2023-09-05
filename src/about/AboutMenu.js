import React, { Component } from 'react';
import AboutMenuItem from "./AboutMenuItem.js";
import AboutSubheading from "./AboutSubheading.js";
import subheadingsData from "./SubheadingsData.js";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/book.png";
import careerIcon from "../assets/upgrade.png";
import aboutMePicture from "../assets/pp.png";
import ubcLogo from "../assets/ubc-logo-png-transparent.png";
import Loader from "react-loaders";
import "../styles/aboutMenu.scss";

export default class AboutMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
      activeSubheading: 1
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubheading: 1
    });
  }

  handleSubheadingClick = (subheading) => {
    this.setState({
      activeSubheading: subheading
    });
  }

  render() {

    const {activeMenuItem, activeSubheading} = this.state;
    const menuItems = ["PERSONAL", "EDUCATION", "CAREER"];
    const activeMenuTitle = menuItems[activeMenuItem-1];
    const activeMenuIcon = 
      activeMenuTitle === "PERSONAL" 
      ? personalIcon 
      : activeMenuTitle === "EDUCATION" 
      ? educationIcon 
      : careerIcon;

    const subheadings = subheadingsData[activeMenuItem];

    return (
      <>
        <div className="menu">
        {menuItems.map((item, index) => (
          <AboutMenuItem 
            key={index}
            title={item}
            active={activeMenuItem === index + 1}
            onClick={() => this.handleMenuItemClick(index + 1)}
          />
        ))}
        </div>
        <div className="sub-container">
          <div className="icon-title-container">
            <img src={activeMenuIcon} alt={activeMenuTitle} className="icon"/>
            <h3>{activeMenuTitle}</h3>
          </div>
          {activeMenuTitle === "PERSONAL" && <img src={aboutMePicture} alt="me" className="personal-picture"/>}
          {activeMenuTitle === "EDUCATION" && <img src={ubcLogo} alt="me" className="ubc-logo"/>}
          {subheadings.map((subheading, index) => (
            <AboutSubheading 
              key={index}
              title={subheading.title}
              content={subheading.content}
              active={activeSubheading === index + 1}
              onClick={() => this.handleSubheadingClick(index + 1)}
              menuItem = {activeMenuItem}
            />
          ))}
        </div>
        <Loader type="pacman" />
      </>
    );
  }
}
