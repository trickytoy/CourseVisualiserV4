import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { initialNodes } from '../../data/coursesOnly';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Prospects() {
  // Define the common styles
  const boxStyles = {
    border: "1px solid black",
    height: "90vh", // You can also add more common styles here
    borderRadius: "10px",
    overflowY: "auto", // Make the box scrollable
  };

  const courseBox = {
    border: "1px solid black",
    padding: "10px",
    marginTop: "10px",
    height: "auto", // Limit the height of this box
    overflowY: "auto", // Enable vertical scrolling within the box
  };

  const searchBoxStyle = {
    margin: "6px"
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {/* First Box */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={boxStyles}>
            <Autocomplete
                sx={searchBoxStyle}
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={initialNodes.map((option) => option.data.label)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      type: 'search',
                    },
                  }}
                  sx={{ height: "56px" }} // Adjust this to change the height of the input field
                />
              )}
            />
            <Box sx={courseBox}>
              {/* Map through initialNodes and render each node */}
              {initialNodes.map((node, index) => (
                <Box key={index} sx={{ marginBottom: 2 }}>
                  <Typography variant="h6">{node.data.label} - {node.data.title}</Typography>
                  {/* You can also display other details from node if needed */}
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Second Box */}
        <Grid item xs={12} sm={6} md={8}>
          <Box sx={boxStyles}></Box>
        </Grid>

        {/* Third Box */}
        <Grid item xs={12}>
          <Box sx={{ ...boxStyles, height: 600 }}></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
