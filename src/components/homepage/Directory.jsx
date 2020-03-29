import React from "react";
import { connect } from "react-redux";

import MenuItem from "./MenuItem";
import "./homepage.style.scss";
import { selectSections } from "../../redux/directory/directorySelector";

const Directory = ({ sections }) => {
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
};

const mapStateToProps = state => ({
  sections: selectSections(state)
});

export default connect(mapStateToProps)(Directory);
