import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "./CollectionPreview";
import { selectCollections } from "../../redux/shop/shopSelector";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  collections: selectCollections(state)
});

export default connect(mapStateToProps)(CollectionOverview);
