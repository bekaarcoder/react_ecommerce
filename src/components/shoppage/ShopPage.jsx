import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "./CollectionOverview";
import CollectionPage from "./CollectionPage";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route path={`${match.path}`} exact component={CollectionOverview} />
      <Route path={`${match.path}/:category`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
