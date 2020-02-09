import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySelections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, title, ...otherSectionProps }) => (
      <MenuItem key={id} title={title.toUpperCase()} {...otherSectionProps} />
    ))}
  </div>
);

const mapStatesToProps = createStructuredSelector({
  sections: selectDirectorySelections
});

export default connect(mapStatesToProps)(Directory);
