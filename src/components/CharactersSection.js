import React from "react";
import Container from "@material-ui/core/Container";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Character from "./Character";

function CharactersSection(props) {
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="lg">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Character
          showNameField={props.showNameField}
          buttonText={props.buttonText}
          buttonColor={props.buttonColor}
        />
      </Container>
    </Section>
  );
}

export default CharactersSection;
