import React from "react";
import Meta from "./../components/Meta";
import { requireAuth } from "./../util/auth";

function CharactersPage(props) {
  return <Meta title="Characters" />;
}

export default requireAuth(CharactersPage);
