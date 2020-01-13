import React, { Component } from "react";

import MenuItem from "./MenuItem";
import "./homepage.style.scss";

class Directory extends Component {
  state = {
    sections: [
      {
        title: "T-Shirt",
        imageUrl:
          "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg",
        id: 1
      },
      {
        title: "Jackets",
        imageUrl:
          "https://images.pexels.com/photos/349494/pexels-photo-349494.jpeg",
        id: 2
      },
      {
        title: "Hoodies",
        imageUrl:
          "https://images.pexels.com/photos/171945/pexels-photo-171945.jpeg",
        id: 3
      },
      {
        title: "Men",
        imageUrl:
          "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
        size: "large",
        id: 4
      },
      {
        title: "Women",
        imageUrl:
          "https://images.pexels.com/photos/1861907/pexels-photo-1861907.jpeg",
        size: "large",
        id: 5
      }
    ]
  };
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(section => (
          <MenuItem
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
            key={section.id}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
