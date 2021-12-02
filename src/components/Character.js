import React, { useState } from "react";
import {
  InputLabel,
  Grid,
  Select,
  MenuItem,
  FormControl,
  TextField,
} from "@material-ui/core";

function Character(props) {
  const chracterValues = {
    archetype: "",
    chosenClass: "",
    characterName: "",
    background: "",
    level: 0,
    actionSkill: "",
    accuracy: 0,
    accuracyMod: 0,
    damage: 0,
    damageMod: 0,
    speed: 0,
    speedMod: 0,
    mastery: 0,
    masteryMod: 0,
  };

  const [values, setValues] = useState(chracterValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="archetype-label">Archetype</InputLabel>
            <Select
              name="archetype"
              labelId="archetype-label"
              label="Archetype"
              value={values.archetype}
              onChange={handleInputChange}
            >
              <MenuItem value="Enforcer">Enforcer</MenuItem>
              <MenuItem value="Elemental">Elemental</MenuItem>
              <MenuItem value="Deadeye">Deadeye</MenuItem>
              <MenuItem value="Guardian">Guardian</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="classname-label">Classname</InputLabel>
            <Select
              name="chosenClass"
              labelId="classname-label"
              label="ClassName"
              value={values.chosenClass}
              onChange={handleInputChange}
            >
              <MenuItem value="Assassin">Assassin</MenuItem>
              <MenuItem value="Berserker">Berserker</MenuItem>
              <MenuItem value="Commando">Commando</MenuItem>
              <MenuItem value="Gunzerker">Gunzerker</MenuItem>
              <MenuItem value="Hunter">Hunter</MenuItem>
              <MenuItem value="Mechromancer">Mechromancer</MenuItem>
              <MenuItem value="Psycho">Psycho</MenuItem>
              <MenuItem value="Siren">Siren</MenuItem>
              <MenuItem value="Soldier">Soldier</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12} md={5}>
          <FormControl fullWidth>
            <TextField
              type="text"
              name="characterName"
              label="Character Name"
              value={values.chracterName}
              onChange={handleInputChange}
            ></TextField>
          </FormControl>
        </Grid>
        <Grid item={true} xs={12} md={5}>
          <FormControl fullWidth>
            <InputLabel id="classname-label">Classname</InputLabel>
            <Select
              name="chosenClass"
              labelId="classname-label"
              label="ClassName"
              value={values.chosenClass}
              onChange={handleInputChange}
            >
              <MenuItem value="Assassin">Assassin</MenuItem>
              <MenuItem value="Berserker">Berserker</MenuItem>
              <MenuItem value="Commando">Commando</MenuItem>
              <MenuItem value="Gunzerker">Gunzerker</MenuItem>
              <MenuItem value="Hunter">Hunter</MenuItem>
              <MenuItem value="Mechromancer">Mechromancer</MenuItem>
              <MenuItem value="Psycho">Psycho</MenuItem>
              <MenuItem value="Siren">Siren</MenuItem>
              <MenuItem value="Soldier">Soldier</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item={true} xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel id="classname-label">Classname</InputLabel>
            <Select
              name="chosenClass"
              labelId="classname-label"
              label="ClassName"
              value={values.chosenClass}
              onChange={handleInputChange}
            >
              <MenuItem value="Assassin">Assassin</MenuItem>
              <MenuItem value="Berserker">Berserker</MenuItem>
              <MenuItem value="Commando">Commando</MenuItem>
              <MenuItem value="Gunzerker">Gunzerker</MenuItem>
              <MenuItem value="Hunter">Hunter</MenuItem>
              <MenuItem value="Mechromancer">Mechromancer</MenuItem>
              <MenuItem value="Psycho">Psycho</MenuItem>
              <MenuItem value="Siren">Siren</MenuItem>
              <MenuItem value="Soldier">Soldier</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

export default Character;
