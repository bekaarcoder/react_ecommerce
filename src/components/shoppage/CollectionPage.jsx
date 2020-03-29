import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelector";
import CollectionItem from "./CollectionItem";

const CollectionPage = ({ collection }) => {
  const { id, title, items } = collection;
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.map(item => (
          <CollectionItem key={id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.category)(state)
});

export default connect(mapStateToProps)(CollectionPage);
