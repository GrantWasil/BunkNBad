import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  InputLabel,
  Box,
  Alert,
  Grid,
  TextField,
  Button,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";

function Character(props) {
  const [archetype, setArchetype] = useState("");
  const [className, setClassName] = useState("");
  const { handleSubmit, register, erorrs, reset } = useForm();

  const handleArchetypeChange = (event) => {
    setArchetype(event.target.value);
  };

  const handleClassNameChange = (event) => {
      setClassName(event.target.value);
  }

  return (
    <>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="archetype-label">Archetype</InputLabel>
            <Select
              labelId="archetype-label"
              label="Archetype"
              value={archetype}
              onChange={handleArchetypeChange}
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
              labelId="classname-label"
              label="ClassName"
              value={className}
              onChange={handleClassNameChange}
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
