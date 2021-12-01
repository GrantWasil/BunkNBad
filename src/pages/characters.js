import React from "react";
import Meta from "./../components/Meta";
import { requireAuth } from "./../util/auth";
import CharactersSection from "../components/CharactersSection";

function CharactersPage(props) {
  return (
    <>
      <Meta title="Characters" />
      <CharactersSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpactiy={1}
        title="Your Character"
        subtitle=""
      />
    </>
  );
}

export default requireAuth(CharactersPage);
